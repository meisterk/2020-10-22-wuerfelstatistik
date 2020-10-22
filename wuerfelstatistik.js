// Daten
const anzahlWuerfe = 600000;
const treffer = [0, 0, 0, 0, 0, 0];

// 6000mal würfeln
for (let index = 0; index < anzahlWuerfe; index++) {
    const wuerfel = Math.floor(Math.random() * 6) + 1;
    treffer[wuerfel - 1] = treffer[wuerfel - 1] + 1;
}

// Ausgabe in Konsole
for (let index = 0; index < 6; index++) {
    console.log(`${index + 1}er: ${treffer[index]}`);
}

// Ausgabe im Browserfenster
// JavaScript-Variablen für HTML-Elemente
const einser = document.querySelector('#einser');
const zweier = document.querySelector('#zweier');
const dreier = document.querySelector('#dreier');
const vierer = document.querySelector('#vierer');
const fuenfer = document.querySelector('#fuenfer');
const sechser = document.querySelector('#sechser');

// Text zuweisen
einser.textContent = treffer[0];
zweier.textContent = treffer[1];
dreier.textContent = treffer[2];
vierer.textContent = treffer[3];
fuenfer.textContent = treffer[4];
sechser.textContent = treffer[5];
