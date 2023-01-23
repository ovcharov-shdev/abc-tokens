document.addEventListener('DOMContentLoaded', function () {
	new SmoothScroll('.main-menu__sublink, .mobile-menu__sublink, .footer__col-nav--overview .footer__nav-link', {
		speed: 500,
		speedAsDuration: true
	});
});