
// Não podemos criar constantes com palavras reservadas
// constantes precisam ter nomes significativos
// Não pode comecar o nome de uma constante com um número
// Não podem conter espaços ou traços
// Utilizamos camelCase
// Case-sensitive
// não podemos modificar o valor de uma constante
// Não utilize VAR, utilize CONST.

// + - * /

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
//console.log(resultadoTriplicado);
// dessa forma (resultadoTriplicado) acaba perdendo o primeiro valor, por isso é melhor evoluir do que mudar.
console.log(typeof (primeiroNumero + segundoNumero));

