// Filter sempre vai retornar  um array, com a mesma quantidade de elementos ou menos

// Retorne os números maiores que 10
// indices       0  1   2   3  4  5  6  7  8  9   10  11  12
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// no clean code
/* 
function callbackFilter(valor, indice, array) {
    if (valor > 10) {
        return true;
    } else {
        return false;
    }
}
*/

// clean code, compacto
/*
function callbackFilter(valor) {
    return valor > 10;
}


const numerosFiltrados = numeros.filter(callbackFilter);
*/

// sera comum ver muitos usarem filter dessa forma, e com arrow function
// const numerosFiltrados = numeros.filter(valor => valor > 10);

// function callbackFilter(valor, indice, array) {
//     console.log(valor, indice, array);
//     return valor > 10;
// }

// const numerosFiltrados = numeros.filter(callbackFilter);

// Retorne os números maiores que 10
// indices       0  1   2   3  4  5  6  7  8  9   10  11  12
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const numerosFiltrados = numeros.filter(valor => valor >= 50);

// console.log(numerosFiltrados);


// Retorne as pessoas cujo nome termina com a 

const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Letícia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47},
];

// Retorne as pessoas que tem o nome com 7 letras ou mais
/*
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 7);

console.log(pessoasComNomeGrande);
*/

// Retorne as pessoas com mais de 50 anos 
const pessoasComMaisDeCinquentaAnos = pessoas.filter(obj => obj.idade > 50);

console.log(pessoasComMaisDeCinquentaAnos);

const pessoasNomeTerminaComA = pessoas.filter(function(obj) {
    return obj.nome.toLowerCase().endsWith('a')
});

console.log(pessoasNomeTerminaComA);

