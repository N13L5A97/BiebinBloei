document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("imageSlider");
  const slides = Array.from(document.querySelectorAll(".slide"));
  const totalSlides = slides.length;
  let currentSlide = 0;
  let translateX = 0;
  let value = 3000
 
  setInterval(() => {
    console.log("current slide:", currentSlide);
    // after 3 seconds go to next slide
    currentSlide++;
 
    // if the current slide is equal to the total slides, go back to the first slide
    if (currentSlide === totalSlides) {
      value = 0
      currentSlide = 0;
      let translateX = 0;
      slider.style.setProperty("transition-duration", "0s");
      slider.style.setProperty("--translateX", translateX);
 
      // if the current slide is greater or equal to 0, move to the next slide
    } else if (currentSlide === totalSlides - 1) {
      value = 0
      let translateX = (100 / totalSlides) * currentSlide;
      slider.style.setProperty("transition-duration", "1s");
      slider.style.setProperty("--translateX", translateX);
    } else if (currentSlide < totalSlides) {
      value = 3000
      let translateX = (100 / totalSlides) * currentSlide;
      slider.style.setProperty("transition-duration", "1s");
      slider.style.setProperty("--translateX", translateX);
    } 
  }, value);
});