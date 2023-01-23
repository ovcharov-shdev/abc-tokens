document.addEventListener('DOMContentLoaded', function () {
	const anchors = document.querySelectorAll('.section__anchor');

	window.onscroll = throttle(scrollspyOnScroll, 50);

	function scrollspyOnScroll() {
		let currentSectionId = null;
		const isSectionsInViewport = [];

		anchors.forEach((section) => {
			isSectionsInViewport.push({ 'id': section.id, 'isInViewport': isInViewport(document.querySelector(`#${section.id}`))});
		});

		const sectionsInViewport = isSectionsInViewport.filter(section => section.isInViewport);

		if (sectionsInViewport.length > 0) {
			currentSectionId = isSectionsInViewport.filter(section => section.isInViewport).shift().id;
		}

		// Remove active classes
		const activeElems = document.querySelectorAll('.main-menu__sublink--active, .mobile-menu__subitem--active');
		if (activeElems) {
			activeElems.forEach((elem) => {
				elem.classList.remove('main-menu__sublink--active', 'mobile-menu__subitem--active');
			})
		}
		
		// Add active classes
		if (currentSectionId) {			
			const newMainActiveLink = document.querySelector(`.main-menu__sublink[href="#${currentSectionId}"]`);
			if (newMainActiveLink) newMainActiveLink.classList.add('main-menu__sublink--active');

			const newMobileActiveLink = document.querySelector(`.mobile-menu__sublink[href="#${currentSectionId}"]`);
			if (newMobileActiveLink) newMobileActiveLink.parentNode.classList.add('mobile-menu__subitem--active');
		}
	};

	function isInViewport(element) {
		var rect = element.getBoundingClientRect();
		return (rect.top >= -80 && rect.left >= 0);
	}
});

