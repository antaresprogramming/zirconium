const showButtons = document.querySelectorAll('[data-show]')
showButtons.forEach((showButton) => {
  const hiddenElement = document.getElementById(showButton.dataset.show)
  if (hiddenElement != null) {
    showButton.addEventListener('click', (e) =>
      hiddenElement.removeAttribute('hidden')
    )
  }
})

const hideButtons = document.querySelectorAll('[data-hide]')
hideButtons.forEach((hideButton) => {
  const shownElement = document.getElementById(hideButton.dataset.hide)
  if (shownElement != null) {
    hideButton.addEventListener('click', (e) =>
      shownElement.setAttribute('hidden', 'true')
    )
  }
})

const visibilityTogglers = document.querySelectorAll('[data-toggle-visibility]')
visibilityTogglers.forEach(toggler => {
    const element = document.getElementById(toggler.dataset.toggleVisibility)
    if(element != null) {
        toggler.addEventListener('click', e => {
            if(element.hidden) {
                element.removeAttribute('hidden')
            } else {
                element.setAttribute('hidden', true)
            }
        })
    }
})
