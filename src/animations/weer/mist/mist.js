document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body'); // regen div pakken
    const mist = document.createElement('div')
    mist.classList.add('mist')
    const mistDampen = 20;


    for (let i = 0; i < mistDampen; i++) {
        //maak een nieuw div element voor elke mistwolk
        const dampje = document.createElement('div');
        // geef class aan elk div element
        dampje.classList.add('dampje');

        if (isReduced != true) {
            // laat verschillende wolken verschillende kanten op gaan
            if (i % 2 !== 0) {
                dampje.style.animation = 'left linear infinite, verschijnen linear infinite';
            }
            else {
                dampje.style.animation = 'right linear infinite, verschijnen linear infinite';
            }
        } else if (isReduced == true) {
            if (i % 2 !== 0) {
                dampje.style.animation = 'left linear infinite paused, verschijnen linear infinite paused';
            }
            else {
                dampje.style.animation = 'right linear infinite paused, verschijnen linear infinite paused';
            }
        }
        
        // willekeurige positie, animatie duratie, delay en opacity
        dampje.style.left = `${Math.random() * 100}vw`;
        dampje.style.animationDuration = `${Math.random() *  6 + 25}s`;
        dampje.style.animationDelay = `${Math.random() * -10}s`;
        // if (isReduced != true) {
        //     dampje.style.animationDelay = `${Math.random() * -10}s`;
        // } else if (isReduced == true) {
        //     dampje.style.animationDelay = `${Math.random() * 10}s`;
        // }
        dampje.style.height = `${Math.random() * 10 + 10}em`;
        dampje.style.bottom = `${Math.random() * 20}%`

        //voeg de mistwolk toe aan de mistcontainer
        mist.appendChild(dampje);
    }
    body.appendChild(mist)
});