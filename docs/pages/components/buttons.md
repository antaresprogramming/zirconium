---
title: Buttons
description: Buttons trigger an event or an action.

layout: page
permalink: /components/button
author: teacherbuknoy
publish_date: '2021-07-26'
subdirectory: '02. Components'
cover: buttons.jpg
---

## Default button

Buttons are not styled on themselves. Instead, you have to add the `.button` class.

<button aria-hidden="true">Unstyled button</button>
<button class="button" aria-hidden="true">Default button</button>

<pre class="code-snippet" data-prog-lang="html"><code data-language="html">&lt;button>Unstyled button&lt;/button>
&lt;button class="button">Default button&lt;/button></code></pre>

<div class="padding-top-l"></div>
You can also use the `.button` class on links to make them look like buttons.

<a href="#!" class="button">Link disguised as a button</a>

<pre class="code-snippet" data-prog-lang="html"><code data-language="html">&lt;a href="#!" class="button">Link disguised as a button&lt;/a></code></pre>

{% include components/side-note.html
        content="Do not use a link if you meant to trigger an action or event. Links are for navigation. Use a <code>&lt;button></code> instead."
        type="warning"
%}

## Icons

Icons can be used inside buttons. Putting them before the text makes them appear to the left of the button, and putting them after the text makes the appear to the right.

<div class="flex" aria-hidden="true">
    <button class="button">
        {% include feathericons/download.svg %}
        Button to the left
    </button>
    <button class="button">
        Button to the right
        {% include feathericons/download.svg %}
    </button>
</div>
<pre class="code-snippet" data-prog-lang="html"><code data-language="html">&lt;button class="button">
    &lt;svg>&hellip;&lt;/svg>
    Button to the left
&lt;/button>
&lt;button class="button">
    Button to the right
    &lt;svg>&hellip;&lt;/svg>
&lt;/button></code></pre>

Icon only buttons are also possible by wrapping your text inside a span with class `.visually-hidden`.

<button class="button" aria-hidden="true">
    {% include feathericons/download.svg %}
    <span class="visually-hidden">Download</span>
</button>
<pre class="code-snippet" data-prog-lang="html"><code data-language="html">&lt;button class="button">
    &lt;svg>&hellip;&lt;/svg>
    &lt;span class="visually-hidden">Download&lt;/span>
&lt;/button></code></pre>

{% include components/side-note.html
    type="warning"
    content="Add a text label to your close button for assistive technologies. Add the <code>.visually-hidden</code> class to hide it from sighted users."
%}

Zirconium buttons have paddings that double on the left and right sides. Because of this, an icon button looks rectangular. This can be fixed by using the `.icon-only` class.

<button class="icon-only button" aria-hidden="true">
    {% include feathericons/download.svg %}
    <span class="visually-hidden">Download</span>
</button>

<pre class="code-snippet" data-prog-lang="html"><code data-language="html">&lt;button class="icon-only button">
    &lt;svg>&hellip;&lt;/svg>
    &lt;span class="visually-hidden">Download&lt;/span>
&lt;/button></code></pre>

## Loading state

By adding the class `.loading` to your button, you can add a spinner to it to communicate that the process it triggered is still ongoing.

<div class="flex" aria-hidden="true">
    <button class="button" data-load>
        Toggle loading
    </button>
    <button class="button" data-load>
        {% include components/icon.html icon="download" %}
        Toggle loading
    </button>
    <button class="button" data-load>
        Toggle loading
        {% include components/icon.html icon="download" %}
    </button>
</div>
<pre class="code-snippet" data-prog-lang="html"><code data-language="html">&lt;button class="loading button" data-load>
    Toggle loading
&lt;/button></code></pre>

<script>
    document.querySelectorAll('button[data-load]')
        .forEach(button => {
            button.addEventListener('click', function(e) {
                button.classList.toggle('loading')
            })
        })
</script>

## Appearance
<h3 class="h5">Primary</h3>
Use primary buttons to call the attention of your users. Use this to highlight the most important action in the UI. For the rest of the buttons, use the default appearance.

<button class="primary button" aria-hidden="true">Primary button</button>
<pre class="code-snippet" data-prog-lang="html"><code data-language="html">&lt;button class="primary button">Primary button&lt;/button></code></pre>

<h3 class="h5">No background color</h3>
Use buttons with no background color to represent actions that are less important than what default buttons represent. You can also use this in common actions like the close button in dialogs.

<button class="no-bg button" aria-hidden="true">Button</button>
<pre class="code-snippet" data-prog-lang="html"><code data-language="html">&lt;button class="no-bg button">Button&lt;/button></code></pre>

You can also add the `.primary` class to the default `.no-bg` button to give it color.

<button class="primary no-bg button" aria-hidden="true">Button</button>
<pre class="code-snippet" data-prog-lang="html"><code data-language="html">&lt;button class="primary no-bg button">Button&lt;/button></code></pre>

## Sizes
<h3 class="h5">Large buttons</h3>

Add `.large` to your button to make it larger.

<div class="flex">
    <button class="button">Default button</button>
    <button class="large button">Large button</button>
</div>
<pre class="code-snippet" data-prog-lang="html"><code data-language="html">&lt;button class="button">Default button&lt;/button>
&lt;button class="large button">Large button&lt;/button></code></pre>

<h3 class="h5">Small buttons</h3>

Add `.small` to your button to make it smaller.

<div class="flex">
    <button class="button">Default button</button>
    <button class="small button">Small button</button>
</div>
<pre class="code-snippet" data-prog-lang="html"><code data-language="html">&lt;button class="button">Default button&lt;/button>
&lt;button class="small button">Small button&lt;/button></code></pre>