// Cetvrti zadatak
{
    let cifra = 5;
    let count = '';
    let prviRed = '';

    for (let i = 1; i <= 9; i++) {
        prviRed += (i + ' '.repeat(2));
        count += (i * cifra + ' ');
    }
    console.log(prviRed);
    console.log(count);
}



