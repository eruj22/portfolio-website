// Navigation
const menuBtn = document.getElementById('toggle-btn');
const nav = document.getElementById('nav');

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

// scroll magic for projects page
// function splitScroll() {
//     // handles all the scroll on our page
//     const controller = new scrollMagic.Controller();

//     new ScrollMagic.Scene({
//         duration: 500,
//         triggerElement: '.projects__title',
//         triggerHook: 0
//     })
//     .setPin('.projects__title')
//     .addTo(controller);
// }

// splitScroll();