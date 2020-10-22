// Daten
const treffer = [0, 0, 0, 0, 0, 0];

// 6000mal würfeln
for (let index = 0; index < 6000; index++) {
    const wuerfel = Math.floor(Math.random() * 6) + 1;
    treffer[wuerfel - 1] = treffer[wuerfel - 1] + 1;
}

// Ausgabe
for (let index = 0; index < 6; index++) {
    console.log(`${index + 1}er: ${treffer[index]}`);
}
