'use strict';

const menu = document.querySelector('.menu-icon');
const menuHidden = document.querySelector('.menu__hidden');
const filter = document.querySelector('.filter-for-search');

// Открыть/закрыть меню по клику на икноку меню
menu.addEventListener('click', () => {
    menuHidden.classList.toggle('visible');
});

// Закрыть меню по клику на крестика
menuHidden.querySelector('.menu__close img').addEventListener('click', () => {
    menuHidden.classList.toggle('visible');
});

// Открыть/закрыть фильтр по клику на икноку фильтра
menu.addEventListener('click', () => {
    menuHidden.classList.toggle('visible');
});






