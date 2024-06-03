document.addEventListener("DOMContentLoaded", function () {
	const slider = document.getElementById("imageSlider");
	const slides = Array.from(document.querySelectorAll(".slide"));
	const totalSlides = slides.length;
	let currentSlide = 0;
	let translateX = 0;

	setInterval(() => {
		console.log("current slide:", currentSlide);
		// every 3 seconds go to next slide
		currentSlide++;

		// if the current slide is greater than the total slides, go back to the first slide
		if (currentSlide === totalSlides) {
			currentSlide = 0;
			let translateX = 0;
			slider.style.setProperty("transition-duration", "0s");
			slider.style.setProperty("--translateX", translateX);

			// if the current slide is greater than 1, move to the next slide
		} else if (currentSlide >= 0) {
			let translateX = (100 / totalSlides) * currentSlide;
			slider.style.setProperty("transition-duration", "1s");
			slider.style.setProperty("--translateX", translateX);
		}
	}, 3000);
});
