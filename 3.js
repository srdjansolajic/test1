// Treci zadatak
let k = 3;
let n = 35;
let zbir = 0;
let proizvod = 1;

if (k > n) {
    let tmp = k;
    k = n;
    n = tmp;
}

for (let i = k; i <= n; i++) {
    if (i % 3 === 0) {
        zbir += i;
    } else if (i % 3 !== 0 && i % 7 === 0) {
        proizvod *= i;
    }
}
console.log(`Zbir: ${zbir}
Proizvod: ${proizvod}`);