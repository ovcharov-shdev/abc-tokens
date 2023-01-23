document.addEventListener('DOMContentLoaded', function () {
	var slider = document.querySelector('.page-slider');
	var tabs = document.querySelectorAll('.tabs__link');
	var currentSlide = 1;
	var slideH = [];

	if (slider && tabs) {
		initSlider();
		for (var t = 0; t < tabs.length; t++) {
			tabs[t].addEventListener('click', function (e) {
				e.preventDefault();
				clearActiveClass(tabs, 'tabs__link--active');
				e.target.classList.add('tabs__link--active');
				slider.classList.remove('page-slider--slide--' + currentSlide);
				slider.classList.add('page-slider--slide--' + e.target.dataset.row)
				currentSlide = e.target.dataset.row;
				slider.style.height = slideH[currentSlide - 1].offsetHeight + 'px';
			})
		}
	}

	function setSliderHeight() {
		slider.style.height = slideH[currentSlide - 1].offsetHeight + 'px';
	}

	window.addEventListener('resize', throttle(setSliderHeight, 50));
	window.addEventListener('orientationchange', throttle(setSliderHeight, 50));

	// For invest page slides
	const investSteps = document.querySelectorAll('.block-invest *[data-step]');
	if(investSteps) {
		investSteps.forEach((step)=>step.addEventListener('click', setSliderHeight))
	}

	function clearActiveClass(elements, className) {
		if (!elements) return;
		for (var t = 0; t < elements.length; t++) {
			elements[t].classList.remove(className)
		}
	}

	function initSlider() {
		setTimeout(function () {
			var slides = slider.children;
			for (var s = 0; s < slides.length; s++) {
				slideH.push(slides[s]);
			}

			slider.style.height = slideH[currentSlide - 1] + 'px';
		}, 100)
	}
});
