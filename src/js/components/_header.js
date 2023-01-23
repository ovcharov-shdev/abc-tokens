function headerWatcher() {
	const header = document.querySelector('.header');

	if (header.classList.contains('header--transparent')) {
		const headerPosition = window.pageYOffset/550;
		// Add shadow
		if(headerPosition > 0.1) {
			header.classList.add('header--transparent-shadow');
		}
		else {
			header.classList.remove('header--transparent-shadow');
		}
		// Calc bg opacity
		const headerBgOpacity = (headerPosition > 1) ? 1 : headerPosition;
		header.style.background = `hsla(0, 0%, 100%, ${headerBgOpacity})`;

		requestAnimationFrame(headerWatcher)
	}
}
headerWatcher();