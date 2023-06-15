// // Manipulando Prototypes
// // new Object -> Object.prototype
// const objA = {
//     chaveA: 'A'
//     // ___proto___: Object.prototype
// };

// const objB = {
//     chaveB: 'B'
//     // ___proto___: objA
// };

// const objC = new Object();
// objC.chaveC = 'C';

// Object.setPrototypeOf(objB, objA);
// Object.setPrototypeOf(objC, objB);
// console.log(objC.chaveA);

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * percentual / 100);
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * percentual / 100);
};

const produto1 = new Produto('Camiseta', 50);
produto1.aumento(30)
produto1.desconto(15)

const produto2 = {
    nome: 'Calça',
    preco: 65
};
Object.setPrototypeOf(produto2, Produto.prototype);
produto2.aumento(10);

const produto3 = Object.create(Produto.prototype);
produto3.nome = 'Casaco';
produto3.preco = 115;
produto3.desconto(10)

const produto4 = Object.create(Produto.prototype, {
    nome: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'Bolsa'
    }, 
    
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 78
    },

    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 44
    }
})

console.log(produto1);
console.log(produto2);
console.log(produto3);
console.log(produto4);
