---
title: Dialog
description: Dialogs presents additional workflow or force an important decision right where the user currently is

layout: page
permalink: /components/dialog
author: teacherbuknoy
publish_date: '2021-09-01'
subdirectory: '02. Components'
cover: buttons.jpg

breadcrumbs: [Components, Dialog]
card_image: "Code Snippets.png"
needs_js: true
---

To create a modal dialog, add a `.dialog` element. Inside it, add a `.dialog__backdrop` and a `.dialog__inner` element. Give the `.dialog` an `id` attribute, and assign it to the `data-dialog` attribute of the button that will open your dialog.

<article class="live-example">
    <div class="live-example__result">
        <button class="button" data-dialog="dialog-1">Toggle dialog</button>
        <div class="dialog" id="dialog-1">
            <div class="dialog__backdrop" data-dialog-hide></div>
            <div class="dialog__inner card no-border raised padding-xl">This is a modal dialog.</div>
        </div>
    </div>
    <div class="live-example__code">
        <pre class="code-snippet" data-prog-lang="html"><code>&lt;button class="button" data-dialog="dialog-1">Toggle dialog&lt;/button>
&lt;div id="dialog-1">
    &lt;div class="dialog__backdrop" data-dialog-hide>&lt;/div>
    &lt;div class="dialog__inner card no-border raised padding-xl">This is a modal dialog.&lt;/div>
&lt;/div></code></pre>
    </div>
</article>

There are three things in this code snippet:
1. The `.dialog__backdrop` element that serves as the backdrop that dims the page behind the dialog to bring user's focus on the dialog.
2. The `.dialog__inner` element that serves as the container for the dialog contents.
3. At least one element with the attribute `data-dialog-hide`. This element closes the dialog when it is clicked. In the previous code snippet, the `.dialog__backdrop` has the `[data-dialog-hide]`, which means that the dialog will close once the user clicks outside the dialog's contents.

If you decide to add a close button inside the dialog's contents, you just need to add the `data-dialog-hide` attribute to it so it closes the dialog when clicked.

<article class="live-example">
    <div class="live-example__result">
        <button class="button" data-dialog="dialog-2">Toggle dialog</button>
        <div class="dialog" id="dialog-2">
            <div class="dialog__backdrop" data-dialog-hide></div>
            <article class="dialog__inner card bordered raised padding-none">
                <header class="flex padding-l justify-content-space-between border-bottom">
                    <p class="h5 margin-none">Dialog header</p>
                    <button class="square button padding-s" data-dialog-hide>
                        <span aria-hidden="true">&times;</span>
                        <span class="visually-hidden">Close dialog</span>
                    </button>
                </header>
                <div class="padding-l">
                    <p>This is a dialog.</p>
                </div>
                <footer class="flex padding-l justify-content-end border-top">
                    <button class="button" data-dialog-hide>Close</button>
                </footer>
            </article>
        </div>
    </div>
    <div class="live-example__code">
        <pre class="code-snippet" data-prog-lang="html"><code>&lt;button class="button" data-dialog="dialog-2">Toggle dialog&lt;/button>
&lt;div class="dialog" id="dialog-2">
    &lt;div class="dialog__backdrop" data-dialog-hide>&lt;/div>
    &lt;article class="dialog__inner card no-border raised padding-none">
        &lt;header class="flex padding-l justify-content-end">
            &lt;button class="square button padding-s" data-dialog-hide>
                &lt;span aria-hidden="true">&times;&lt;/span>
                &lt;span class="visually-hidden">Close dialog&lt;/span>
            &lt;/button>
        &lt;/header>
        &lt;div class="padding-l">
            &lt;h5 class="margin-none">Dialog header&lt;/h5>
            &lt;p>This is a dialog.&lt;/p>
        &lt;/div>
        &lt;footer class="flex padding-l justify-content-end bg-1">
            &lt;button class="button" data-dialog-hide>Close&lt;/button>
        &lt;/footer>
    &lt;/article>
&lt;/div></code></pre>
    </div>
</article>