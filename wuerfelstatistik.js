// Daten
const treffer = [0, 0, 0, 0, 0, 0];

// 6000mal würfeln
for (let index = 0; index < 6000; index++) {
    const wuerfel = Math.floor(Math.random() * 6) + 1;
    switch (wuerfel) {
        case 1:
            treffer[0] = treffer[0] + 1;
            break;
        case 2:
            treffer[1] = treffer[1] + 1;
            break;
        case 3:
            treffer[2] = treffer[2] + 1;
            break;
        case 4:
            treffer[3] = treffer[3] + 1;
            break;
        case 5:
            treffer[4] = treffer[4] + 1;
            break;
        case 6:
            treffer[5] = treffer[5] + 1;
            break;
    }
}

// Ausgabe

