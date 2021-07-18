;(function () {
	// NAVIGATION MENU
	const navigationMenuToggles = document.querySelectorAll(
		'button[data-navmenu]'
	)
	navigationMenuToggles.forEach((button) => initializeMenuToggle(button))

	function initializeMenuToggle(button) {
		const dropdown = button.nextElementSibling

		button.addEventListener('click', (e) => {
			const expanded = button.getAttribute('aria-expanded') === 'true'
			dropdown.classList.toggle('open')
			button.setAttribute('aria-expanded', expanded ? 'false' : 'true')
		})
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
