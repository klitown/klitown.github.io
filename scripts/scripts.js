
let menu = document.querySelector("#menu"),
    toggleIcon = document.querySelector("#toggle-icon");

    toggleIcon.addEventListener("click", function() {
        menu.classList.toggle("menu-on");
    });