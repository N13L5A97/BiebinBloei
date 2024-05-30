document.addEventListener('DOMContentLoaded', () => {
    const regen = document.querySelector('.sneeuw'); // regen div pakken
    const sneeuwVlokken = 70; // hoeveelheid drops die ik wil

    // voor elke drop in hoeveelheid druppels
    for (let i = 0; i < sneeuwVlokken; i++) {
        //maak een nieuw div element voor elke druppel
        const vlok = document.createElement('div');
        // geef class aan elk div element
        vlok.classList.add('vlok');

        // willekeurige positie, animatie duratie en de delay
        vlok.style.left = `${Math.random() * 100}vw`;
        vlok.style.animationDuration = `${Math.random() *  5 + 2}s`;
        vlok.style.animationDelay = `${Math.random() * 3}s`;
        vlok.style.opacity = `${Math.random() * 1}`;

        //voeg de regendruppel toe aan de regencontainer
        regen.appendChild(vlok);
    }
});