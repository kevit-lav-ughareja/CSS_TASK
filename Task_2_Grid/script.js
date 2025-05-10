const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.nav-links');
let menuOpen = false;

hamburger.addEventListener('click', () => {
    if (menuOpen == false) {
        navlinks.classList.add('active');
        menuOpen = true;
    }
    else if (menuOpen == true) {
        navlinks.classList.remove('active');
        menuOpen = false;
    }
});