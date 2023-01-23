document.addEventListener('DOMContentLoaded', function () {
	// Goto form from data-form param	
	const modalLinks = document.querySelectorAll('*[data-modal]');
	modalLinks.forEach((link) => {
		link.addEventListener('click', (e) => {
			e.preventDefault();
			if (e.target.dataset.form) {
				setActiveTab(e.target.dataset.form)
				gotoForm(e.target.dataset.form);
			}
			return false;
		});
	})

	// Tab navigation
	const formLinks = document.querySelectorAll('.modal--login *[data-form]');
	if (formLinks) {
		formLinks.forEach((link) => {
			link.addEventListener('click', (e) => {
				e.preventDefault();
				setActiveTab(e.target.dataset.form)
				gotoForm(e.target.dataset.form);
				return false;
			})
		})
	}

	function setActiveTab(formName) {
		// Set active tab
		const loginTablinks = document.querySelectorAll('.modal--login__tab-link');
		loginTablinks.forEach((elem) => {
			elem.classList.remove('modal--login__tab-link--active');
		})
		const tabLink = document.querySelector(`.modal--login__tab-link[data-form="${formName}"]`);
		tabLink.classList.add('modal--login__tab-link--active');

		// Scroll to active tab
		const tabsContainer = document.querySelector('.modal--login__tabs-wrapper');
		let offset = tabLink.parentNode.offsetLeft - tabsContainer.getBoundingClientRect().width / 2 + tabLink.getBoundingClientRect().width / 2
		tabsContainer.scrollLeft = offset;

	}

	function gotoForm(formName) {
		// Move form list
		const forms = document.querySelector('.modal--login__forms');
		const form = document.querySelector(`.form-${formName}`);

		// Remove active form classes
		document.querySelectorAll('.modal--login__form').forEach((frm) => frm.classList.remove('modal--login__form--active'));

		const formHeight = getFormHeight(form);
		const formIndex = Array.prototype.indexOf.call(form.parentElement.children, form);

		forms.style.height = formHeight;
		forms.style.transform = `translateX(-${formIndex * 100}%)`;

		// Add active form class
		form.classList.add('modal--login__form--active');
	}

	function getFormHeight(form) {
		//Compute form height
		const formClone = form.cloneNode(true);
		formClone.style.opacity = 0;
		document.body.append(formClone);
		const formHeight = parseFloat(getComputedStyle(formClone).height) + 42 + 'px';
		formClone.remove();
		return formHeight;
	}

	let resizeTimeOut;
	function loginFormOnResize() {
		clearTimeout(resizeTimeOut);
		resizeTimeOut = setTimeout(() => {
			const activeForm = document.querySelector('.modal--login__form--active');
			if (activeForm) {
				const forms = document.querySelector('.modal--login__forms');
				forms.style.height = getFormHeight(activeForm);
			}
		});
	}
	window.addEventListener('resize', loginFormOnResize);
	window.addEventListener('orientationchange', loginFormOnResize);

	// Just for demonstrate restore password form
	// TODO: remove on real site
	var el = document.querySelector('.form-restore-email .modal--login__submit');
	el && el.addEventListener('click', (e) => {
		e.preventDefault();
		gotoForm('restore-password');
		return false;
	});

	var el2 = document.querySelector('.modal--login__submit');
	el2 && el2.addEventListener('click', (e) => {
		e.preventDefault();
		window.location.href = "profile.html";
	});
});