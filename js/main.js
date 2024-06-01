// const navBtn = document.querySelector('.nav-icon-btn');
// const navIcon = document.querySelector('.nav-icon');
// const nav = document.querySelector('.header_top-row');

// navBtn.onclick = function () {
//     navIcon.classList.toggle('nav-icon--active');
//     nav.classList.toggle('header_top-row--mobile');
//     document.body.classList.toggle('no-scroll');
// }

const carousel = document.getElementById('carousel');
const scrollAmount = 200;

document.getElementById('scroll-left').addEventListener('click', () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

document.getElementById('scroll-right').addEventListener('click', () => {
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

// Меню
document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.getElementById('burger-menu');
    const navList = document.getElementById('nav-list');

    burgerMenu.addEventListener('click', function () {
        navList.classList.toggle('active');
        burgerMenu.classList.toggle('active');
    });
});

// дата в инпутах
document.addEventListener("DOMContentLoaded", function() {
    const dateInputs = document.querySelectorAll(".date-input");
    
    dateInputs.forEach(input => {
        input.addEventListener("focus", function() {
            this.type = "date";
        });
        
        input.addEventListener("blur", function() {
            if (this.value === "") {
                this.type = "text";
            }
        });
    });
});