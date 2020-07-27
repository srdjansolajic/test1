// Drugi zadatak
let n = 5;
let sredina = ' ' + '#'.repeat(n - 1) + ' ' + '#'.repeat(n - 1);

for (let i = 0; i < (n - 1); i++) {
    console.log(' '.repeat(n - i) + '#' + '#'.repeat(i + i));
}

console.log(sredina);

for (let i = 2; i <= n; i++) {
    console.log(' '.repeat(i) + '#' + '#'.repeat((n - i) * 2));
}