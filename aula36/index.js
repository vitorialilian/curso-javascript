//                   0        1      2
// const frutas = ['Pêra', 'Maçã', 'Uva'];

// for (let indice in frutas) {
//     console.log(frutas[indice]);
// };

// for (let i = 0; i < frutas.length; i++) {
// console.log(frutas[i]);
// };

/* const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};

const chave = 'nome';
    //console.log(pessoa.nome);
console.log(pessoa[chave]); */

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};

for (let i in pessoa) {
    console.log(i, pessoa[i]);
}