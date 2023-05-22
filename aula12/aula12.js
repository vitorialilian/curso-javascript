// Desafio 
/* Trocar os valores de A para B, B para C e C para A
let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A 
*/

// Maneira mais antiga de fazer
/*
let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const varATemp = varA;
varA = varB;
varB = varC;
varC = varATemp;

console.log(varA, varB, varC);*/

// maneira mais moderna de resolver o desafio

let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);