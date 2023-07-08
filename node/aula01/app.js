// MODO 1 DE EXPORTAÇÃO
// const mod1 = require('./mod1');

// console.log(mod1.falaNome());

// // MODO 2 DE EXPORTAÇÃO
// const falaNome = require('./mod1').falaNome;

// console.log(falaNome());

// MODO 3 DE EXPORTAÇÃO
// const mod1 = require('./mod1');
// const falaNome = mod1.falaNome;
// console.log(mod1.falaNome());
// console.log(falaNome());

// MODO 4 DE EXPORTAÇÃO
const { nome, sobrenome, falaNome } = require('./mod1');
console.log(nome, sobrenome);
console.log(falaNome());