// indice        0  1   2   3  4  5  6  7  8  9   10  11  12  
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];


// Some todos os números (reduce)
// const total = numeros.reduce(function(acumulador, valor) {
    //     acumulador += valor;
//     return acumulador;
// }, 0);

// console.log(total);


// Retorno um array com os pares (filter)
// const total = numeros.reduce(function(acumulador, valor) {
//     if(valor % 2 === 0) acumulador.push(valor);
//     return acumulador;
// }, []);

// console.log(total);

// const totalImpares = numeros.reduce(function(acumulador, valor) {
//     if(valor % 2 !== 0) acumulador.push(valor);
//     return acumulador;
// }, []);

// console.log(totalImpares);

// const totalMultiplosDeOito = numeros.reduce(function(acumulador, valor) {
//     if(valor % 8 === 0) acumulador.push(valor);
//     return acumulador;
// }, []);

// console.log(totalMultiplosDeOito);


// Retorne um array com o dobro dos valores (map) 

// const total = numeros.reduce(function(acumulador, valor, indice, array) {
//     acumulador.push(valor * 2);
//     return acumulador;
// }, []);

// console.log(total);

// reduce total
// const total = numeros.reduce(function(acumulador, valor, indice, array) {
//     acumulador += valor;
//     return acumulador;
// });

// console.log(total);

// reduce apenas numeros pares
// const total = numeros.reduce(function(acumulador, valor, indice, array) {
//    if (valor % 2 === 0) acumulador += valor;
//     return acumulador;
// });

// console.log(total);

// const total = numeros.reduce(function(acumulador, valor, indice, array) {
//     if (valor % 2 === 0) {
//         acumulador += valor;
//     }
//     return acumulador;
//  }, 0); // neste caso não pode esquecer o valor inicial 0, pois pode dar erro pois o indice 0 vai ser somado também independentemente de ser par ou não, neste exemplo não é par, então acaba dando um total errado.
 
//  console.log(total);

// Retorne a pessoa mais velha
const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Letícia', idade: 10},
    { nome: 'Rosana', idade: 64},
    { nome: 'Wallace', idade: 63},
];

const maisVelha = pessoas.reduce(function (acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    console.log(acumulador);
    return valor;
});

console.log(maisVelha);

