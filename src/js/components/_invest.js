document.addEventListener('DOMContentLoaded', function () {
	// Tabs
	const tabList = document.querySelectorAll('.block-invest .tabs__link');
	if (tabList) {
		tabList.forEach((tab) => {
			tab.addEventListener('click', (e) => {
				e.preventDefault();
				// Set active tab
				tabList.forEach((tab) => {
					tab.classList.remove('tabs__link--active');
				})
				tab.classList.add('tabs__link--active');
				// Set active row
				const section = document.querySelector('.block-invest');
				section.classList.remove('block-invest--buy-mode', 'block-invest--sell-mode');
				section.classList.add(`block-invest--${tab.dataset.row}-mode`);
				return false;
			})
		})
	}

	const stepsToTopScroll = new SmoothScroll();
	// Steps
	const buttonList = document.querySelectorAll('.block-invest .js-step-button[data-step]');
	if (buttonList) {
		buttonList.forEach((button) => {
			button.addEventListener('click', (e) => {
				e.preventDefault();
				const step = button.dataset.step;
				// Set step
				const row = getParentByClassName(button, 'block-invest__form-row');
				row.classList.remove('block-invest__form-row--step1', 'block-invest__form-row--step2', 'block-invest__form-row--step3');
				row.classList.add(`block-invest__form-row--${step}`);

				// Scroll to top
				if(window.innerWidth <= 992) {
					stepsToTopScroll.animateScroll(0);
				}


				const formElements = row.querySelectorAll('.js-step-disable');
				if (step === 'step1') {
					// Enable form elements
					formElements.forEach((el) => {
						// Select
						if (el.classList.contains('select')) {
							el.classList.remove('select--disabled');
						}
						else {
							// Other inputs							
							el.classList.remove('form-group--disabled');
							el.querySelector('.form-group__input').removeAttribute('disabled');
						}
					})
				}
				else {
					// Disable form elements
					formElements.forEach((el) => {
						// Select
						if (el.classList.contains('select')) {
							el.classList.add('select--disabled');
						}
						else {
							// Other inputs
							el.classList.add('form-group--disabled');
							el.querySelector('.form-group__input').disabled = true;
						}
					})
				}
				return false;
			})
		})
	}

	// Change input curency on curency select
	const curencyOptions = document.querySelectorAll('.invest-form__curency-col .select__option');
	if (curencyOptions) {
		curencyOptions.forEach((option) => {
			option.addEventListener('click', () => {
				const form = getParentByClassName(option, 'form');
				form.querySelector('.form-group__curency').innerHTML = option.innerHTML;
			})
		})
	}
})