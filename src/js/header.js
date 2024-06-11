// Show/hide header on scroll
const isReduced = window.matchMedia(`(prefers-reduced-motion: reduce)`) === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;
let prevScrollPos = window.scrollY;
const minWidth = 768;

function handleScroll() {
    let currentScrollPos = window.scrollY;
    if (window.innerWidth >= minWidth) {
        if (prevScrollPos < currentScrollPos) {
            document.querySelector("header").style.top = "-6rem";
        } else {
            document.querySelector("header").style.top = "0";
        }
    }
    prevScrollPos = currentScrollPos;
}

if (isReduced === false) {
    window.onscroll = handleScroll;
    window.onresize = handleScroll;
}

// Open/close hamburgermenu
document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector("header nav button");
    menuButton.addEventListener("click", menuOpenen);

    function menuOpenen() {
        const deHeader = document.querySelector("header");
        deHeader.classList.toggle("menuOpen");
    }

});