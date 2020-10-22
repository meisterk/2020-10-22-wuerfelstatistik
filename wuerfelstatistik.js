// Daten
const treffer = [0, 0, 0, 0, 0, 0];

// 6000mal würfeln
for (let index = 0; index < 6000; index++) {
    const wuerfel = Math.floor(Math.random() * 6) + 1;
    treffer[wuerfel - 1] = treffer[wuerfel - 1] + 1;
}

// Ausgabe
console.log('1er: ' + treffer[0]);
console.log('2er: ' + treffer[1]);
console.log('3er: ' + treffer[2]);
console.log('4er: ' + treffer[3]);
console.log('5er: ' + treffer[4]);
console.log('6er: ' + treffer[5]);
