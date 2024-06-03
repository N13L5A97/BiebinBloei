document.addEventListener('DOMContentLoaded', () => {
    const regen = document.querySelector('.bloesem'); // regen div pakken
    const druppels = 70; // hoeveelheid drops die ik wil

    // voor elke drop in hoeveelheid druppels
    for (let i = 0; i < druppels; i++) {
        //maak een nieuw div element voor elke druppel
        const blaadje = document.createElement('div');
        // geef class aan elk div element
        blaadje.classList.add('blaadje');

        // willekeurige positie, animatie duratie en de delay
        blaadje.style.left = `${Math.random() * 100}vw`;
        blaadje.style.animationDuration = `${Math.random() *  10 + 3}s`;
        blaadje.style.animationDelay = `${Math.random() * 3}s`;
        blaadje.style.opacity = `${Math.random() * 1}`;

        //voeg de regendruppel toe aan de regencontainer
        regen.appendChild(blaadje);
    }
});