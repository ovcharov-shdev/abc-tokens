document.addEventListener('DOMContentLoaded', function () {
	const reviewsSlider = document.querySelector('.section--reviews .section__slider');

	if (reviewsSlider) {
		new Swiper(reviewsSlider, {
			slidesPerView: 1,
			spaceBetween: 0,
			loop: true,
			pagination: {
				el: '.section__pagination',
				clickable: true,
				bulletElement: 'button',
				bulletClass: 'slider__bullet',
				bulletActiveClass: 'slider__bullet--active',
			},
			navigation: {
				nextEl: '.section__next',
				prevEl: '.section__prev',
			},
		});
	}
})