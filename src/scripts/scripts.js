const btnMenu = window.document.querySelector('.btn-menu');
const nav = window.document.querySelector('.navigation');

btnMenu.addEventListener('click', () => {
    nav.classList.toggle('navigation--active');
});