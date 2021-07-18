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
		button.setAttribute('aria-expanded', 'true')
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
