// Dobre os números
// indices       0  1   2   3  4  5  6  7  8  9   10  11  12
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const numerosEmDobro = numeros.map(valor => valor * 2);

// console.log(numerosEmDobro);


// Para cada Elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Letícia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47},
];

// Retorne apenas uma string com o nome da pessoa
// const nomes = pessoas.map(obj => obj.nome);
// console.log(nomes);

// Remova apenas a chave "nome" do objeto
// modo 1
// const idades = pessoas.map(obj => {
//     delete obj.nome;
//     return obj;
// });

// modo 2
// const idades = pessoas.map(obj => ({ idade: obj.idade })); // neste caso os parenteses foram necessarios para evitar bugar o vs code, onde as chaves do novo objeto se tornariam as chaves da função sem os parenteses
// console.log(idades);

// Adicione uma chave id em cada objeto

const comIds = pessoas.map(function (obj, indice) {
    const newObj = { ...obj }
    newObj.id = (indice + 1) * 1000;
    return newObj; 
});

console.log(pessoas);
console.log(comIds);