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

<h2 class="weight-light h3 padding-top-l margin-top-l">Blurred Image Cards</h2>

{% include components/side-note.html
    content="Blurs can slow devices down. Use it sparingly."
    type="warning"
%}

Cards can also be fancy and have frosted glass effect. This is used for cards that depict media content like video thumbnails and album covers. To make this work, do the folllowing:

1. Add the class `.blurred` to the `.image-card` component.
1. Using the `style` attribute on the `.image-card` component, set the value of the `--blur-background` variable to the URL of the image in the image card.

<article class="live-example">
    <div class="live-example__result responsive-grid align-items-start padding-xl" style="--grid-gap: var(--space-xl)">
        <article class="raised blurred image-card" style="--blur-background: url('https://upload.wikimedia.org/wikipedia/en/d/d6/Lady_Gaga_-_Chromatica_%28Official_Album_Cover%29.png')">
            <img 
                src="https://upload.wikimedia.org/wikipedia/en/d/d6/Lady_Gaga_-_Chromatica_%28Official_Album_Cover%29.png"
                alt="Lady Gaga - Chromatica (Official Album Cover).png">
            <div class="card">
                <span class="h4 weight-light">Chromatica</span>
                <span class="flex">
                    {% include components/icon.html icon="user" modifiers="small" %}
                    <span class="visually-hidden">Artist: </span>
                    Lady Gaga
                </span>
                <span class="flex">
                    {% include components/icon.html icon="calendar" modifiers="small" %}
                    <span class="visually-hidden">Release Date: </span>
                    <time datetime="2020">2009</time>
                </span>
            </div>
        </article>
        <article class="raised blurred image-card" style="--blur-background: url('https://upload.wikimedia.org/wikipedia/en/4/45/The_Fame_Monster.png')">
            <img src="https://upload.wikimedia.org/wikipedia/en/4/45/The_Fame_Monster.png"
                 alt="Black-and-white image of Lady Gaga in a blond bob wig with a black collar hiding her mouth.">
            <div class="card">
                <span class="h4 weight-light">The Fame Monster</span>
                <span class="flex">
                    {% include components/icon.html icon="user" modifiers="small" %}
                    <span class="visually-hidden">Artist: </span>
                    Lady Gaga
                </span>
                <span class="flex">
                    {% include components/icon.html icon="calendar" modifiers="small" %}
                    <span class="visually-hidden">Release Date: </span>
                    <time datetime="2020">2009</time>
                </span>
            </div>
        </article>
        <article class="raised blurred image-card" style="--blur-background: url('https://upload.wikimedia.org/wikipedia/en/d/dd/Lady_Gaga_%E2%80%93_The_Fame_album_cover.png')">
            <img src="https://upload.wikimedia.org/wikipedia/en/d/dd/Lady_Gaga_%E2%80%93_The_Fame_album_cover.png"
                alt="Gaga's face wearing black glasses, whose right side is covered by blue crystals. On the bottom of the left side of the glasses, the word &quot;The Fame&quot; is inscribed in white."
                width="300"
                height="300"
            >
            <div class="card">
                <span class="h4 weight-light">The Fame</span>
                <span class="flex">
                    {% include components/icon.html icon="user" modifiers="small" %}
                    <span class="visually-hidden">Artist: </span>
                    Lady Gaga
                </span>
                <span class="flex">
                    {% include components/icon.html icon="calendar" modifiers="small" %}
                    <span class="visually-hidden">Release Date: </span>
                    <time datetime="2020">2008</time>
                </span>
            </div>
        </article>
    </div>
    <div class="live-example__code">
        <pre class="code-snippet" data-prog-lang="html" data-line='2,3,6'><code>&lt;article
  class="blurred image-card"
  style="--blur-background: url('album_cover.png')"
>
  &lt;img
    src="album_cover.png"
    alt="Lady Gaga - Chromatica (Official Album Cover).png"
    width="300"
    height="300"
  />
  &lt;div class="card">
    &hellip;
  &lt;/div>
&lt;/article></code></pre>
    </div>
</article>

{% include components/side-note.html
    content="In browsers that don't support <code>backdrop-filter</code>, this falls back to the normal <code>.image-card</code> component."
    type="info"
%}

<h2 class="weight-light h3 padding-top-l margin-top-l">Hoverable Blurred Image Cards</h2>

Hoverable blurred image cards hide the content, showing only the image part until the card is hovered on, or it or one of its children receives focus. To make a blurred image card hoverable, use the `.hoverable` class.

{% include components/side-note.html
    content="In touch devices, this component fallsback to a non-hoverable <code>.blurred.image-card</code> component."
    type="info"
%}

<article class="live-example">
    <div class="live-example__result responsive-grid align-items-start padding-xl" style="--grid-gap: var(--space-xl)">
        <article class="raised hoverable blurred image-card" style="--blur-background: url('https://upload.wikimedia.org/wikipedia/en/d/d6/Lady_Gaga_-_Chromatica_%28Official_Album_Cover%29.png')">
            <img 
                src="https://upload.wikimedia.org/wikipedia/en/d/d6/Lady_Gaga_-_Chromatica_%28Official_Album_Cover%29.png"
                alt="Lady Gaga - Chromatica (Official Album Cover).png">
            <div class="card">
                <span class="h4 weight-light">Chromatica</span>
                <span class="flex">
                    {% include components/icon.html icon="user" modifiers="small" %}
                    <span class="visually-hidden">Artist: </span>
                    Lady Gaga
                </span>
                <span class="flex">
                    {% include components/icon.html icon="calendar" modifiers="small" %}
                    <span class="visually-hidden">Release Date: </span>
                    <time datetime="2020">2009</time>
                </span>
            </div>
        </article>
        <article class="raised hoverable blurred image-card" style="--blur-background: url('https://upload.wikimedia.org/wikipedia/en/4/45/The_Fame_Monster.png')">
            <img src="https://upload.wikimedia.org/wikipedia/en/4/45/The_Fame_Monster.png"
                 alt="Black-and-white image of Lady Gaga in a blond bob wig with a black collar hiding her mouth.">
            <div class="card">
                <span class="h4 weight-light">The Fame Monster</span>
                <span class="flex">
                    {% include components/icon.html icon="user" modifiers="small" %}
                    <span class="visually-hidden">Artist: </span>
                    Lady Gaga
                </span>
                <span class="flex">
                    {% include components/icon.html icon="calendar" modifiers="small" %}
                    <span class="visually-hidden">Release Date: </span>
                    <time datetime="2020">2009</time>
                </span>
            </div>
        </article>
        <article class="raised hoverable blurred image-card" style="--blur-background: url('https://upload.wikimedia.org/wikipedia/en/d/dd/Lady_Gaga_%E2%80%93_The_Fame_album_cover.png')">
            <img src="https://upload.wikimedia.org/wikipedia/en/d/dd/Lady_Gaga_%E2%80%93_The_Fame_album_cover.png"
                alt="Gaga's face wearing black glasses, whose right side is covered by blue crystals. On the bottom of the left side of the glasses, the word &quot;The Fame&quot; is inscribed in white."
                width="300"
                height="300"
            >
            <div class="card">
                <span class="h4 weight-light">The Fame</span>
                <span class="flex">
                    {% include components/icon.html icon="user" modifiers="small" %}
                    <span class="visually-hidden">Artist: </span>
                    Lady Gaga
                </span>
                <span class="flex">
                    {% include components/icon.html icon="calendar" modifiers="small" %}
                    <span class="visually-hidden">Release Date: </span>
                    <time datetime="2020">2008</time>
                </span>
            </div>
        </article>
    </div>
    <div class="live-example__code">
        <pre class="code-snippet" data-prog-lang="html" data-line='2'><code>&lt;article
  class="hoverable blurred image-card"
  style="--blur-background: url('album_cover.png')"
>
  &lt;img
    src="album_cover.png" alt="&hellip;"
    width="300" height="300"
  />
  &lt;div class="card">
    &hellip;
  &lt;/div>
&lt;/article></code></pre>
    </div>
</article>