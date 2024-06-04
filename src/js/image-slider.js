document.addEventListener("DOMContentLoaded", function () {
	const slider = document.getElementById("imageSlider");
	const slides = Array.from(document.querySelectorAll(".slide"));
	const totalSlides = slides.length;
	let currentSlide = 0;
	let translateX = 0;

	setInterval(() => {
		console.log("current slide:", currentSlide);
		// after 3 seconds go to next slide
		currentSlide++;

		// if the current slide is equal to the total slides, go back to the first slide
		if (currentSlide === totalSlides) {
			slider.style.setProperty("transition-duration", "0s");
			currentSlide = 0;
			let translateX = 0;
			slider.style.setProperty("--translateX", translateX);

      setTimeout(() => {
        currentSlide++;
        slider.style.setProperty("transition-duration", "1s");
        slider.style.setProperty("--translateX", -100);
      }, 10);


			// if the current slide is greater or equal to 0, move to the next slide
		} else if (currentSlide < totalSlides) {
			let translateX = (100 / totalSlides) * currentSlide;
			slider.style.setProperty("transition-duration", "1s");
			slider.style.setProperty("--translateX", translateX);
		}
	}, 3000);
});
