---
title: Breadcrumbs
description: Breadcrumbs show the user's current location in the website's hierarchy.

layout: page
permalink: /components/breadcrumbs
author: teacherbuknoy
publish_date: '2021-07-26'
subdirectory: '02. Components'
cover: breadcrumbs.jpg

breadcrumbs: [Components, Breadcrumbs]
card_image: Breadcrumbs.png
---

Breadcrumbs use the `nav` element with an `ol` inside it. We use an ordered list since breadcrumbs signify the sequence of locations in the website's hierarchy.

<article class="live-example">
    <div class="live-example__result">
        <nav class="breadcrumb" aria-label="breadcrumbs">
        <ol>
            <li><a href="#">Zirconium</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Components</a></li>
            <li><a href="#" aria-current="page">Breadcrumb</a></li>
        </ol>
        </nav>
    </div>
    <div class="live-example__code">
        <pre class="code-snippet" data-prog-lang="html"><code data-language="html">&lt;nav class="breadcrumb" aria-label="breadcrumbs">
    &lt;ol>
        &lt;li>&lt;a href="#">Zirconium&lt;/a>&lt;/li>
        &lt;li>&lt;a href="#">Documentation&lt;/a>&lt;/li>
        &lt;li>&lt;a href="#">Components&lt;/a>&lt;/li>
        &lt;li>&lt;a href="#" aria-current="page">Breadcrumb&lt;/a>&lt;/li>
    &lt;/ol>
&lt;/nav></code></pre>
    </div>
</article>

{% include components/side-note.html
    content='Add the <code>aria-current="page"</code> attribute to the link of the current page to tell assistive technologies that the user is currently in that page.'
    type="info"
%}

<h2 class="weight-light h3">Full-width breadcrumb</h2>

You can add the class `.full-width` to a breadcrumb to remove its border radius when it spans the full width of its parent.

<article class="live-example">
    <div class="live-example__result">
        <nav class="full-width breadcrumb" aria-label="breadcrumbs">
        <ol>
            <li><a href="#">Zirconium</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Components</a></li>
            <li><a href="#" aria-current="page">Breadcrumb</a></li>
        </ol>
        </nav>
    </div>
    <div class="live-example__code">
        <pre class="code-snippet" data-prog-lang="html"><code data-language="html">&lt;nav class="breadcrumb" aria-label="breadcrumbs">
    &lt;ol>
        &lt;li>&lt;a href="#">Zirconium&lt;/a>&lt;/li>
        &lt;li>&lt;a href="#">Documentation&lt;/a>&lt;/li>
        &lt;li>&lt;a href="#">Components&lt;/a>&lt;/li>
        &lt;li>&lt;a href="#" aria-current="page">Breadcrumb&lt;/a>&lt;/li>
    &lt;/ol>
&lt;/nav></code></pre>
    </div>
</article>

<h2 class="weight-light h3">Sizes</h2>
You can apply the size utility classes to your breadcrumbs to change their sizes.

<article class="live-example">
    <div class="live-example__result">
        <h2 class="weight-light h4">Small breadcrumb</h2>
        <nav class="small breadcrumb" aria-label="breadcrumbs">
            <ol>
                <li><a href="#">Zirconium</a></li>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Components</a></li>
                <li><a href="#" aria-current="page">Breadcrumb</a></li>
            </ol>
        </nav>
        <h2 class="weight-light h4">Large breadcrumb</h2>
        <nav class="large breadcrumb" aria-label="breadcrumbs">
            <ol>
                <li><a href="#">Zirconium</a></li>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Components</a></li>
                <li><a href="#" aria-current="page">Breadcrumb</a></li>
            </ol>
        </nav>
    </div>
    <div class="live-example__code">
        <pre class="code-snippet" data-prog-lang="html"><code data-language="html">&lt;nav class="small breadcrumb" aria-label="breadcrumbs">&hellip;&lt;/nav>
&lt;nav class="large breadcrumb" aria-label="breadcrumbs">&hellip;&lt;/nav></code></pre>
    </div>
</article>