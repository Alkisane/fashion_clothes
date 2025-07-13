const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

// Добавляем обработчик событий для открытия/закрытия меню
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('menu-active');
});
