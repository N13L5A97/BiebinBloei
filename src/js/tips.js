const uitleg = 'Ik ben Harry jouw stekjesspecialist. Ik geef je graag wat tips over het stekken en onderhouden van planten! Mijn tips zijn gebaseerd op het weer buiten. <br><br>Hieronder lees je nog wat extra informatie over de plant.';
const harry = document.getElementById('cartoon');
const span = document.querySelector('span');

let oudeTekst = span.innerHTML; // De oorspronkelijke tekst buiten de event listener opslaan
let timeoutId; // Variabele om de timeout ID op te slaan

harry.addEventListener('click', () => {
    // Eventuele bestaande timeout wissen om ervoor te zorgen dat er maar één actief is
    if (timeoutId) {
        clearTimeout(timeoutId);
    }

    // De tekst in de span vervangen door de nieuwe waarde
    span.innerHTML = `<p>${uitleg}</p>`;

    // Een timeout instellen om de tekst na 15 seconden terug te veranderen
    timeoutId = setTimeout(() => {
        span.innerHTML = oudeTekst;
    }, 15000); // 15 seconden
});
