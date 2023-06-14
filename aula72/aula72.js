// defineProperty -> Getter e Setter

// function Produto(nome, preco, estoque) {
//     this.nome = nome;
//     this.preco = preco;

//     let estoquePrivado = estoque;
//     Object.defineProperty(this, 'estoque', {
//         enumerable: true, 
//         configurable: true,
//         get: function() {
//             return estoquePrivado;
//         },
//         set: function(valor) {
//             if (typeof valor !== 'number') {
//                 console.log('Bad value');
//                 return; // dessa forma acabou protegendo o estoquePrivado, que só sera alterado quando o valor for number
//             }
//             estoquePrivado = valor;
//         }
//     });
// }

// const produto1 = new Produto('Camiseta', 20, 3);
// //console.log(produto1);
// //produto1.estoque = 'O valor que eu quero';
// produto1.estoque = 500;
// console.log(produto1.estoque);


function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, 
        configurable: true,
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Mensagem');
            }
            estoquePrivado = valor;
        }
    });
}

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            valor = valor.replace('coisa.', ''); 
            nome = valor;
        }
    };
}

// const produto1 = new Produto('Camiseta', 20, 3);
// //console.log(produto1);
// produto1.estoque = 'O valor que eu quero';
// //produto1.estoque = 500;
// console.log(produto1.estoque);

const produto2 = criaProduto('Camiseta');
produto2.nome = 'Qualquer coisa.';
console.log(produto2.nome);