---
title: Bylines
description: Bylines present the author of a document.

layout: page
permalink: /components/bylines
author: teacherbuknoy
publish_date: '2021-07-31'
subdirectory: '02. Components'
cover: buttons.jpg

breadcrumbs: [Components, Bylines]
card_image: Bylines.png
---

Bylines can have up to four different elements inside it: the author's photo, author's name, author's title or designation, and the indicator (e.g. <q>written by</q>, <q>published by</q>, <q>created by</q>).

If the byline component is placed inside an `<article>` element, it represents the author of that `<article>` element. Otherwise, it represents the author of the whole page.

<h2 class="weight-light h3 padding-top-l margin-top-l">Minimal Byline</h2>

<div class="section"><div class="byline">
    <div class="byline__body">
        <a href="#!" class="byline__name" rel="author">Francis Rubio</a>
    </div>
</div></div>

<pre class="code-snippet" data-prog-lang="html"><code data-language="html">&lt;div class="byline">
    &lt;div class="byline__body">
        &lt;a href="/link/to/author/information/page" class="byline__name" rel="author">Francis Rubio&lt;/a>
    &lt;/div>
&lt;/div></code></pre>

Notice how we added the attribute `rel="author`. This is important if we want to indicate that this is the author's name. The URL placed inside the `href` attribute should point to a page with the author's information. If there's no link for the author, you should use the `<address>` element instead of the `<a>` element.

<div class="section padding-top-l">
<div class="byline">
    <div class="byline__body">
        <address class="byline__name">Francis Rubio</address>
    </div>
</div>
</div>

<pre class="code-snippet" data-prog-lang="html"><code data-language="html">&lt;div class="byline">
    &lt;div class="byline__body">
        &lt;address class="byline__name">Francis Rubio&lt;/address>
    &lt;/div>
&lt;/div></code></pre>

<h2 class="weight-light h3 padding-top-l margin-top-l">Byline with photo</h2>

<div class="section">
<div class="byline">
    <img
        class="byline__image"
        src="https://www.gravatar.com/avatar/821268102c1c7397c7ee4fc3ecb2cb6a?s=400" 
        alt="Francis Rubio"
        width="400"
        height="400">
    <div class="byline__body">
        <a href="/link/to/author/information/page" class="byline__name" rel="author">Francis Rubio</a>
    </div>
</div>
</div>

<pre class="code-snippet" data-prog-lang="html"><code data-language="html">&lt;div class="byline">
    &lt;img
        class="byline__image"
        src="https://www.gravatar.com/avatar/821268102c1c7397c7ee4fc3ecb2cb6a?s=400" 
        alt="Francis Rubio"
        width="400"
        height="400">
    &lt;div class="byline__body">
        &lt;a href="/link/to/author/information/page" class="byline__name" rel="author">Francis Rubio&lt;/a>
    &lt;/div>
&lt;/div></code></pre>

<h2 class="weight-light h3 padding-top-l margin-top-l">Byline with designation</h2>

<div class="section">
<div class="byline">
    <img
        class="byline__image"
        src="https://www.gravatar.com/avatar/821268102c1c7397c7ee4fc3ecb2cb6a?s=400" 
        alt="Francis Rubio"
        width="400"
        height="400">
    <div class="byline__body">
        <a href="/link/to/author/information/page" class="large byline__name" rel="author">Francis Rubio</a>
        <span class="byline__label">Web developer, designer, and educator</span>
    </div>
</div>
</div>

<pre class="code-snippet" data-prog-lang="html"><code data-language="html">&lt;div class="byline">
    &lt;img
        class="byline__image"
        src="https://www.gravatar.com/avatar/821268102c1c7397c7ee4fc3ecb2cb6a?s=400" 
        alt="Francis Rubio"
        width="400"
        height="400">
    &lt;div class="byline__body">
        &lt;a href="/link/to/author/information/page" class="large byline__name" rel="author">Francis Rubio&lt;/a>
        &lt;span class="byline__label">Web developer, designer, and educator&lt;/span>
    &lt;/div>
&lt;/div></code></pre>

<h2 class="weight-light h3 padding-top-l margin-top-l">Byline with indicator</h2>

<div class="section">
<div class="byline">
    <img
        class="byline__image"
        src="https://www.gravatar.com/avatar/821268102c1c7397c7ee4fc3ecb2cb6a?s=400" 
        alt="Francis Rubio"
        width="400"
        height="400">
    <div class="byline__body">
        <span class="small byline__label">Written by</span>
        <a href="/link/to/author/information/page" class="large byline__name" rel="author">Francis Rubio</a>
    </div>
</div>
</div>

<pre class="code-snippet" data-prog-lang="html"><code data-language="html">&lt;div class="byline">
    &lt;img
        class="byline__image"
        src="https://www.gravatar.com/avatar/821268102c1c7397c7ee4fc3ecb2cb6a?s=400" 
        alt="Francis Rubio"
        width="400"
        height="400">
    &lt;div class="byline__body">
        &lt;span class="small byline__label">Written by&lt;/span>
        &lt;a href="/link/to/author/information/page" class="large byline__name" rel="author">Francis Rubio&lt;/a>
    &lt;/div>
&lt;/div></code></pre>

<h2 class="weight-light h3 padding-top-l margin-top-l">Byline with indicator and designation</h2>

<div class="section">
<div class="large byline">
    <img
        class="byline__image"
        src="https://www.gravatar.com/avatar/821268102c1c7397c7ee4fc3ecb2cb6a?s=400" 
        alt="Francis Rubio"
        width="400"
        height="400">
    <div class="byline__body">
        <span class="small byline__label">Written by</span>
        <a href="/link/to/author/information/page" class="large byline__name" rel="author">Francis Rubio</a>
        <span class="small byline__label">Web developer, designer, and educator</span>
    </div>
</div>
</div>

<pre class="code-snippet" data-prog-lang="html"><code data-language="html">&lt;div class="large byline">
    &lt;img
        class="byline__image"
        src="https://www.gravatar.com/avatar/821268102c1c7397c7ee4fc3ecb2cb6a?s=400" 
        alt="Francis Rubio"
        width="400"
        height="400">
    &lt;div class="byline__body">
        &lt;span class="small byline__label">Written by&lt;/span>
        &lt;a href="/link/to/author/information/page" class="large byline__name" rel="author">Francis Rubio&lt;/a>
        &lt;span class="small byline__label">Web developer, designer, and educator&lt;/span>
    &lt;/div>
&lt;/div></code></pre>