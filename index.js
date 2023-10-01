const menu = document.querySelector(".menu");
const showNavbar = document.querySelector(".header-wrapper nav ul");

menu.addEventListener("click", () => {

    menu.classList.toggle('active');
    showNavbar.classList.toggle('navshow');

})