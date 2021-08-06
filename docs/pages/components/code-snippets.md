---
title: Code Snippets
description: Present code samples with syntax highlighting.

layout: page
permalink: /components/code-snippets
author: teacherbuknoy
publish_date: '2021-07-31'
subdirectory: '02. Components'
cover: buttons.jpg

breadcrumbs: [Components, Code Snippets]
card_image: "Code Snippets.png"
needs_js: true
---

Zirconium code snippets use [prism.js](https://prismjs.com/index.html) to apply syntax highlighting to raw code snippets. The styling, however, is provided by the Zirconium stylesheet.

{% include components/side-note.html
    content='Make sure you include the <code>prism.js</code> script in your markup so syntax highlighting works.'
    type="warning"
%}

<pre class="code-snippet" data-prog-lang="html"><code>&lt;pre class="code-snippet" data-prog-lang="html">
    &lt;code>&hellip;&lt;/code>
&lt;/pre></code></pre>

The `data-prog-lang` indicates the programming language of the code snippet. Under the hood, we are using [Prism.js](https://prismjs.com/index.html) for syntax highlighting, plus a few plugins. Prism.js needs to see the `.language-*` class for it to work. Zirconium.js handles this for you, and adds a `.language-*` class depending on the value of the `data-prog-lang` attribute.

<h2 class="weight-light h3">Copy to Clipboard</h2>
Using the [Copy to Clipboard plugin](https://prismjs.com/plugins/copy-to-clipboard/), Prism.js automatically adds a <i>Copy to Clipboard</i> button that appears on hover. If you want this to work, be sure to add the Copy to Clipboard plugin, as well as the [Toolbar plugin](https://prismjs.com/plugins/toolbar/) when [downloading Prism.js](https://prismjs.com/download.html).

<h2 class="weight-light h3">Line Highlights</h2>
Using the [Line Highlight plugin](https://prismjs.com/plugins/line-highlight/), we can indicate lines that we want to highlight in the code.

Use the `data-line` on the `.code-snippet` element with the line numbers, or ranges of line numbers you want to highlight.

<div class="live-example">
    <div class="live-example__result">
        <pre class="code-snippet" data-prog-lang="html" data-line="1,3"><code>&lt;div class="button-group">
    &lt;button class="button">Button 1&lt;/button>
    &lt;button class="button">Button 2&lt;/button>
    &lt;button class="button">Button 3&lt;/button>
&lt;/div></code></pre>
    </div>
    <div class="live-example__code">
        <pre class="code-snippet" data-prog-lang="html"><code>&lt;pre class="code-snippet" data-prog-lang="html" data-line="1,3">&lt;code>
&hellip
&lt;/code>&lt;/pre></code></pre>
    </div>
</div>