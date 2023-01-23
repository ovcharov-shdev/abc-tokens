//= ../../node_modules/swiper/swiper-bundle.min.js
//= ../../node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js
//= components/_header.js
//= components/_mobile-menu.js
//= components/_reviews.js
//= components/_modal.js
//= components/_modal-login.js
//= components/_modal-logout.js
//= components/_overview.js
//= components/_scrollspy.js
//= components/_tooltip.js
//= components/_select.js
//= components/_invest.js
//= components/_profile.js
//= components/_search-form.js
//= components/_property-page.js

// Form inputs
document.querySelectorAll('.form-group').forEach((group) => {
	const input = group.querySelector('.form-group__input, .form-group__textarea');
	input.addEventListener('focus', () => {
		group.classList.add('form-group--show-label');
	})
	input.addEventListener('blur', () => {
		if (!input.value.trim()) {
			group.classList.remove('form-group--show-label');
		}
	})
})

// Toggle date input type
const dateInputGroups = document.querySelectorAll('.form-group--date');
if (dateInputGroups) {
	dateInputGroups.forEach((inputGroup) => {
		const dateInput = inputGroup.querySelector('.form-group__input')
		dateInput.addEventListener('focus', () => {
			dateInput.type = 'date';
		});
		dateInput.addEventListener('blur', () => {
			dateInput.type = 'text';
		});
	})
}

function setBodyOverflowHidden() {
	const scrollbarWidth = (window.innerWidth - document.documentElement.clientWidth) + 'px';
	// Add scrollbar padding
	document.getElementsByTagName("html")[0].classList.add('overflow-hidden');
	document.body.classList.add('overflow-hidden');
	document.body.style.paddingRight = scrollbarWidth;
}

function removeBodyOverflowHidden() {
	// Remove scrollbar padding
	document.getElementsByTagName("html")[0].classList.remove('overflow-hidden');
	document.body.classList.remove('overflow-hidden');
	document.body.style.paddingRight = '';
}

// Get parent by class name
function getParentByClassName(element, className) {
	while ((element = element.parentElement) !== null) {
		if (element.nodeType !== Node.ELEMENT_NODE) {
			continue;
		}
		if (element.classList.contains(className)) {
			return element;
		}
	}
	return undefined;
}

function throttle(fn, wait) {
	var time = Date.now();
	return function () {
		if ((time + wait - Date.now()) < 0) {
			fn();
			time = Date.now();
		}
	}
}

