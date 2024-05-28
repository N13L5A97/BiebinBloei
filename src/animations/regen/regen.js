document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body'); // regen div pakken
    const regen = document.createElement('div')
    regen.classList.add('regen')
    const druppels = 100; // hoeveelheid drops die ik wil

    // voor elke drop in hoeveelheid druppels
    for (let i = 0; i < druppels; i++) {
        //maak een nieuw div element voor elke druppel
        const drop = document.createElement('div');
        // geef class aan elk div element
        drop.classList.add('druppel');

        // willekeurige positie, animatie duratie en de delay
        drop.style.left = `${Math.random() * 100}vw`;
        drop.style.animationDuration = `${Math.random() * 0.1 + 1}s`;
        drop.style.animationDelay = `${Math.random() * 1}s`;
        drop.style.opacity = `${Math.random() * 1}`;

        //voeg de regendruppel toe aan de regencontainer
        regen.appendChild(drop);
    }
    body.appendChild(regen)
});