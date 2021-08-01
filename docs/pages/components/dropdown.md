---
title: Dropdown
description: Displays a list of actions, links, or options a user can choose between.

layout: page
permalink: /components/dropdown
author: teacherbuknoy
publish_date: '2021-07-31'
subdirectory: '02. Components'
cover: buttons.jpg

breadcrumbs: [Components, Dropdown]
card_image: "Dropdown.png"
needs_js: true
---

Dropdowns have to be accessible. We make use of ARIA attributes to make the experience work for everyone. Lucky for you though, you don't have to worry about all of these. Zirconium handles all of it for you.

{% include components/side-note.html
    content="You need to include <code>zirconium.js</code> script in your HTML to make this work."
    type="warning"
%}

For the toggle, you need to create a button with the attribute `data-toggle`. Buttons with that attribute will toggle dropdowns that are immediately after the button. If your dropdown is placed somewhere else, however, you need to set `data-toggle`'s value to the `id` of your dropdown, like this example below:

<div class="relative section padding-top-l margin-top-l">
    <button class="button" data-toggle="dropdown-1">Toggle Menu {% include feathericons/chevron-down.svg %}</button>
    <div class="absolute margin-top-s level-2 raised dropdown" id="dropdown-1">
        <a href="#!" class="nav-item">
            <span class="nav-item__main"> Dropdown Item </span>
        </a>
        <a href="#!" class="nav-item">
            <span class="nav-item__main"> Dropdown Item </span>
        </a>
        <a href="#!" class="nav-item">
            <span class="nav-item__main"> Dropdown Item </span>
        </a>
        <a href="#!" class="nav-item">
            <span class="nav-item__main"> Dropdown Item </span>
        </a>
    </div>
</div>
<pre class="code-snippet" data-prog-lang="html"><code data-language="html">&lt;button class="button" data-toggle="dropdown-1">Toggle Menu &lt;svg>&hellip;&lt;/svg>&lt;/button>
&lt;div class="absolute margin-top-s level-2 raised dropdown" id="dropdown-1">
    &lt;a href="#!" class="nav-item">
        &lt;span class="nav-item__main"> Dropdown Item &lt;/span>
    &lt;/a>
    &lt;a href="#!" class="nav-item">
        &lt;span class="nav-item__main"> Dropdown Item &lt;/span>
    &lt;/a>
    &lt;a href="#!" class="nav-item">
        &lt;span class="nav-item__main"> Dropdown Item &lt;/span>
    &lt;/a>
    &lt;a href="#!" class="nav-item">
        &lt;span class="nav-item__main"> Dropdown Item &lt;/span>
    &lt;/a>
&lt;/div></code></pre>

JavaScript does not provide a layout for your dropdowns. Instead, it is recommended that you put your toggle button and dropdown together inside a `.relative` container, and put a `.absolute` class to  your dropdown. You can also adjust the position of your dropdown by using the margin utility classes.

<pre class="code-snippet" data-prog-lang="html"><code data-language="html">&lt;div class="relative">
    &lt;button class="button" data-toggle="dropdown-1">&hellip;&lt;/button>
    &lt;div class="absolute dropdown" id="dropdown-1">
        &hellip;
    &lt;/div>
&lt;/div></code></pre>

You can also add icons to your dropdown links or actions by adding an SVG or an `img` element inside your `.nav-item` elements. Putting them before your `.nav-item__main` element will place the icon to the left of the text, while putting it after will place the icon to the right.

<div class="relative section padding-top-l margin-top-l">
    <button class="button" data-toggle>Toggle Menu {% include feathericons/chevron-down.svg %}</button>
    <div class="absolute margin-top-s level-2 raised dropdown">
        <a href="#!" class="nav-item">
            {% include components/icon.html icon="rotate-cw" %}
            <span class="nav-item__main"> Refresh </span>
        </a>
        <a href="#!" class="nav-item">
            {% include components/icon.html icon="plus" %}
            <span class="nav-item__main"> New Tab </span>
        </a>
        <a href="#!" class="nav-item">
            {% include components/icon.html icon="download" %}
            <span class="nav-item__main"> Download </span>
        </a>
        <a href="#!" class="nav-item">
            {% include components/icon.html icon="trash" %}
            <span class="nav-item__main"> Delete </span>
        </a>
    </div>
</div>
<pre class="code-snippet" data-prog-lang="html"><code data-language="html">&lt;div class="dropdown">
    &lt;a href="#!" class="nav-item">
        &lt;svg>&hellip;&lt;/svg>
        &lt;span class="nav-item__main"> Refresh &lt;/span>
    &lt;/a>
&lt;/div></code></pre>

<h2 class="weight-light h3">Reminders</h2>

Do not use this as a `<select>` replacement. This should be used for actual dropdown menus, or navigation links in mobile devices (i.e. when the navigation bar cannot contain enough horizontal links).

Reevaluate if you actually need a dropdown. Although Zirconium includes dropdowns in its components, it is highly recommended that you use something else. Only use dropdowns if you <em>really</em> need it.

If you actually want to use it, do not use a link as your dropdown toggle. <strong>Use an actual <code>button</code> element.</strong>