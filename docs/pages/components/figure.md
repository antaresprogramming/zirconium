---
title: Figures
description: Whenever you want to add supplementary content, consider figures.

layout: page
permalink: /components/figures
author: teacherbuknoy
publish_date: '2021-07-19'
subdirectory: '02. Components'
cover: Figures.png

breadcrumbs: [Components, Figure]
card_image: Figures.png
---

Zirconium styles the `<figure>` and `<figcaption>` elements by adding the `.figure` class on the `<figure>` element. These are mostly used for images, but they can also be used for other media content like video and audio controls.

<article class="live-example">
    <div class="live-example__result">
        <figure class="figure">
            <img
                src="https://images.unsplash.com/photo-1628026553106-7f5dedc5260c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80"
                alt="Thinking about destiny"
                width="801"
                height="501"
                loading="lazy"
            >
            <figcaption><b>Figure 1</b> This is a sample placeholder image</figcaption>
        </figure>
    </div>
    <div class="live-example__code">
        <pre class="code-snippet" data-prog-lang="html"><code>&lt;figure class="figure">
    &lt;img
        src="&hellip;"
        alt="Thinking about destiny"
        width="801"
        height="501"
        loading="lazy"
    >
    &lt;figcaption>&lt;b>Figure 1&lt;/b> This is a sample placeholder image&lt;/figcaption>
&lt;/figure></code></pre>
    </div>
</article>

<div class="padding-xl"></div>

Figures can also hold videos.

<article class="live-example">
    <div class="live-example__result">
        <figure class="figure">
            <video src="{{ '/assets/media/html.webm' | relative_url }}" controls>
                <p>Your browser cannot play this file</p>
            </video>
            <figcaption>
                <p><b>Figure 1</b> This is how you create an HTML file in elementary OS</p>
            </figcaption>
        </figure>
    </div>
    <div class="live-example__code">
        <pre class="code-snippet" data-prog-lang="html"><code>&lt;figure class="figure">
    &lt;video src="{{ '/assets/media/html.webm' | relative_url }}" controls>
        &lt;p>Your browser cannot play this file&lt;/p>
    &lt;/video>
    &lt;figcaption>
        &lt;p>&lt;b>Figure 1&lt;/b> This is how you create an HTML file in elementary OS&lt;/p>
    &lt;/figcaption>
&lt;/figure></code></pre>
    </div>
</article>
<div class="padding-xl"></div>
<h2 class="weight-light h3">Quotations</h2>

The `figure` element can also contain blockquotes, while the `figcaption` inside them has the citation. Using blockquotes on its own is still valid, however. To use figures for blockquotes, add the class `.quotation`.

<article class="live-example">
    <div class="live-example__result">
        <figure class="quotation">
            <blockquote>
            <p>
                Oh. This is awkward. Your ex and your boyfriend together at the same party&mdash;who are you gonna choose, Wanda?
            </p>
            </blockquote>
            <figcaption>
                <cite>Agatha Harkness</cite>
            </figcaption>
        </figure>
    </div>
    <div class="live-example__code">
        <pre class="code-snippet" data-prog-lang="html"><code>&lt;figure class="quotation">
    &lt;blockquote>
    &lt;p>
        Oh. This is awkward. Your ex and your boyfriend
        together at the same party&mdash;who are you gonna
        choose, Wanda?
    &lt;/p>
    &lt;/blockquote>
    &lt;figcaption>
        &lt;cite>Agatha Harkness&lt;/cite>
    &lt;/figcaption>
&lt;/figure></code></pre>
    </div>
</article>