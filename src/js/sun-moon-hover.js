const sunStatus = window.sunStatus;
// const sunStatus = 1;

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
	console.log(sunStatus);

	if (sunStatus === 0 || sunStatus === "0") {
		card.style.setProperty("--box-shadow-color", "var(--sun-color)");
	} else if (sunStatus === 1 || sunStatus === "1") {
		card.style.setProperty("--box-shadow-color", "var(--moon-color)");
	}

	// set property of --position-x to mouse position x over the image container
	// from -5rem to 5rem

	const cardImageContainer = card.querySelector(".card-image-container");

	cardImageContainer.addEventListener("mousemove", (e) => {
		const x = e.clientX - cardImageContainer.getBoundingClientRect().left;
		const y = e.clientY - cardImageContainer.getBoundingClientRect().top;

		const xPercentage = (x / cardImageContainer.offsetWidth) * -10;
		const yPercentage = (y / cardImageContainer.offsetHeight) * 10;

		console.log(yPercentage);

		cardImageContainer.style.setProperty(
			"--position-x",
			`${xPercentage + 5}rem`
		);
		cardImageContainer.style.setProperty(
			"--position-y",
			`${yPercentage + 2.5}rem`
		);
	});
});
