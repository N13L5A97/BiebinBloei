document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body'); // regen div pakken
  const herfst = document.createElement('div')
  herfst.classList.add('herfst')
    const herfstBladeren = 70;

      for (let i = 0; i < herfstBladeren; i++) {
        //maak een nieuw div element voor elk blaadje
        const blaadje = document.createElement('div');
        // maak een duration variabele aan zodat ik een if statement kan maken op basis van de duration
        const duration = Math.floor(Math.random() * 15 + 3);
        // maak een randomDegree variabele aan om dit toe te kunnen voegen aan een property
        const randomDegree = Math.floor(Math.random() * 361);
        
        blaadje.classList.add('herfstBlad');

        // willekeurige positie, animatie duratie en de delay
        blaadje.style.left = `${Math.random() * 100}vw`;
        blaadje.style.animationDuration = `${duration}s`;
        if (isReduced != true) {
          blaadje.style.animationDelay = `${Math.random() * 3}s`;
        } else if (isReduced == true) {
          blaadje.style.animationDelay = `${Math.random() * -3}s`;
        }
        blaadje.style.opacity = `${Math.random() * 1}`;

        // zet de --randomRotation property in de css
        blaadje.style.setProperty('--randomRotation', `rotate(${randomDegree}deg)`);

        // if statement zodat snellere blaadjes een andere animatie krijgen dan langzame blaajdes
        if (duration < 7) {
            blaadje.style.animationName = 'dwarrelRecht';
          } else {
            blaadje.style.animationName = 'dwarrelen';
          }

          herfst.appendChild(blaadje)
        
        //voeg de regendruppel toe aan de regencontainer
        body.appendChild(herfst);
    }
});