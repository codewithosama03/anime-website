
// navbar

function showsidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.transform = 'translateX(0)';
}

function hidesidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.transform = 'translateX(100%)';
}


// hero slides
const slides = document.querySelectorAll(".hero-slide");
let index = 0;

setInterval(() => {
    slides[index].classList.remove("active");

    index++;
    if (index >= slides.length) {
        index = 0;
    }

    slides[index].classList.add("active");

}, 4000);
