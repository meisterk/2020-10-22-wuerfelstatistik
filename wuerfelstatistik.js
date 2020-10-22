// 1. JavaScript-Variablen für HTML-Elemente
const einser = document.querySelector('#einser');
const zweier = document.querySelector('#zweier');
const dreier = document.querySelector('#dreier');
const vierer = document.querySelector('#vierer');
const fuenfer = document.querySelector('#fuenfer');
const sechser = document.querySelector('#sechser');
const buttonWuerfeln = document.querySelector('#button-wuerfeln');

// 2. Daten (globale Variablen)
const anzahlWuerfe = 600000;
let treffer = [0, 0, 0, 0, 0, 0];

// 3. Start
wuerfeln(anzahlWuerfe);
ausgabe();

// 4. Event-Handler für Button
buttonWuerfeln.addEventListener('click', function () {
    wuerfeln(anzahlWuerfe);
    ausgabe();
});

// 5. Funktionen
function wuerfeln(anzahl) {
    treffer = [0, 0, 0, 0, 0, 0];
    for (let index = 0; index < anzahl; index++) {
        const wuerfel = Math.floor(Math.random() * 6) + 1;
        treffer[wuerfel - 1] = treffer[wuerfel - 1] + 1;
    }
}

function ausgabe() {
    einser.textContent = treffer[0];
    zweier.textContent = treffer[1];
    dreier.textContent = treffer[2];
    vierer.textContent = treffer[3];
    fuenfer.textContent = treffer[4];
    sechser.textContent = treffer[5];
}
