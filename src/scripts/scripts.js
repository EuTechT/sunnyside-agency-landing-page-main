const btnMenu = window.document.querySelector('.btn-menu');
const nav = window.document.querySelector('.navigation');
const header1 = window.document.querySelector('.header-1');

btnMenu.addEventListener('click', () => {
    nav.classList.toggle('navigation--active');
    header1.classList.toggle('header-1--active');
});

window.onresize = closeMenuMobile;

function closeMenuMobile() {
    if(window.innerWidth > 1024) {
        nav.classList.remove('navigation--active');
        header1.classList.remove('header-1--active');
    }
}