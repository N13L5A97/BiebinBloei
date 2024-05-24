

document.addEventListener("DOMContentLoaded", function() {
    let value = 0
    if (value == 0) {
        value = value + 1
        const card = document.querySelector(".card-2");

        card.addEventListener("mouseover", function() {
            card.classList.add("hovering");
            card.addEventListener("animationend", function() {
                card.classList.add("persistent-shadow-1");
                card.classList.remove("hovering");
                card.classList.remove("animation");
            }, { once: true });
            
        });
}
});

document.addEventListener("DOMContentLoaded", function() {
    const card = document.querySelector(".card-3");

    card.addEventListener("mouseover", function() {
        card.classList.add("hovering");
        card.addEventListener("animationend", function() {
            card.classList.add("persistent-shadow-2");
            card.classList.remove("hovering");
            card.classList.remove("animation");
        }, { once: true });
    });
});