import { existsSync } from 'node:fs';
import { mkdir, realpath, writeFile } from 'node:fs/promises';
import os from 'node:os';
import { dirname, basename, extname, join, resolve, win32, posix } from 'path';
import { pathToFileURL } from 'url';

import chalk from 'chalk';
import esbuild from 'esbuild';
import globby from 'globby';
// @ts-ignore
// eslint-disable-next-line
import { render } from 'jsx-email';
import micromatch from 'micromatch';
import { isWindows } from 'std-env';
import type { Output as Infer } from 'valibot';
import { parse as assert, boolean, object, optional, string } from 'valibot';

import { log } from '../../log.js';
import { formatBytes, gmailByteLimit } from '../helpers.mjs';

import type { CommandFn, TemplateFn } from './types.mjs';

const BuildCommandOptionsStruct = object({
  exclude: optional(string()),
  minify: optional(boolean()),
  out: optional(string()),
  plain: optional(boolean()),
  pretty: optional(boolean()),
  props: optional(string()),
  usePreviewProps: optional(boolean()),
  useTemplateName: optional(boolean()),
  writeToFile: optional(boolean())
});

type BuildCommandOptions = Infer<typeof BuildCommandOptionsStruct>;

interface BuildCommandOptionsInternal extends BuildCommandOptions {
  showStats?: boolean;
}

interface BuildOptions {
  argv: BuildCommandOptions;
  outputBasePath?: string;
  path: string;
}

export const help = chalk`
{blue email build}

Builds a template and saves the result

{underline Usage}
  $ email build <template file or dir path> [...options]

{underline Options}
  --exclude     A micromatch glob pattern that specifies files to exclude from the build
  --minify      Minify the rendered template before saving
  --out         File path to save the rendered template
  --plain       Emit template as plain text
  --pretty      Oututs HTML in a pretty-print format. Note: Don't use this for production.
  --props       A JSON string containing props to be passed to the email template
                This is usually only useful when building a single template, unless all of your
                templates share the same props.

{underline Examples}
  $ email build ./src/emails
  $ email build ./src/templates/Invite.tsx
  $ email build ./src/templates/Invite.tsx --props='\{"batman": "Bruce Wayne"\}'
`;

// Credit: https://github.com/rollup/plugins/blob/master/packages/pluginutils/src/normalizePath.ts#L5
const normalizePath = (filename: string) => filename.split(win32.sep).join(posix.sep);

// FIXME: in v2 change the signature to an object
export const build = async (options: BuildOptions) => {
  const { argv, outputBasePath, path } = options;
  const { out, plain, props = '{}', usePreviewProps, useTemplateName, writeToFile = true } = argv;
  const platformPath = isWindows ? pathToFileURL(normalizePath(path)).toString() : path;
  const template = await import(platformPath);
  // proper named export
  const componentExport: TemplateFn = template.Template;

  if (typeof componentExport !== 'function') {
    log.error(
      chalk`{red Template Export Problem:} ${path} doesn't have an export  of a JSX Element named \`Template\`. If you feel this is a bug, please open a new issue.`
    );
    process.exit(1);
  }

  const extension = plain ? '.txt' : '.html';
  const renderProps = usePreviewProps ? template.previewProps || {} : JSON.parse(props);
  const fileExt = extname(path);
  const templateName = useTemplateName ? template.templateName : basename(path, fileExt);
  const component = componentExport(renderProps);
  const baseDir = dirname(path);
  const writePath = outputBasePath
    ? join(out!, baseDir.replace(outputBasePath, ''), templateName + extension)
    : join(out!, templateName + extension);

  await mkdir(dirname(writePath), { recursive: true });

  if (plain) {
    const plainText = await render(component, { plainText: plain });
    if (writeToFile) await writeFile(writePath, plainText, 'utf8');
    return plainText;
  }

  const html = await render(component, argv as any);

  if (writeToFile) await writeFile(writePath, html, 'utf8');

  return html;
};

const compile = async (files: string[], outDir: string) => {
  await esbuild.build({
    bundle: true,
    entryPoints: files,
    jsx: 'automatic',
    logLevel: 'error',
    outdir: outDir,
    platform: 'node',
    write: true
  });

  return globby([normalizePath(join(outDir, '**/*.js'))]);
};

interface BuildTemplateParams {
  buildOptions: BuildCommandOptionsInternal;
  targetPath: string;
}

export const buildTemplates = async ({ targetPath, buildOptions }: BuildTemplateParams) => {
  const tmpdir = await realpath(os.tmpdir());
  const esbuildOutPath = join(tmpdir, 'jsx-email', Date.now().toString());

  // Note: niave check that will probably get us into some edge cases
  const isFile = targetPath.endsWith('.tsx') || targetPath.endsWith('.jsx');
  const { exclude, out = '.rendered', showStats = true, writeToFile = true } = buildOptions;
  const glob = isFile ? targetPath : join(targetPath, '**/*.{jsx,tsx}');
  const outputPath = resolve(out);
  let largeCount = 0;
  let targetFiles = await globby([normalizePath(glob)]);

  if (exclude) targetFiles = targetFiles.filter((path) => !micromatch.isMatch(path, exclude));

  log.info(chalk`{cyan Found}`, targetFiles.length, 'files:');
  log.info('  ', targetFiles.join('\n  '));
  log.info(chalk`\n{blue Starting build...}`);

  const compiledFiles = await compile(targetFiles, esbuildOutPath);

  const result = await Promise.all(
    compiledFiles.map(async (filePath, index) => {
      const res = {
        fileName: targetFiles[index],
        html: await build({
          argv: { ...buildOptions, out: outputPath },
          outputBasePath: esbuildOutPath,
          path: filePath
        })
      };

      if (showStats) {
        const bytes = Buffer.byteLength(res.html, 'utf8');
        const htmlSize = formatBytes(bytes);

        if (bytes > gmailByteLimit) largeCount += 1;

        log.info(`  ${res.fileName} → HTML: ${htmlSize}`);
      }

      return res;
    })
  );

  if (showStats && largeCount > 0)
    log.warn(chalk`\n${largeCount} template(s) exceed the 102kb Gmail Clipping limit`);
  if (writeToFile) log.info(chalk`\n{green Build complete}. File(s) written to:`, outputPath);
  else log.info(chalk`\n{green Build complete}`);

  return result;
};

export const command: CommandFn = async (argv: BuildCommandOptions, input) => {
  if (input.length < 1) return false;

  const [targetPath] = input;

  if (!existsSync(targetPath)) {
    log.error(chalk`{red The provided build target '${targetPath}' does not exist}`);
    process.exit(1);
  }

  assert(BuildCommandOptionsStruct, argv);

  await buildTemplates({ buildOptions: argv, targetPath });

  return true;
};
