const nextButton = document.querySelector('.swiper-button-next');
const prevButton = document.querySelector('.swiper-button-prev');
let currentIndex = 0;
const slides = document.querySelectorAll('.my-swiper-slide');

hideAllSlides();
showCurrentSlide();

nextButton.addEventListener('click', function () {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showCurrentSlide();
});

prevButton.addEventListener('click', function () {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  showCurrentSlide();

});


function showCurrentSlide() {
  hideAllSlides();
  slides[currentIndex].style.display = 'grid';
}

function hideAllSlides() {
  slides.forEach(slide => {
    slide.style.display = 'none';
  });
}