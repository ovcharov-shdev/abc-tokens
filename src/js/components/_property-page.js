document.addEventListener('DOMContentLoaded', function () {
	const propertySliderElem = document.querySelector('.section--property-page .slider');

	if (propertySliderElem) {
		const propertySlider = new Swiper(propertySliderElem, {
			slidesPerView: 1,
			spaceBetween: 0,
			loop: true,
			navigation: {
				nextEl: '.slider__next',
				prevEl: '.slider__prev',
			},
		});

		function toggleSlidesBg() {
			const slides = propertySliderElem.querySelectorAll('.slider__slide');
			if (window.innerWidth < 767) {
				slides.forEach((slide) => {
					slide.style.backgroundImage = `url(${slide.dataset.bgmobile})`;
				})
			}
			else {
				slides.forEach((slide) => {
					slide.style.backgroundImage = `url(${slide.dataset.bg})`;
				})
			}
		}

		toggleSlidesBg();

		window.addEventListener('resize', throttle(toggleSlidesBg, 200));
		window.addEventListener('orientationchange', throttle(toggleSlidesBg, 200));
	}

	// Open/close content on mobile
	const contentToTopScroll = new SmoothScroll();
	const moreButton = document.querySelector('.section--property-page .property-page__more-button');
	const propertyPageContent = document.querySelector('.section--property-page .property-page__content');
	if (moreButton && propertyPageContent) {
		moreButton.addEventListener('click', () => {
			if (propertyPageContent.classList.contains('property-page__content--opened')) {
				propertyPageContent.classList.remove('property-page__content--opened');
				contentToTopScroll.animateScroll(0);
			}
			else {
				propertyPageContent.classList.add('property-page__content--opened');
			}
		})
	}
})