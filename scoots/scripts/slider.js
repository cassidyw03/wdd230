const slider = document.querySelector('.slider');
const prevBtn = document.getElementById('prevb');
const nextBtn = document.getElementById('nextb');

let index = 0;
const totalSlides = document.querySelectorAll('.slide').length;

nextBtn.addEventListener('click', () => {
    index = (index + 1) % totalSlides;
    updateSlider();
});

prevBtn.addEventListener('click', () => {
    index = (index - 1 + totalSlides) % totalSlides;
    updateSlider();
});

function updateSlider() {
    slider.style.transform = `translateX(-${index * 100}%)`;
    // slider.style.transform = `translate3d(-${index * 100}%, 0, 0)`;

}


