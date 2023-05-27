// Atribuição via desestruturação (Arrays)

/*
let a = 'A';
let b = 'B';
let c = 'C';

const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c);
*/

// indice array  0  1  2  3  4  5  6  7  8
/* const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const primeiroNumero = numeros[0];

// para os outros numeros teriam que criar varios iguais

console.log(primeiroNumero); */

// Com desestruturação

// indice array  0  1  2  3  4  5  6  7  8
/* const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000]
const [um, dois, tres, ...resto] = numeros;

console.log(um, dois, tres);
console.log(...resto); */

// ...rest operator - quando quer o resto de algo, ... spread operator - quando quer espalhar

// indice array  0  1  2  3  4  5  6  7  8
/* const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000]
const [um, , tres, , cinco, , sete] = numeros;

console.log(um, tres, cinco, sete); */

//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
/* const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

console.log(numeros[1][2]); */

// exemplo 1 com desestruturação
//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
/* const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [,[,,seis]] = numeros;
console.log(seis); */

// exemplo 2 - com desestruturação menos complexa
//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [lista1, lista2, lista3] = numeros;
console.log(lista2[2]);



