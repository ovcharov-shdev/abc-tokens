document.addEventListener('DOMContentLoaded', function () {
	// TODO: remove on real site
	document.querySelector('.js-logout').addEventListener('click', (e) => {
		e.preventDefault();
		window.location.href = "index.html";
	});
});