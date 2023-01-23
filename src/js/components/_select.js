document.addEventListener('DOMContentLoaded', function () {
	const selects = document.querySelectorAll('.select');
	if (selects) {
		selects.forEach((select) => {
			// Open option list
			select.querySelector('.select__current').addEventListener('click', () => {
				if(!select.classList.contains('select--disabled')) {
					select.classList.add('select--opened');
				}
			})

			// Set selected value
			select.querySelectorAll('.select__option').forEach((option) => {
				option.addEventListener('click', () => {
					select.querySelector('.select__current').innerHTML = option.innerHTML;
					select.querySelector('.select__value').value = option.dataset.value;
					closeSelects();
				})
			})
		})

		document.addEventListener('click', (e) => {			
			if (!e.target.classList.contains('select__current') && !getParentByClassName(e.target, 'select__current')) {
				closeSelects();
			}
		})

		function closeSelects() {
			selects.forEach((select) => {
				select.classList.remove('select--opened');
			})
		}
	}
})