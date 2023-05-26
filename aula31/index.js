const verdadeira = true;

// let tem escopo de bloco { ... bloco  }
// var só tem escopo de função

let nome = 'Luiz'; // criando
var nome2 = 'Luiz';

var nome2 = 'Otávio';
console.log();

if (verdadeira) {
    let nome = 'Otávio'; // criando novamente, não está redeclarando
    // console.log(nome, nome2);

    if (verdadeira) {
        let nome = 'Outra Coisa';
        console.log(nome, nome2);
    }
}