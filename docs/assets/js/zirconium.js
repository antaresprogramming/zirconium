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

  function initializeDropdownToggle(button) {
    let dropdown = null

    if (
      button.dataset.toggle != null &&
      button.nextElementSibling.matches('.dropdown')
    ) {
      dropdown = button.nextElementSibling
    } else if (button.dataset.toggle.length > 0) {
      dropdown = document.getElementById(button.dataset.toggle)
    }

    button.setAttribute('aria-expanded', false)

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

    dropdown.addEventListener('blur', (e) => {
      console.log('blur')
      closeDropdown(button, dropdown)
    })
  }

  function toggleDropdown(button, dropdown) {
    const expanded = button.getAttribute('aria-expanded') === 'true'

    if (expanded) {
      closeDropdown(button, dropdown)
    } else {
      openDropdown(button, dropdown)
    }
  }

  function closeDropdown(button = document.createElement('button'), dropdown) {
    dropdown.classList.remove('open')
    button.setAttribute('aria-expanded', 'false')
  }

  function openDropdown(button = document.createElement('button'), dropdown) {
    dropdown.classList.add('open')
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
})()
