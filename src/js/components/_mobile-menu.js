document.addEventListener('DOMContentLoaded', function () {	
	// Open-Close mobile menu
	document.querySelector('.header__burger').addEventListener('click', () => {
		document.body.classList.add('mobile-menu-opening');

		setBodyOverflowHidden();

		setTimeout(() => {
			document.body.classList.add('mobile-menu-opened');
			document.body.classList.remove('mobile-menu-opening');
		}, 100);
	});

	document.querySelectorAll('.mobile-menu__close, .mobile-menu__backdrop, .mobile-menu__item:not(.mobile-menu__item--parent) .mobile-menu__link, .mobile-menu__sublink').forEach((elem) => {
		elem.addEventListener('click', () => {
			document.body.classList.add('mobile-menu-opening');
				document.body.classList.remove('mobile-menu-opened');
			setTimeout(() => {
				document.body.classList.remove('mobile-menu-opening');
			}, 200);
			removeBodyOverflowHidden();
		})
	});

	//Open-Close mobile menu parent elements
	const parentLinks = document.querySelectorAll('.mobile-menu__item--parent > .mobile-menu__link');
	parentLinks.forEach((link) => {
		link.addEventListener('click', () => {
			link.parentNode.classList.toggle('mobile-menu__item--parent--opened')
		})
	})
})