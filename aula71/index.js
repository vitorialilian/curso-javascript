// function Produto(nome, preco, estoque) {
//     this.nome = nome;
//     this.preco = preco;
//     this.estoque = estoque;

//     Object.defineProperty(this, 'estoque', {
//         enumerable: true, // mostra a chave quando é true
//         value: estoque, // valor, neste caso vindo do parametro
//         writable: true, // pode alterar o valor se true, ou não se false
//         configurable: false // configurável se true, não permite apagar nem reconfigurar a variavel se false

//         // se writable false e configurable true, é possivel deletar, mas vice-versão não
//     });
// }

// const produto1 = new Produto('Camiseta', 20, 3);
// produto1.estoque = 500000;
// delete produto1.estoque;
// console.log(produto1);

// function Produto(nome, preco, estoque) {
//     this.nome = nome;
//     this.preco = preco;
//     this.estoque = estoque;

//     Object.defineProperty(this, 'estoque', {
//         enumerable: true, // mostra a chave
//         value: function () {
//             return estoque
//         },   // valor
//         writable: false,  // se pode ou não alterar o valor
//         configurable: true // se é ou não configurável
//     });
// }

// const produto1 = new Produto('Camiseta', 20, 3);
// produto1.estoque = 500000;
// //delete produto1.estoque;
// console.log(produto1.estoque());


// function Produto(nome, preco, estoque) {
//     this.nome = nome;
//     this.preco = preco;

//     Object.defineProperty(this, 'estoque', {
//         enumerable: false, // true mostraria 
//         value: estoque,
//         writable: false,  
//         configurable: true 
//     });
// }

// const produto1 = new Produto('Camiseta', 20, 3);
// console.log(Object.keys(produto1));

// for (let chave in produto1) {
//     console.log(chave);
// }

function Produto(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,
        writable: false,
        configurable: true
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        },
    });
}

const produto1 = new Produto('Camiseta', 20, 3);
console.log(produto1);

for (let chave in produto1) {
    console.log(chave);
}