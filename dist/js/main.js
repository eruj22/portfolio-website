// Navigation
const menuBtn = document.getElementsById('toggle-btn');
const nav = document.getElementsById('nav');

let menuOpen = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        nav.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        nav.classList.remove('open');
        menuOpen = false;
    }
}