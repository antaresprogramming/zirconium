;(function () {
  const ESCAPE_KEY = 27
  const ENTER_KEY = 13
  const DOWN_ARROW = 40
  const UP_ARROW = 38

  // NAVIGATION MENU
  const navigationMenuToggles = document.querySelectorAll(
    'button[data-navmenu]'
  )
  navigationMenuToggles.forEach((button) => initializeMenuToggle(button))

  // DROPDOWN MENUS
  const dropdownToggles = document.querySelectorAll('[data-toggle]')
  dropdownToggles.forEach((button) => initializeDropdownToggle(button))

  /**
   * Initializes a dropdown inside a navigation bar
   * @param {HTMLButtonElement} button the dropdown toggle
   * @deprecated
   */
  function initializeMenuToggle(button) {
    const dropdown = button.nextElementSibling

    button.addEventListener('click', (e) => {
      toggleDropdown(button, dropdown)
    })

    dropdown.addEventListener('keydown', (e) => {
      if (e.keyCode === ESCAPE_KEY || e.keyCode === ENTER_KEY)
        closeDropdown(button, dropdown)
    })
  }

  /**
   * Initializes a dropdown everywhere else in the page
   * @param {HTMLButtonElement} button the dropdown toggle
   */
  function initializeDropdownToggle(button) {
    let dropdown = null

    console.log({
      length: button.dataset.toggle.length,
      isMoreThanZero: button.dataset.toggle.length > 0,
    })
    if (
      button.dataset.toggle.length <= 0 &&
      button.nextElementSibling.matches('.dropdown')
    ) {
      dropdown = button.nextElementSibling
    } else if (button.dataset.toggle.length > 0) {
      dropdown = document.getElementById(button.dataset.toggle)
    }

    console.log({ button, dropdown })
    button.setAttribute('aria-expanded', false)
    dropdown.setAttribute('hidden', true)

    button.addEventListener('click', (e) => {
      toggleDropdown(button, dropdown)
    })

    button.addEventListener('keydown', (e) => {
      if (e.keyCode === ESCAPE_KEY || e.keyCode === UP_ARROW) {
        closeDropdown(button, dropdown)
      } else if (e.keyCode === DOWN_ARROW) {
        e.preventDefault()
        openDropdown(button, dropdown)
      }
    })

    dropdown.addEventListener('keydown', (e) => {
      if (e.keyCode === ESCAPE_KEY || e.keyCode === ENTER_KEY) {
        closeDropdown(button, dropdown)
      } else if (e.keyCode === DOWN_ARROW) {
        console.log(e.target)
        if (e.target.matches(':last-child')) {
          closeDropdown(button, dropdown)
        } else if (isFocusable(e.target.nextElementSibling)) {
          e.target.nextElementSibling.focus()
        } else {
          closeDropdown(button, dropdown)
        }
      } else if (e.keyCode === UP_ARROW) {
        e.preventDefault()
        if (e.target.matches(':first-child')) {
          closeDropdown(button, dropdown)
        } else if (isFocusable(e.target.previousElementSibling)) {
          e.target.previousElementSibling.focus()
        } else {
          closeDropdown(button, dropdown)
        }
      }
    })

    dropdown
      .querySelectorAll('button, a[href]')
      .forEach((item) =>
        item.addEventListener('click', (e) => closeDropdown(button, dropdown))
      )
  }

  /**
   * Toggles a dropdown
   * @param {HTMLButtonElement} button the button that toggles the dropdown
   * @param {HTMLElement} dropdown the dropdown
   */
  function toggleDropdown(button, dropdown) {
    const expanded = button.getAttribute('aria-expanded') === 'true'

    if (expanded) {
      closeDropdown(button, dropdown)
    } else {
      openDropdown(button, dropdown)
    }
  }

  /**
   * Closes a dropdown
   * @param {HTMLButtonElement} button the button that toggles the dropdown
   * @param {HTMLElement} dropdown the dropdown
   */
  function closeDropdown(button = document.createElement('button'), dropdown) {
    dropdown.classList.remove('open')
    dropdown.setAttribute('hidden', 'true')
    button.setAttribute('aria-expanded', 'false')
  }

  /**
   * Opens a dropdown
   * @param {HTMLButtonElement} button the button that toggles the dropdown
   * @param {HTMLElement} dropdown the dropdown
   */
  function openDropdown(button = document.createElement('button'), dropdown) {
    dropdown.classList.add('open')
    dropdown.removeAttribute('hidden')
    dropdown.querySelector(':not([disabled])').focus()
    button.setAttribute('aria-expanded', 'true')
  }

  /**
   * Checks if an element is focusable
   * @param {HTMLElement} element the element to check for focusability
   */
  function isFocusable(element) {
    if (element.matches('[hidden]') || element.matches(':disabled')) {
      return false
    }

    let tabindex = element.tabIndex
    tabindex = Number.isNaN(tabindex) ? -1 : tabindex

    return (
      element.matches('input, a[href], area[href], iframe') || tabindex > -1
    )
  }

  // CLOSE BUTTONS
  const closeButtons = document.querySelectorAll('button[data-close]')
  closeButtons.forEach((button) => {
    const parentID = button.dataset.close
    let parent = null
    const parentSpecified = parentID.length > 0

    if (parentSpecified) {
      parent = document.getElementById(parentID)

      if (parent == null) {
        console.error({
          error: `Element #${parentID} does not exist.`,
          message: `A close button specified an ID for its parent, but that ID does not refer to any element.`,
          details: {
            button,
          },
        })
        return
      }
    } else {
      parent = button.parentElement
    }

    button.addEventListener('click', (e) => {
      if (parent != null) {
        parent.remove()
      }
    })
  })

  // Add classes to pre tags
  document.querySelectorAll('[data-prog-lang]').forEach((pre) => {
    const language = pre.dataset.progLang
    pre.classList.add('language-' + language)
  })

  // STICKY NAVBARS
  const navigationBars = document.querySelectorAll('.navbar[data-sticky]')
  navigationBars.forEach((nav) => {
    let previousScrollPosition = +nav.dataset.sticky || 0
    let throttleWait

    const isScrollingDown = () => {
      let currentScrolledPosition = window.scrollY || window.pageYOffset
      let scrollingDown

      if (currentScrolledPosition > previousScrollPosition) {
        scrollingDown = true
      } else {
        scrollingDown = false
      }

      previousScrollPosition = currentScrolledPosition

      console.log({
        currentScrolledPosition,
        previousScrollPosition,
        scrollingDown,
      })
      return scrollingDown
    }

    const handleNavScroll = () => {
      if (isScrollingDown() && !nav.contains(document.activeElement)) {
        nav.classList.add('scroll-down')
        nav.classList.remove('scroll-up')
      } else {
        nav.classList.remove('scroll-down')
        nav.classList.add('scroll-up')
      }

      let currentScrolledPosition = window.scrollY || window.pageYOffset
      if (currentScrolledPosition > 0) {
        nav.classList.add('level-2', 'raised', 'fixed')
      } else {
        nav.classList.remove('level-2', 'raised', 'fixed')
      }
    }

    const throttle = (callback, time) => {
      if (throttleWait) return

      throttleWait = true

      setTimeout(() => {
        callback()

        throttleWait = false
      }, time)
    }

    window.addEventListener('scroll', () => {
      throttle(handleNavScroll, 0)
    })
  })
})()
