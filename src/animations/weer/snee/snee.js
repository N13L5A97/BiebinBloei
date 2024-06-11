document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body'); // regen div pakken
    const sneeuw = document.createElement('div')
    sneeuw.classList.add('sneeuw')
    const sneeuwVlokken = 70; // hoeveelheid drops die ik wil

    if (isReduced != true) {
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
            sneeuw.appendChild(vlok);
        }
        body.appendChild(sneeuw)
    }
});