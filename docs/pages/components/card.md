---
title: Cards
description: Cards present information in a digestible manner.

layout: page
permalink: /components/cards
author: teacherbuknoy
publish_date: '2021-07-31'
subdirectory: '02. Components'
cover: buttons.jpg

breadcrumbs: [Components, Cards]
card_image: Cards.png
---

<h2 class="weight-light h3 padding-top-l margin-top-l">Default Card</h2>

Cards are just containers for presenting information. You can put anything in them: text, code snippets, images, headlines, and such. By default, cards have borders.

<article class="live-example">
    <div class="live-example__result responsive-flex padding-l" style="--flex-gap: var(--space-l); --column-size: 10em">
        <div class="square card"></div>
        <div class="square card"></div>
        <div class="square card"></div>
    </div>
    <div class="live-example__code">
        <pre class="code-snippet" data-prog-lang="html"><code data-language="html">&lt;div class="square card">&lt;/div></code></pre>
    </div>
</article>

To remove card borders, you can add the `.no-border` class.

<article class="live-example">
    <div class="dim live-example__result responsive-flex padding-l" style="--flex-gap: var(--space-l); --column-size: 10em">
        <div class="square card no-border"></div>
        <div class="square card no-border"></div>
        <div class="square card no-border"></div>
    </div>
    <div class="live-example__code">
        <pre class="code-snippet" data-prog-lang="html"><code data-language="html">&lt;div class="no-border square card">&lt;/div></code></pre>
    </div>
</article>

<div class="padding-l"></div>

Cards are also `display: grid` by default. Adding things in cards lays it out in a vertical grid by default.

<article class="live-example">
    <div class="live-example__result">
        <div class="card" style="max-width: 25ch;">
            <span class="weight-light h3">This is a card</span>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea dolore, cumque repudiandae id quia libero.</span>
        </div>
    </div>
    <div class="live-example__code">
        <pre class="code-snippet" data-prog-lang="html"><code data-language="html">&lt;div class="card">
    &lt;h3 class="weight-light">This is a card&lt;/h3>
    &lt;p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea dolore, cumque repudiandae id quia libero.&lt;/p>
&lt;/div></code></pre>
    </div>
</article>

{% include components/side-note.html
        content="You can apply other layouts (e.g. <code>.flex</code>, <code>.responsive-flex</code>, <code>.responsive-grid</code>) to cards too."
        type="info"
%}

<p class="padding-top-l">Cards can also have paddings via the padding utilities:</p>

<article class="live-example">
    <div class="live-example__result responsive-grid padding-l" style="--grid-gap: var(--space-l);">
        <div class="card padding-l">
            <span class="weight-light h3">Large Padding</span>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea dolore, cumque repudiandae id quia libero.</span>
        </div>
        <div class="card padding-m">
            <span class="weight-light h3">Medium Padding</span>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea dolore, cumque repudiandae id quia libero.</span>
        </div>
        <div class="card padding-s">
            <span class="weight-light h3">Small Padding</span>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea dolore, cumque repudiandae id quia libero.</span>
        </div>
        <div class="card padding-xs">
            <span class="weight-light h3">Extra Small Padding</span>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea dolore, cumque repudiandae id quia libero.</span>
        </div>
    </div>
    <div class="live-example__code">
        <pre class="code-snippet" data-prog-lang="html"><code data-language="html">&lt;div class="card padding-l">
    &hellip;
&lt;/div>
&lt;div class="card padding-m">
    &hellip;
&lt;/div>
&lt;div class="card padding-s">
    &hellip;
&lt;/div>
&lt;div class="card padding-xs">
    &hellip;
&lt;/div></code></pre>
    </div>
</article>

<h2 class="weight-light h3 padding-top-l margin-top-l">Raised cards</h2>

Cards can look elevated by adding the `.raised` class. You can use the different shadow levels via the shadow levels utility classes.

<article class="live-example">
    <div class="live-example__result responsive-flex padding-l" style="--flex-gap: calc(var(--space-l) * 2.5);">
        <div class="raised card padding-l">
            <span class="weight-light h3">This is a card</span>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea dolore, cumque repudiandae id quia libero.</span>
        </div>
        <div class="level-2 raised card padding-l">
            <span class="weight-light h3">This is a card</span>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea dolore, cumque repudiandae id quia libero.</span>
        </div>
        <div class="level-3 raised card padding-l">
            <span class="weight-light h3">This is a card</span>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea dolore, cumque repudiandae id quia libero.</span>
        </div>
    </div>
    <div class="live-example__code">
        <pre class="code-snippet" data-prog-lang="html"><code data-language="html">&lt;div class="raised card">
    &hellip;
&lt;/div>
&lt;div class="level-2 raised card">
    &hellip;
&lt;/div>
&lt;div class="level-3 raised card">
    &hellip;
&lt;/div></code></pre>
    </div>
</article>

<h2 class="weight-light h3 padding-top-l margin-top-l">Cards with image</h2>

<article class="live-example">
    <div class="live-example__result grid">
        <div class="bordered raised card padding-none" style="max-width: 25ch;">
            {% include components/image.html image="Placeholder.png" width="960" height="540" %}
            <div class="grid padding-l">
                <span class="weight-light h3">This is a card</span>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea dolore, cumque repudiandae id quia libero.</span>
            </div>
        </div>
    </div>
    <div class="live-example__code">
        <pre class="code-snippet" data-prog-lang="html"><code data-language="html">&lt;div class="bordered raised card padding-none">
    &lt;img src="/assets/images/Placeholder.png" alt="" width="960" height="540">
    &lt;div class="grid padding-l">
        &lt;h3 class="weight-light">This is a card&lt;/h3>
        &lt;p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea dolore, cumque repudiandae id quia libero.&lt;/p>
    &lt;/div>
&lt;/div></code></pre>
    </div>
</article>

<h2 class="weight-light h3 padding-top-l margin-top-l">Special Image Cards</h2>

Special image cards are image cards that use a different layout. This is the layout used in laying out blog entries for Antares Programming.

<article class="live-example">
    <div class="live-example__result">
        <article class="image-card" style="max-width: 25ch; background-color: var(--bg-0);">
            {% include components/image.html image="Placeholder.png" width="960" height="540" %}
            <div class="raised card" style="--grid-gap: var(--space-l)">
                <span class="h3">This is a card</span>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea dolore, cumque repudiandae id quia libero.</span>
            </div>
        </article>
    </div>
    <div class="live-example__code">
        <pre class="code-snippet" data-prog-lang="html"><code data-language="html">&lt;article class="image-card">
    &lt;img src="/assets/images/Placeholder.png" alt="" width="960" height="540">
    &lt;div class="raised card" style="--grid-gap: var(--space-l)">
        &lt;h3>This is a card&lt;/h3>
        &lt;p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea dolore, cumque repudiandae id quia libero.&lt;/p>
    &lt;/div>
&lt;/article></code></pre>
    </div>
</article>

<div class="padding-l"></div>

Special image cards can also be horizontal. This is used primarily to present featured blog entries. This can be done by adding the `.horizontal` class to `.image-card`.

<article class="live-example">
    <div class="live-example__result">
        <article class="horizontal image-card" style="background: var(--bg-0); --height: 20ch;">
            {% include components/image.html image="Placeholder.png" width="960" height="540" %}
            <div class="raised card" style="--grid-gap: var(--space-l); background-color: var(--bg-0);">
                <span class="h3">This is a card</span>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea dolore, cumque repudiandae id quia libero.</span>
            </div>
        </article>
    </div>
    <div class="live-example__code">
        <pre class="code-snippet" data-prog-lang="html"><code data-language="html">&lt;article class="horizontal image-card">
    &hellip;
&lt;/article></code></pre>
    </div>
</article>