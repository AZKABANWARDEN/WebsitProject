//Mobile nav control
const menu = document.querySelector(".menu-toggle");
const menuLinks = document.querySelector(".nav-menu");

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})