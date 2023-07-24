//tabs menu
const tabs = document.querySelectorAll('.tab-item');
const tabContents = document.querySelectorAll('.tab-content');

function changeTab(tabIndex) {
	 // Удаление класса "current" у всех вкладок
	 tabs.forEach(tab => tab.classList.remove('current'));

	 // Добавление класса "current" для выбранной вкладки
	 tabs[tabIndex].classList.add('current');

	 // Скрытие всех содержимых вкладок
	 tabContents.forEach(content => content.style.display = 'none');

	 // Отображение содержимого выбранной вкладки
	 tabContents[tabIndex].style.display = 'block';
}

tabs.forEach((tab, index) => {
	 tab.addEventListener('click', () => {
		  changeTab(index);
	 });
});