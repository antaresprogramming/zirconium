---
title: Banners
description: Zirconium uses banners to present a notice of information.

layout: page
permalink: /components/banners
author: teacherbuknoy
publish_date: '2021-07-19'
subdirectory: '02. Components'
cover: banners.jpg

breadcrumbs: [Components, Banners]
card_image: Banner.png
---

Banners are simple. Create a `div` with the class `.banner`

<div class="banner">This is a default banner</div>

<pre class="code-snippet" data-prog-lang="html"><code data-language="html">&lt;div class="banner">This is a default banner&lt;/div></code></pre>

<h2 class="weight-light h3">Banners with icons</h2>

Banners can have icons. It is recommended to inline `svg` instead of using an `img` to embed it in the page or using raster formats link PNG or JPEG. Inlining SVGs in the markup will make it inherit colors from its parent.

You can use any SVG you may find online, or you may also create one yourself. However, it is recommended to use [Feather Icons](https://feathericons.com).

Put your `svg` before or after the text. It is also recommended to wrap your text inside a `.banner__text` element.

<div class="banner">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-info"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    <span class="banner__text">Lorem ipsum dolor sit amet.</span>
</div>

<pre class="code-snippet" data-prog-lang="html"><code data-language="html">&lt;div class="banner">
    &lt;svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-info">&lt;circle cx="12" cy="12" r="10">&lt;/circle>&lt;line x1="12" y1="16" x2="12" y2="12">&lt;/line>&lt;line x1="12" y1="8" x2="12.01" y2="8">&lt;/line>&lt;/svg>
    &lt;span class="banner__text">Lorem ipsum dolor sit amet.&lt;/span>
&lt;/div></code></pre>

<h2 class="weight-light h3">Text truncation</h2>

Texts inside banners truncate when it gets too long. Normally, the limit is 65 characters. To prevent this, make sure to keep your notices inside banners short and to the point.

<div class="banner">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-info"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    <span class="banner__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit incidunt quas, eaque dicta molestiae cum beatae magni illo modi nesciunt voluptatibus nisi architecto vel labore dignissimos fugiat autem nobis eligendi dolorum. Consequuntur quod voluptates dolorem.</span>
</div>

<pre class="code-snippet" data-prog-lang="html"><code data-language="html">&lt;div class="banner">
    &lt;svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-info">&lt;circle cx="12" cy="12" r="10">&lt;/circle>&lt;line x1="12" y1="16" x2="12" y2="12">&lt;/line>&lt;line x1="12" y1="8" x2="12.01" y2="8">&lt;/line>&lt;/svg>
    &lt;span class="banner__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit incidunt quas, eaque dicta molestiae cum beatae magni illo modi nesciunt voluptatibus nisi architecto vel labore dignissimos fugiat autem nobis eligendi dolorum. Consequuntur quod voluptates dolorem.&lt;/span>
&lt;/div></code></pre>

<h2 class="weight-light h3">Types</h2>

Banners can also use colors to signify the nature of the notice inside it. Use `.info`, `.success`, `.warning`, and `.error` classes for this purpose.

<div class="info banner margin-top">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-info"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    <span class="banner__text">Lorem ipsum dolor sit amet.</span>
</div>
<div class="success banner margin-top">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
    <span class="banner__text">Lorem ipsum dolor sit amet consectetur.</span>
</div>
<div class="warning banner margin-top">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-triangle"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
    <span class="banner__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta quae dolorem velit eligendi ipsam eaque dignissimos, quidem magni unde asperiores delectus accusantium facere in similique pariatur dolores consequatur, voluptate tempore fugit doloremque? Accusantium rem necessitatibus quis mollitia, debitis consequatur ad pariatur adipisci. Ex optio eos aut recusandae rerum doloribus distinctio!</span>
</div>
<div class="error banner margin-top">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-octagon"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
    <div class="banner__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, saepe!</div>
</div>

<pre class="code-snippet" data-prog-lang="html"><code data-language="html">&lt;div class="info banner">&hellip;&lt;/div>
&lt;div class="success banner">&hellip;&lt;/div>
&lt;div class="warning banner">&hellip;&lt;/div>
&lt;div class="error banner">&hellip;&lt;/div></code></pre>

{% include components/side-note.html
    content="<strong>Note:</strong> include an icon so color-blind users won't have to rely on colors to understand what you mean."
    type="warning"
%}

<h2 class="weight-light h3">Close button</h2>
You can give users an ability to close your banner when they have read your notice. Add a [button](./buttons.html) with the attribute `[data-close]`.

{% include components/side-note.html
    content="Include <code>zirconium.js</code> in your markup to make this work."
    type="info"
%}


<aside class="info banner margin-top">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-info"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    <div class="banner__text">Click this button to close this banner ->.</div>
    <button class="small square no-bg button" data-close>&times; <span class="visually-hidden">Dismiss</span></button>
</aside>

<pre class="code-snippet" data-prog-lang="html"><code data-language="html">&lt;aside class="info banner margin-top">
    &lt;svg>&hellip;&lt;/svg>
    &lt;div class="banner__text">Click this button to close this banner ->.&lt;/div>
    &lt;button class="small square no-bg button" data-close>
        &times;
        &lt;span class="visually-hidden">Dismiss&lt;/span>&lt;/button>
&lt;/aside></code></pre>

{% include components/side-note.html
    content="<>Add a text label to your close button for assistive technologies. Add the <code>.visually-hidden</code> class to hide it from sighted users."
    type="info"
%}

<h2 class="weight-light h3">Use cases</h2>

Banners can be used for giving notice to the user. Banners normally sit at the top of the page so the user can see it immediately.

It does not contain any button other than the close button, as the users should not interact with it, except to close it. It is only meant to present information

Only use banners when it is actually important information. You can also use this component to announce new features that have been teased previously.

Do not use banners to spam the users to sign up for newsletters, or subscribe to a service.
