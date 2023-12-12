import{_ as e,o as t,c as o,Q as a}from"./chunks/framework.a7175731.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{"head":[["meta",{"name":"og:description","content":""}],["meta",{"name":"og:image","content":"https://jsx.email/og.png"}],["meta",{"name":"og:site_name","content":"JSX email"}],["meta",{"name":"og:title","content":""}],["meta",{"name":"og:type","content":"website"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:description","content":""}],["meta",{"name":"twitter:image","content":"https://jsx.email/og.png"}],["meta",{"name":"twitter:title","content":""}]]},"headers":[],"relativePath":"../../../CONTRIBUTING.md","filePath":"../../../CONTRIBUTING.md"}'),s={name:"../../../CONTRIBUTING.md"},n=a('<h2 id="contributing-in-this-repository" tabindex="-1">Contributing in this repository <a class="header-anchor" href="#contributing-in-this-repository" aria-label="Permalink to &quot;Contributing in this repository&quot;">​</a></h2><p>We 💛 contributions! The rules for contributing to this org are few:</p><ol><li>Don&#39;t be a jerk</li><li>Search issues before opening a new one</li><li>Lint and run tests locally before submitting a PR</li><li>Adhere to the code style the project has chosen</li></ol><h2 id="repo-info" tabindex="-1">Repo Info <a class="header-anchor" href="#repo-info" aria-label="Permalink to &quot;Repo Info&quot;">​</a></h2><p>The <code>jsx-email</code> repository is a <a href="https://en.wikipedia.org/wiki/Monorepo" target="_blank" rel="noreferrer">Monorepo</a> that uses two primary tools; <a href="https://pnpm.io/" target="_blank" rel="noreferrer"><code>pnpm</code></a> and <a href="https://moonrepo.dev/" target="_blank" rel="noreferrer"><code>Moon</code></a>. <code>pnpm</code> is used for package management and <a href="https://pnpm.io/workspaces" target="_blank" rel="noreferrer">workspace management</a> of the repo. <code>Moon</code> is used as our task runner for the repo - all commands to work with the packages and code in the repo go through <code>Moon</code>. We also assume that you have Node.js installed, because this is a project that leverages React.</p><h3 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting Started&quot;">​</a></h3><p>If you&#39;re new to either <code>pnpm</code> or <code>Moon</code> you&#39;ll want to run the <code>bootstrap.sh</code> script first. It will install everything you&#39;ll need to get started, and bootstrap your environment:</p><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#E6E6E6;">$ ./shared/bootstrap.sh</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#002339;">$ ./shared/bootstrap.sh</span></span></code></pre></div><p>Next we&#39;ll want to get dependencies installed, and get everything built. <em>(Note: One of the benefits of <code>Moon</code> is that it uses intelligent caching to assert that dependencies are always up to date before running any command. We don&#39;t technically have to install dependencies first)</em>:</p><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#E6E6E6;">$ pnpm install</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#002339;">$ pnpm install</span></span></code></pre></div><p>Then build all the things:</p><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#E6E6E6;">$ moon build.all</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#002339;">$ moon build.all</span></span></code></pre></div><h2 id="before-committing" tabindex="-1">Before Committing <a class="header-anchor" href="#before-committing" aria-label="Permalink to &quot;Before Committing&quot;">​</a></h2><ol><li>Use at least Node.js v18.0.0 or higher. <a href="https://github.com/creationix/nvm" target="_blank" rel="noreferrer">NVM</a> can be handy for switching between Node versions.</li><li>Lint your changes via <code>moon run repo:lint</code>. Fix any errors and warnings before committing.</li><li>Test your changes via <code>moon run repo:test</code>. Only Pull Requests with passing tests will be accepted.</li></ol><h2 id="submitting-code" tabindex="-1">Submitting Code <a class="header-anchor" href="#submitting-code" aria-label="Permalink to &quot;Submitting Code&quot;">​</a></h2><p>Any code change should be submitted as a pull request. Our guidelines for Pull Requests:</p><ul><li>Please fill in our template in its entirety. Please don&#39;t reformat it or modify it</li><li>The description should explain what the code does and give steps to execute it</li><li>The pull request should also contain tests</li><li>Before submitting your Pull Request, please lint your changes by running <code>moon run repo:lint</code> in the root directory</li><li>If any checks fail for your Pull Request, please resolve them. Always feel free to ask for help if unable to resolve issues with checks</li></ul><h2 id="code-review-process" tabindex="-1">Code Review Process <a class="header-anchor" href="#code-review-process" aria-label="Permalink to &quot;Code Review Process&quot;">​</a></h2><p>The bigger the pull request, the longer it will take to review and merge. Try to break down large pull requests in smaller chunks that are easier to review and merge.</p><p>It is also always helpful to have some context for your pull request. What was the purpose? Why does it matter to you? Does it resolve any known Github issues? Adding a line &quot;resolves #&lt;issue number&gt;&quot; (e.g. &quot;resolves #23&quot;) to the description of your pull request or of a specific commit will automatically close this issue once the pull request is merged.</p>',20),i=[n];function r(l,c,p,d,h,u){return t(),o("div",null,i)}const b=e(s,[["render",r]]);export{g as __pageData,b as default};
