---
title: Progress Markers
description: Progress markers indicate the current progress against a projected goal.

layout: page
permalink: /components/progress-markers
author: teacherbuknoy
publish_date: '2021-07-19'
subdirectory: '02. Components'
cover: banners.jpg

breadcrumbs: [Components, Progress Markers]
card_image: progress-marker.png
---

Developers should use `<ol>` for progress markers because this information follows an order. Use the class `.progress-marker`.

<article class="live-example">
    <div class="live-example__result">
        <ol class="progress-marker">
            <li>Progress Item 1</li>
            <li>Progress Item 2</li>
            <li>Progress Item 3</li>
            <li>Progress Item 4</li>
            <li>Progress Item 5</li>
        </ol>
    </div>
    <div class="live-example__code">
        <pre class="code-snippet" data-prog-lang="html"><code>&lt;ol class="progress-marker">
    &lt;li>Progress Item 1&lt;/li>
    &lt;li>Progress Item 2&lt;/li>
    &lt;li>Progress Item 3&lt;/li>
    &lt;li>Progress Item 4&lt;/li>
    &lt;li>Progress Item 5&lt;/li>
&lt;/ol></code></pre>
    </div>
</article>

To mark items as "finished", add the class `.enabled` on the list items.

<article class="live-example">
    <div class="live-example__result">
        <ol class="progress-marker">
            <li class="enabled">Progress Item 1</li>
            <li class="enabled">Progress Item 2</li>
            <li class="enabled">Progress Item 3</li>
            <li>Progress Item 4</li>
            <li>Progress Item 5</li>
        </ol>
    </div>
    <div class="live-example__code">
        <pre class="code-snippet" data-prog-lang="html"><code>&lt;ol class="progress-marker">
    &lt;li class="enabled">Progress Item 1&lt;/li>
    &lt;li class="enabled">Progress Item 2&lt;/li>
    &lt;li class="enabled">Progress Item 3&lt;/li>
    &lt;li>Progress Item 4&lt;/li>
    &lt;li>Progress Item 5&lt;/li>
&lt;/ol></code></pre>
    </div>
</article>