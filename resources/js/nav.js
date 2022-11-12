// toggle
const menuToggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
menuToggle.onclick = function () {
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}

document.querySelectorAll(".nav_links").forEach(n => n.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    navigation.classList.remove("active");

}))

const slides = document.querySelectorAll('.slides');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

i = 0;

function ActiveSlide(n) {
    for (slide of slides)
        slide.classList.remove('active');
    slides[n].classList.add('active');
}

// function for next btn
next.addEventListener('click', function () {
    if (i == slides.length - 1) {
        i = 0;
        ActiveSlide(i);
    } else {
        i++;
        ActiveSlide(i);
    }
});

// function for prev btn
prev.addEventListener('click', function () {
    if (i == 0) {
        i = slides.length - 1;
        ActiveSlide(i);
    } else {
        i--;
        ActiveSlide(i);
    }
});