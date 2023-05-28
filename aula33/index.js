/* const pessoa = {
    nome:'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Avenida Brasil',
        numero: 320
    }
};

console.log(pessoa.nome); */ 

/* const nome = pessoa.nome;
console.log(nome); */

/* 
const pessoa = {
    nome:'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Avenida Brasil',
        numero: 320
    }
};

// Atribuição via desestruturação
const { nome = '', sobrenome, idade } = pessoa; // pode colocar como valor uma string vazia ou um texto, como valor padrão
console.log(nome, sobrenome); */

/*
const pessoa = {
    nome:'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Avenida Brasil',
        numero: 320
    }
};

const { nome: n = '', sobrenome, idade } = pessoa;
console.log(n); 
*/

const pessoa = {
    nome:'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Avenida Brasil',
        numero: 320
    }
};

/* const { endereco: { rua, numero }, endereco } = pessoa;
console.log(rua, numero, endereco); */

/* const { endereco: { rua: r = 12345, numero }, endereco } = pessoa; // diz que o valor agora é atribuido a r, e se não existir exibi o padrao
console.log(r, numero, endereco); */

const { nome, sobrenome, ...resto } = pessoa;
console.log(nome, sobrenome, resto);