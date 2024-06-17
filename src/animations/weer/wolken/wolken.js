document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body'); // regen div pakken
    const bewolkt = document.createElement('div')
    bewolkt.classList.add('bewolkt')
    const wolken = 40;

    for (let i = 0; i < wolken; i++) {
        //maak een nieuw div element voor elke mistwolk
        const wolk = document.createElement('div');
        // geef class aan elk div element
        wolk.classList.add('wolk');

        if (isReduced != true) {
            // laat verschillende wolken verschillende kanten op gaan
            if (i % 2 !== 0) {
                wolk.style.animation = 'left linear infinite, verschijnen linear infinite';
            }
            else {
                wolk.style.animation = 'right linear infinite, verschijnen linear infinite';
            }
        } else if (isReduced == true) {
            if (i % 2 !== 0) {
                wolk.style.animation = 'left linear infinite paused, verschijnen linear infinite paused';
            }
            else {
                wolk.style.animation = 'right linear infinite paused, verschijnen linear infinite paused';
            }
        }
        
        // willekeurige positie, animatie duratie, delay en opacity
        wolk.style.left = `${Math.random() * 100}vw`;
        wolk.style.animationDuration = `${Math.random() *  6 + 25}s`;
        wolk.style.animationDelay = `${Math.random() * -10}s`;
        wolk.style.height = `${Math.random() * 10 + 5}em`;

        //voeg de mistwolk toe aan de mistcontainer
        bewolkt.appendChild(wolk);
    }
    body.appendChild(bewolkt)
});