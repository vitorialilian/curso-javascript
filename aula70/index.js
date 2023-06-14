// const pessoa = {
//     nome: 'Luiz', 
//     sobrenome: 'Otávio'
// };

// // anotação de ponto
// console.log(pessoa.nome);
// console.log(pessoa.sobrenome);

// // anotação de colchete
// console.log(pessoa['nome']);
// console.log(pessoa['sobrenome']);

// const chave = 'nome';
// console.log(pessoa['nome']);
// console.log(pessoa[chave]);

// const pessoa1 = new Object();
// pessoa1.nome = 'Luiz';
// pessoa1.sobrenome = 'Otávio';

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);

// const pessoa2 = {
//     nome: 'Luiz',
//     sobrenome: 'Otávio'
// };

// console.log(pessoa1, pessoa2);

/*
const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otávio';  

delete pessoa1.nome;
console.log(pessoa1);
*/

/*
const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otávio';
pessoa1.idade = 30;
pessoa1.falarNome = function () {
  console.log(`${this.nome} está falando seu nome.`);  // this refere-se a pessoa 1
};
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade; // this refere-se aqui a pessoa1
};

console.log(pessoa1.getDataNascimento());

for (let chave in pessoa1) {
    console.log(pessoa1[chave]);
};
*/

/*
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio');
console.log(p1.nomeCompleto);
*/

// sem o get, o console.log(p1.nomeCompleto())

/* 
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    // return this; - não precisa colocar porque já sabe. // é criado atrelado a um objeto vazio{}, mas nesta função já colocamos {nome: 'Luiz', sobrenome: 'Miranda'}
    // Object.freeze(this); // aqui o freeze foi usado para travar qualquer pessoa que for criada depois
}

// {} <- this
const p1 = new Pessoa('Luiz', 'Miranda');
//Object.freeze(p1); // esse é usado para travar o valor do meu objeto, depois disso qualquer alteração não será mais válida.
p1.nome = 'Luiza'; 
p1.sobrenome = 'Silva';
p1.fala = function (params) {console.log('Oi');};
p1.fala() // com o freeze nenhuma dessas alterações seria feita

// Quando altera o valor do objeto não está alterando a referência, apena o valor em si, não da erro pois esta acessando um valor dentro dele. Se fosse tentando: p1 = 'Outra coisa'; - dessa forma daria erro pois estaria tentando trocar o valor da variavel, o que não é possível.

const p2 = new Pessoa('Maria', 'Miranda');
console.log(p1);
console.log(p2);
*/


function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);
}

const p1 = new Pessoa('Luiz', 'Miranda');
delete p1.nome; // nenhuma alteração sera feita por conta do freeze na function
const p2 = new Pessoa('Maria', 'Miranda');
console.log(p1);
console.log(p2);