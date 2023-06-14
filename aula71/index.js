function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave quando é true
        value: estoque, // valor, neste caso vindo do parametro
        writable: true, // pode alterar o valor se true, ou não se false
        configurable: false // configurável se true, não permite apagar nem reconfigurar a variavel se false

        // se writable false e configurable true, é possivel deletar, mas vice-versão não
    });
}

const produto1 = new Produto('Camiseta', 20, 3);
produto1.estoque = 500000;
delete produto1.estoque;
console.log(produto1);

// function Produto(nome, preco, estoque) {
//     this.nome = nome;
//     this.preco = preco;
//     this.estoque = estoque;

//     Object.defineProperty(this, 'estoque', {
//         enumerable: true, // mostra a chave quando é true
//         value: estoque, // valor, neste caso vindo do parametro
//         writable: true, // pode alterar o valor se true, ou não se false
//         configurable: true // configurável se true, não permite apagar nem reconfigurar a variavel se false
//     });
// }

// const produto1 = new Produto('Camiseta', 20, 3);
// produto1.estoque = 500000;
// delete produto1.estoque;
// console.log(produto1);