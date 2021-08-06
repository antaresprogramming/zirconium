---
title: Disclosure Widgets
description: Hides content until the user toggles its visibility.

layout: page
permalink: /components/disclosure-widgets
author: teacherbuknoy
publish_date: '2021-07-31'
subdirectory: '02. Components'
cover: buttons.jpg

breadcrumbs: [Components, Disclosure Widgets]
card_image: "Disclosure.png"
---

Disclosure widgets, or known in HTML as the `<details></details>` element, makes the page easier to scan by hiding detailed information until the user needs it. Zirconium styles the default `<details>` element. There is no need to add any class to it.

<article class="live-example">
    <div class="live-example__result">
        <details>
            <summary>How much is the salary range for this position?</summary>
            <div class="section">
                <p class="margin-none">Salary for this position ranges from $60,000 to $100,000.</p>
            </div>
        </details>
    </div>
    <div class="live-example__code">
        <pre class="code-snippet" data-prog-lang="html"><code data-language="html">&lt;details>
    &lt;summary>How much is the salary range for this position?&lt;/summary>
    &lt;div class="section">
        &lt;p class="margin-none">Salary for this position ranges from $60,000 to $100,000.&lt;/p>
    &lt;/div>
&lt;/details></code></pre>
    </div>
</article>

Disclosure widgets can be opened by default by adding the `open` attribute.

<article class="live-example">
    <div class="live-example__result">
        <details open>
            <summary>What are the qualifications for this position?</summary>
            <div class="section">
                <p>Applicants must be:</p>
                <ul>
                    <li>Graduate of Computer Science, Information Technology, or similar</li>
                    <li>Has at least a year of working experience</li>
                    <li>Familiar with web technologies</li>
                </ul>
            </div>
        </details>
    </div>
    <div class="live-example__code">
        <pre class="code-snippet" data-prog-lang="html"><code data-language="html">&lt;details open>
    &hellip;
&lt;/details></code></pre>
    </div>
</article>

<h2 class="weight-light h3 margin-top-l padding-top-l">Disclosure groups</h2>

Disclosure widgets can be grouped together by putting them inside a `div` with class `.disclosure-group`

{% include components/side-note.html
    content='This is <strong>not an accordion</strong>. See the article <a href="https://daverupert.com/2019/12/why-details-is-not-an-accordion/">Why &lt;details> is not an accordion</a> by Dave Rupert'
    type="warning"
%}

<article class="live-example">
    <div class="live-example__result">
        <div class="disclosure-group">
            <details>
                <summary>Details 1</summary>
                <div class="section">Paragraph 1</div>
            </details>
            <details>
                <summary>Details 1</summary>
                <div class="section">
                    <p>Paragraph 1</p>
                </div>
            </details>
            <details>
                <summary>Details 2</summary>
                <div class="section">
                    <p>Paragraph 2</p>
                </div>
            </details>
            <details>
                <summary>Details 3</summary>
                <div class="section">
                    <p>Paragraph 3</p>
                </div>
            </details>
            <details>
                <summary>Details 4</summary>
                <div class="section">
                    <p>Paragraph 4</p>
                </div>
            </details>
        </div>
    </div>
    <div class="live-example__code">
        <pre class="code-snippet" data-prog-lang="html"><code data-language="html">&lt;div class="disclosure-group">
    &lt;details>&hellip;&lt;/details>
    &lt;details>&hellip;&lt;/details>
    &lt;details>&hellip;&lt;/details>
    &lt;details>&hellip;&lt;/details>
    &lt;details>&hellip;&lt;/details>
&lt;/div></code></pre>
    </div>
</article>