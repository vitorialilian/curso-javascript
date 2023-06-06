// Declaração de função (Function hoisting)
function falaOi() {
    console.log('Oie');
}
falaOi();

// First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function() {
    console.log('Sou um dado.');
};

function executaFuncao(funcao) {
    funcao();
}

executaFuncao(souUmDado);