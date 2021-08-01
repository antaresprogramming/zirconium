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

Zirconium code snippets use [rainbow.js](https://craig.is/making/rainbows) to apply syntax highlighting to raw code snippets. The styling, however, is provided by the Zirconium stylesheet.

{% include components/side-note.html
    content='Make sure you include the <code>rainbow.js</code> script in your markup so syntax highlighting works.'
    type="warning"
%}

<pre class="code-snippet" data-prog-lang="html"><code data-language="html">&lt;pre class="code-snippet" data-prog-lang="html">&lt;code data-language="html">
    &hellip;
&lt;/code>&lt;/pre></code></pre>

In this code, the attributes `data-prog-lang` and `data-lang` are both important. They both specify the programming language of the code snippet. But they have different purposes.

<dl>
    <dt><code>data-prog-lang</code></dt>
    <dd>Specifies the programming language that appears in the header of the code snippet. Put this in your <code>&lt;pre></code> tag.</dd>
    <dt><code>data-lang</code></dt>
    <dd>Specifies the programming language that rainbow.js will use to syntax highlight the code. Put this in your <code>&lt;code></code> tag.</dd>
</dl>