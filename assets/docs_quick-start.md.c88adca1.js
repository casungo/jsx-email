import{_ as s,o as t,c as o,k as l,t as n,Q as e}from"./chunks/framework.a7175731.js";const k=JSON.parse('{"title":"Quick Start","description":"Quick Start","frontmatter":{"title":"Quick Start","description":"Quick Start","head":[["meta",{"name":"og:description","content":"Quick Start"}],["meta",{"name":"og:image","content":"https://jsx.email/og.png"}],["meta",{"name":"og:site_name","content":"JSX email"}],["meta",{"name":"og:title","content":"Quick Start"}],["meta",{"name":"og:type","content":"website"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:description","content":"Quick Start"}],["meta",{"name":"twitter:image","content":"https://jsx.email/og.png"}],["meta",{"name":"twitter:title","content":"Quick Start"}]]},"headers":[],"relativePath":"../../../docs/quick-start.md","filePath":"../../../docs/quick-start.md"}'),p={name:"../../../docs/quick-start.md"},i=e('<h2 id="quick-start" tabindex="-1">Quick Start <a class="header-anchor" href="#quick-start" aria-label="Permalink to &quot;Quick Start&quot;">​</a></h2><p>In this doc you&#39;ll find information on quickly getting started using JSX email. For more in-depth information, please see the other sections of our Documentation.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This guide, along with the rest of the documentation here, assume that the reader has fundamental Node and NPM skills and is familiar with using command line tools on Window, Linux, or Mac OS.</p><p>For those not familiar with the bits above, here are some links to resources that we&#39;d recommend reading before working with this project:</p><ul><li><a href="https://www.codecademy.com/learn/learn-nodejs-fundamentals/modules/intro-to-node-js/cheatsheet" target="_blank" rel="noreferrer">Node Fundamentals</a></li><li><a href="https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/" target="_blank" rel="noreferrer">NPM Fundamentals</a></li><li><a href="https://jaireina.medium.com/executing-local-npm-packages-226820ad2c31" target="_blank" rel="noreferrer">Executing Local NPM Packages</a></li><li><a href="https://docs.npmjs.com/cli/v8/commands/npx" target="_blank" rel="noreferrer"><code>npx</code></a> and <a href="https://pnpm.io/cli/exec" target="_blank" rel="noreferrer"><code>pnpm exec</code></a></li><li><a href="https://superuser.com/a/1270599" target="_blank" rel="noreferrer">How to use relative paths on windows CMD?</a></li></ul></div><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><ul><li><a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">Node.js</a> v18.0.0+</li><li>React v18.2.0</li></ul><h2 id="new-projects" tabindex="-1">New Projects <a class="header-anchor" href="#new-projects" aria-label="Permalink to &quot;New Projects&quot;">​</a></h2><p>If you&#39;re starting a new project — whether that&#39;s a project solely for email templates, or a project that will eventually host additional code — our <a href="https://github.com/shellscape/jsx-email/tree/main/packages/create-jsx-email" target="_blank" rel="noreferrer"><code>create-jsx-email</code></a> utility is a perfect choice, and the fastest way to get started. The utility will scaffold a new project and get everything ready for developing new email templates. To begin, make sure you have a terminal (or command line) open and your current working directory is the directory you&#39;d like to create a new project. Run the following command in your terminal (without the <code>$</code> symbol):</p><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#E6E6E6;">$ npm create jsx-email</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#002339;">$ npm create jsx-email</span></span></code></pre></div><p>This command will install and execute <code>create-jsx-email</code>, create a <code>email-project</code> directory, and add a starter template.</p><p>While the <em>Existing Projects</em> section below can be safely skipped, the information beneath it is useful and worth giving a read before working with JSX email, as it contains infmroation on the project and template that was just created.</p><h2 id="existing-projects" tabindex="-1">Existing Projects <a class="header-anchor" href="#existing-projects" aria-label="Permalink to &quot;Existing Projects&quot;">​</a></h2><p>The happy path for adding JSX email to an existing project is by using the JSX email CLI:</p><h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-label="Permalink to &quot;Install&quot;">​</a></h2>',13),r=e(`<div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-xMu4Q" id="tab-KJmr3g_" checked="checked"><label for="tab-KJmr3g_">pnpm</label><input type="radio" name="group-xMu4Q" id="tab-iy7jZQr"><label for="tab-iy7jZQr">bun</label><input type="radio" name="group-xMu4Q" id="tab-xxycVwJ"><label for="tab-xxycVwJ">npm</label><input type="radio" name="group-xMu4Q" id="tab-65N9isa"><label for="tab-65N9isa">yarn</label></div><div class="blocks"><div class="language-console vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#E6E6E6;">pnpm add jsx-email</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#002339;">pnpm add jsx-email</span></span></code></pre></div><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#E6E6E6;">bun add jsx-email</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#002339;">bun add jsx-email</span></span></code></pre></div><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#E6E6E6;">npm add jsx-email</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#002339;">npm add jsx-email</span></span></code></pre></div><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#E6E6E6;">yarn add jsx-email</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#002339;">yarn add jsx-email</span></span></code></pre></div></div></div><p>If you want to avoid global installation, you can use <code>pnpm dlx</code>, <code>npx</code>, or <code>yarn</code> instead like so:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#DCDCAA;">$</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">pnpm</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">dlx</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">email</span><span style="color:#E6E6E6;"> </span><span style="color:#D4D4D4;">&lt;</span><span style="color:#CE9178;">comman</span><span style="color:#E6E6E6;">d</span><span style="color:#D4D4D4;">&gt;</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#7EB233;">$</span><span style="color:#002339;"> </span><span style="color:#A44185;">pnpm</span><span style="color:#002339;"> </span><span style="color:#A44185;">dlx</span><span style="color:#002339;"> </span><span style="color:#A44185;">email</span><span style="color:#002339;"> </span><span style="color:#7B30D0;">&lt;</span><span style="color:#A44185;">comman</span><span style="color:#002339;">d</span><span style="color:#7B30D0;">&gt;</span></span></code></pre></div><h2 id="create-a-template" tabindex="-1">Create A Template <a class="header-anchor" href="#create-a-template" aria-label="Permalink to &quot;Create A Template&quot;">​</a></h2><p>First, we&#39;ll create a directory for our email templates, and then add a new template:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#DCDCAA;">$</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">mkdir</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">./emails</span></span>
<span class="line"><span style="color:#DCDCAA;">$</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">email</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">create</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">BatmanEmail</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">--out=./emails</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#7EB233;">$</span><span style="color:#002339;"> </span><span style="color:#A44185;">mkdir</span><span style="color:#002339;"> </span><span style="color:#A44185;">./emails</span></span>
<span class="line"><span style="color:#7EB233;">$</span><span style="color:#002339;"> </span><span style="color:#A44185;">email</span><span style="color:#002339;"> </span><span style="color:#A44185;">create</span><span style="color:#002339;"> </span><span style="color:#A44185;">BatmanEmail</span><span style="color:#002339;"> </span><span style="color:#174781;">--out=./emails</span></span></code></pre></div><p>This command will create a new template named <code>BatmanEmail.tsx</code> in the <code>./emails</code> directory.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If you&#39;d rather create a <code>.jsx</code> file, use the <code>--jsx</code> flag</p></div><h2 id="superstruct" tabindex="-1">Superstruct <a class="header-anchor" href="#superstruct" aria-label="Permalink to &quot;Superstruct&quot;">​</a></h2><p><a href="https://docs.superstructjs.org/" target="_blank" rel="noreferrer">Superstruct</a> is a fantastic validation package that predates <code>zod</code> and <code>yup</code>. It&#39;s smaller and faster than alternatives and uses a delightful API without chaining or cruft. JSX email uses it as an option for defining <code>prop</code> types and creating props for use in email previews.</p><h2 id="email-previews" tabindex="-1">Email Previews <a class="header-anchor" href="#email-previews" aria-label="Permalink to &quot;Email Previews&quot;">​</a></h2><p>One of the major benefits of JSX email over alternatives is our incredibly slim and fast preview server, which requires no additional dependency installation, complex mounting, or difficult setup rules for monorepos. To run the preview server, run the following command in your terminal:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#6A9955;"># MacOS and Linux</span></span>
<span class="line"><span style="color:#DCDCAA;">$</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">email</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">preview</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">./emails</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#357B42;font-style:italic;"># MacOS and Linux</span></span>
<span class="line"><span style="color:#7EB233;">$</span><span style="color:#002339;"> </span><span style="color:#A44185;">email</span><span style="color:#002339;"> </span><span style="color:#A44185;">preview</span><span style="color:#002339;"> </span><span style="color:#A44185;">./emails</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Windows paths are different than MacOS or Linux paths. <code>./emails</code> above will not work on Windows. Please see the link above regarding Windows relative paths if you are unfamiliar with how they work on the Command Line</p></div><p>The CLI will startup a preview server and open a new browser tab at <code>http://localhost:55420</code>. It&#39;s that simple.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Please use <code>email help preview</code> to view optional flags, including setting the port.</p></div><h2 id="building-your-template" tabindex="-1">Building Your Template <a class="header-anchor" href="#building-your-template" aria-label="Permalink to &quot;Building Your Template&quot;">​</a></h2><p>The next step is to build your template. This can be done with the CLI, or with the <a href="/docs/core/render"><code>render</code> method</a> in code. While most people will need to render emails dynamically at runtime using <code>render</code>, the CLI is capable of rendering both static and dynamic emails that take props as input. To build your email into an HTML document, run:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#DCDCAA;">$</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">email</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">build</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">./emails/BatmanEmail.tsx</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#7EB233;">$</span><span style="color:#002339;"> </span><span style="color:#A44185;">email</span><span style="color:#002339;"> </span><span style="color:#A44185;">build</span><span style="color:#002339;"> </span><span style="color:#A44185;">./emails/BatmanEmail.tsx</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Please use <code>email help build</code> to view optional flags, including providing props and setting the output path.</p></div>`,20);function c(a,d,m,h,u,y){return t(),o("div",null,[i,l("p",null,"Install the "+n(a.$frontmatter.type)+" from your command line",1),r])}const v=s(p,[["render",c]]);export{k as __pageData,v as default};
