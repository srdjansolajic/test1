// Prvi zadatak

let kolicina = 9;
let cenaPoKomadu = 180;
let godine = 21;
let racun = kolicina * cenaPoKomadu;

if (godine > 18 && kolicina > 0 && cenaPoKomadu > 0) {
    if (godine % 11 === 0) {
        console.log(`Musterija mora da plati ${racun - (racun * 0.25 )}`);
    } else if (godine % 7 === 0) {
        console.log(`Muesterija mora da plati ${racun - (racun * 0.15)}`);
    }
} else {
    console.log('Musterija ima manje od 18 godina');
}