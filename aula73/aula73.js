/* 
Object.assing(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
...(spread)

// Já vimos:
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties(define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

// Copiar object com ...spread
// const produto1 = {nome: 'Caneca', preco: 1.8};
// const produto2 = { 
//     ...produto1,
//     material: 'porcelana'
//  };

// produto2.nome = 'Prato';
// produto2.preco = 2.5; 
// console.log(produto1);
// console.log(produto2);

// Copiar Object com Object.assign
// const produto1 = {nome: 'Caneca', preco: 1.8};
// const produto2 = Object.assign({}, produto1, { material: 'porcelana'});

// produto2.nome = 'Prato';
// produto2.preco = 2.5; 
// console.log(produto1);
// console.log(produto2);

// Copiar object manualmente
// const produto1 = { nome: 'Caneca', preco: 1.8 };
// const produto2 = { nome: produto1.nome, preco: produto1.preco, material: 'porcelana' };

// produto2.nome = 'Prato';
// produto2.preco = 2.5; 
// console.log(produto1);
// console.log(produto2);


// const produto1 = { nome: 'Caneca', preco: 1.8 };
// Object.freeze(produto1);
// const produto2 = { nome: produto1.nome, preco: produto1.preco };

// produto1.nome = 'Colher';
// produto1.preco = 0.50
// console.log(produto1);
// console.log(Object.keys(produto1));


// const produto = { nome: 'Lápis', preco: 1.50 };
// Object.defineProperty(produto, 'nome', {
//     writable: false,
//     configurable: false, 
//     value: 'Livro'
// });

// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

// produto.nome = 'Caderno';
// delete produto.nome;

// produto.preco = 10.59;

// console.log(produto);


// não é comum, mas 
// modo 1
const produto = { nome: 'Pente', preço: 3, material: 'plástico' };
for (let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
};

// modo 2
const produto2 = { nome: 'Pente', preço: 3, material: 'plástico' };
for (let valor of Object.entries(produto)) {
    console.log(valor[0], valor[1]);
};




