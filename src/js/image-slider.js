document.addEventListener("DOMContentLoaded", function () {
	const slider = document.getElementById("imageSlider");
	const slides = slider.querySelectorAll(".slide");
	const totalSlides = slides.length;
	let currentSlide = 0;
	let translateX = 0;

	setInterval(() => {
		console.log("current slide:", currentSlide);
		//go to next slide
		currentSlide++;

		// if the current slide is equal to the total slides, go back to the first slide
		if (currentSlide === totalSlides) {
			slider.style.setProperty("transition-duration", "0s");
			translateX = 0;
			currentSlide = 0;

			setTimeout(() => {
				slider.style.setProperty("--translateX", translateX);

				setTimeout(() => {
					currentSlide++;
					translateX = (100 / totalSlides) * currentSlide;
					slider.style.setProperty("transition-duration", "1s");
					slider.style.setProperty("--translateX", translateX);
				}, 10);
			}, 10);

			// if the current slide is greater or equal to 0, move to the next slide
		} else if (currentSlide < totalSlides) {
			let translateX = (100 / totalSlides) * currentSlide;
			slider.style.setProperty("transition-duration", "1s");
			slider.style.setProperty("--translateX", translateX);
		}
		//after how many seconds the slide should change 
	}, 4500);
});
