/*
const verdadeira = true;

// let tem escopo de bloco { ... bloco  }, entre chaves
// var só tem escopo de função

let nome = 'Luiz'; // criando
var nome2 = 'Luiz';

if (verdadeira) {
    let nome = 'Otávio'; // criado novamente, não está redeclarando
    var nome2 = 'Rogério'; // Redeclarada e reinicializada

    if (verdadeira) {
        var nome2 = 'Ronaldo'; // redeclarada e reinicializada novamente
        let nome = 'Outra Coisa';
    }
}

console.log(nome, nome2); */

/* const verdadeira = true;
function falaOi () {
    var sobrenome = 'Miranda';

    if (verdadeira) {
        let nome = 'Luiz';
        // console.log(sobrenome);
    }
    // console.log(sobrenome);
}

console.log(sobrenome);
falaOi(); */

/* console.log(sobrenome);

var sobrenome = 'Miranda'; // Hosting: neste caso a engine do javascript eleva a var e a ler mas não o seu valor, que acaba undefined */

console.log(sobrenome);
let sobrenome = 'Miranda'; // com o let isso foi corrigido, pois da erro, pois não pode declarar a variavel depois




