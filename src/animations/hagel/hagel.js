document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body'); // regen div pakken
    const hagel = document.createElement('div')
    hagel.classList.add('hagel')
    const druppelsHagel = 40; // hoeveelheid drops die ik wil

    // voor elke drop in hoeveelheid druppels
    for (let i = 0; i < druppelsHagel; i++) {
        //maak een nieuw div element voor elke druppel
        const dropHagel = document.createElement('div');
        // geef class aan elk div element
        dropHagel.classList.add('druppelHagel');

        // willekeurige positie, animatie duratie en de delay
        dropHagel.style.left = `${Math.random() * 100}vw`;
        dropHagel.style.animationDuration = `${Math.random() * 0.1 + 1}s`;
        dropHagel.style.animationDelay = `${Math.random() * 1}s`;
        dropHagel.style.opacity = `${Math.random() * 1}`;

        //voeg de regendruppel toe aan de regencontainer
        hagel.appendChild(dropHagel);
    }
    body.appendChild(hagel)
});