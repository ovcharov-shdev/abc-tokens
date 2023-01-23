document.addEventListener('DOMContentLoaded', function () {
	
	const tooltips = document.querySelectorAll('.tooltip');

	tooltips.forEach((tooltip) => {
		['click', 'mouseenter'].forEach(evt => {
			tooltip.addEventListener(evt, () => showTooltip(tooltip));
		})
		tooltip.addEventListener('mouseleave', () => closeTooltip(tooltip));
	})

	function showTooltip(tooltip) {
		closeTooltips();

		const popup = tooltip.querySelector('.tooltip__popup');
		popup.style.width = '';
		popup.style.transform = '';

		const windowWidth = document.documentElement.clientWidth;
		const windowHeight = document.documentElement.clientHeight;

		tooltip.classList.add('tooltip--show');
		const titleRect = tooltip.getBoundingClientRect();

		const popupRect = popup.getBoundingClientRect();
		tooltip.classList.add('tooltip--shown');

		const fit = {
			top: titleRect.y - popupRect.height - document.querySelector('.header').offsetHeight,
			right: windowWidth - titleRect.x - popupRect.width,
			bottom: windowHeight - titleRect.y - popupRect.height,
			left: titleRect.x - popupRect.width
		}

		// Calc position
		let classList = '';
		if (fit.top > 0 && fit.right > 0) classList = 'tooltip--to-top tooltip--to-right';
		else if (fit.top > 0 && fit.left > 0) classList = 'tooltip--to-top tooltip--to-left';
		else if (fit.bottom > 0 && fit.right > 0) classList = 'tooltip--to-bottom tooltip--to-right';
		else if (fit.bottom > 0 && fit.left > 0) classList = 'tooltip--to-bottom tooltip--to-left';
		else {
			// Full width style
			classList = 'tooltip--bottom-full-width'
			popup.style.width = windowWidth - 40 + 'px';
			popup.style.transform = `translateX(-${titleRect.x - 20}px)`
		}

		// Add position classes
		classList = classList.split(' ');
		classList.forEach((el) => tooltip.classList.add(el));
	}

	function closeTooltip(tooltip) {
		tooltip.classList.remove('tooltip--show');
		tooltip.classList.remove('tooltip--shown');
		tooltip.classList.remove('tooltip--to-top', 'tooltip--to-right', 'tooltip--to-bottom', 'tooltip--to-left', 'tooltip--bottom-full-width');
	}

	function closeTooltips() {
		tooltips.forEach((tooltip) => closeTooltip(tooltip));
	}

	document.addEventListener('click', (e) => {
		if (!e.target.classList.contains('tooltip__title')) {
			closeTooltips();
		}
	});

	window.addEventListener('resize', closeTooltips);
	window.addEventListener('orientationchange', closeTooltips);
});
