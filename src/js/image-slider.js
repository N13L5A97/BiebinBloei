document.addEventListener('DOMContentLoaded', function () {
  const slider = document.getElementById('imageSlider');
  const slides = Array.from(slider.querySelectorAll('.slide'));
  const totalSlides = slides.length;
  const slideWidth = slides[0].clientWidth;
  let currentSlide = 0;
  let direction = 1; // 1 for forward, -1 for backward

  function showSlide(index) {
    const offset = -index * slideWidth;
    slider.style.transition = 'transform 1s ease-in-out';
    slider.style.transform = `translateX(${offset}px)`;
  }

  function nextSlide() {
    currentSlide += direction;
    if (currentSlide >= totalSlides) {
      direction = -1;
      currentSlide = totalSlides - 1;
    } else if (currentSlide < 0) {
      direction = 1;
      currentSlide = 0;
    }
    showSlide(currentSlide);
  }

  setInterval(nextSlide, 3000);
  showSlide(currentSlide);
});
