// Essa função recebe 2 números e retorne o maior deles

let a = 15;
let b = 1;

function max(a, b) {
    if (a > b) return a;
    return b;
}

let c = max(a,b);
const resultado = c;

// console.log(resultado);

// Essa função recebe dois números e retorna o maior deles

let d = 15;
let e = 25;

function min(d, e) {
    if (d < e) return d;
    return e;
}

let f = min(d, e);
const resultado2 = f;

// console.log(resultado2);

// Escreva uma função que recebe dois números e retorne se são iguais ou diferentes
const x = resultado;
const y = resultado2;

function same(x, y) {
    if (x === y) return 'Iguais';
    return 'Diferentes';
}

console.log(`${x} e ${y} são ${same(x, y)}`);