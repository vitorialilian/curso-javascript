// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)

/*
// Minha solução
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosPares = numeros.filter(valor => valor % 2 === 0);
const numerosDobrados = numerosPares.map(valor => valor * 2);
const numerosParesSoma = numerosDobrados.reduce((acumulador, valor) => (acumulador += valor), 0);

console.log(numerosPares); // [ 50, 80, 2, 8, 22 ]
console.log(numerosDobrados); // [ 100, 160, 4, 16, 44 ]
console.log(numerosParesSoma); // 324
*/

// Solução do professor
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((acumulador, valor) => acumulador + valor); 
// [ 50, 80, 2, 8, 22 ] pares
// [ 100, 160, 4, 16, 44 ] dobro
// 324 
console.log(numerosPares);