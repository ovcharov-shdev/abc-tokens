
document.addEventListener('DOMContentLoaded', function () {
	const searchInput = document.querySelector('.search-form__input');
	if (searchInput) {
		const propertyCardList = document.querySelectorAll('.property-card');
		const propertyCardTitleList = [];
		propertyCardList.forEach((card) => {
			propertyCardTitleList.push(card.querySelector('.property-card__title').innerHTML);
		})

		searchInput.addEventListener('input', () => {
			findInTitleList(searchInput.value)
		})

		function findInTitleList(str) {
			const searchStr = str.trim();
			propertyCardTitleList.forEach((title, index) => {
				if (searchStr.length > 0) {
					const result = title.toLowerCase().indexOf(searchStr.toLowerCase());
					if (result > -1) {
						propertyCardList[index].parentNode.style.display = 'block';
						const highlightedTitle = [title.slice(0, result), '<span class="property-card__title--selected">', title.slice(result, result + searchStr.length), '</span>', title.slice(result + searchStr.length)].join('');
						propertyCardList[index].querySelector('.property-card__title').innerHTML = highlightedTitle;
					}
					else {
						propertyCardList[index].parentNode.style.display = 'none';
						propertyCardList[index].querySelector('.property-card__title').innerHTML = title;
					}
				}
				else {
					propertyCardList[index].parentNode.style.display = 'block';
					propertyCardList[index].querySelector('.property-card__title').innerHTML = title;
				}
			})
		}
	}
})
