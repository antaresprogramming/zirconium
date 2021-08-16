---
title: Badges
description: Badges indicate status, tags, or categories associated with a block of information

layout: page
permalink: /components/badges
author: teacherbuknoy
publish_date: '2021-07-19'
subdirectory: '02. Components'
cover: banners.jpg

breadcrumbs: [Components, Banners]
card_image: Banner.png
---

<h2 class="weight-light h3">Span Badges</h2>

These badges are not hoverable. They just indicate status. They do not link to anything or trigger any action. Use `span` or `a` without the `href` attribute.

<article class="live-example">
    <div class="live-example__result flex">
        <div class="badge">Default</div>
        <a class="info badge">Information</a>
        <div class="success badge">Success</div>
        <a class="warning badge">Warning</a>
        <div class="error badge">Error</div>
    </div>
    <div class="live-example__code">
        <pre class="code-snippet" data-prog-lang="html"><code>&lt;div class="badge">Default&lt;/div>
&lt;a class="info badge">Information&lt;/a>
&lt;div class="success badge">Success&lt;/div>
&lt;a class="warning badge">Warning&lt;/a>
&lt;div class="error badge">Error&lt;/div></code></pre>
    </div>
</article>

<h2 class="weight-light h3">Link Badges</h2>

These badges are hoverable. Use an `a` element with `href` attribute to make the badge hoverable.

<article class="live-example">
    <div class="live-example__result flex">
        <a href="#!" class="badge">Default</a>
        <a href="#!" class="info badge">Info</a>
        <a href="#!" class="success badge">Success</a>
        <a href="#!" class="warning badge">Warning</a>
        <a href="#!" class="error badge">Error</a>
    </div>
    <div class="live-example__code">
        <pre class="code-snippet" data-prog-lang="html"><code>&lt;a href="#!" class="badge">Default&lt;/a>
&lt;a href="#!" class="info badge">Info&lt;/a>
&lt;a href="#!" class="success badge">Success&lt;/a>
&lt;a href="#!" class="warning badge">Warning&lt;/a>
&lt;a href="#!" class="error badge">Error&lt;/a></code></pre>
    </div>
</article>

<h2 class="weight-light h3">Rounded badges</h2>

Badges can have rounded sides by adding the `.rounded` class.

<article class="live-example">
    <div class="live-example__result flex">
        <a href="#!" class="rounded badge">Default</a>
        <a href="#!" class="rounded info badge">Info</a>
        <a href="#!" class="rounded success badge">Success</a>
        <a href="#!" class="rounded warning badge">Warning</a>
        <a href="#!" class="rounded error badge">Error</a>
    </div>
    <div class="live-example__code">
        <pre class="code-snippet" data-prog-lang="html"><code>&lt;a href="#!" class="rounded badge">Default&lt;/a>
&lt;a href="#!" class="rounded info badge">Info&lt;/a>
&lt;a href="#!" class="rounded success badge">Success&lt;/a>
&lt;a href="#!" class="rounded warning badge">Warning&lt;/a>
&lt;a href="#!" class="rounded error badge">Error&lt;/a></code></pre>
    </div>
</article>

<h2 class="weight-light h3">Outline badges</h2>

Badges can be outlined without backgrounds. Add the `.outline` class to your `.badge` element.

<article class="live-example">
    <div class="live-example__result flex">
        <a href="#!" class="outline rounded badge">Default</a>
        <a href="#!" class="outline rounded info badge">Info</a>
        <a href="#!" class="outline rounded success badge">Success</a>
        <a href="#!" class="outline rounded warning badge">Warning</a>
        <a href="#!" class="outline rounded error badge">Error</a>
        <a href="#!" class="outline badge">Default</a>
        <a href="#!" class="outline info badge">Info</a>
        <a href="#!" class="outline success badge">Success</a>
        <a href="#!" class="outline warning badge">Warning</a>
        <a href="#!" class="outline error badge">Error</a>
    </div>
    <div class="live-example__code">
        <pre class="code-snippet" data-prog-lang="html"><code>&lt;a href="#!" class="outline rounded badge">Default&lt;/a>
&lt;a href="#!" class="outline rounded info badge">Info&lt;/a>
&lt;a href="#!" class="outline rounded success badge">Success&lt;/a>
&lt;a href="#!" class="outline rounded warning badge">Warning&lt;/a>
&lt;a href="#!" class="outline rounded error badge">Error&lt;/a>
&lt;a href="#!" class="outline badge">Default&lt;/a>
&lt;a href="#!" class="outline info badge">Info&lt;/a>
&lt;a href="#!" class="outline success badge">Success&lt;/a>
&lt;a href="#!" class="outline warning badge">Warning&lt;/a>
&lt;a href="#!" class="outline error badge">Error&lt;/a></code></pre>
    </div>
</article>