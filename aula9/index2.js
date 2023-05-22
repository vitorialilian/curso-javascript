//Tipos de dados primitivos - string, number, undefined, null, boolean

// Obs: como não tem um contexto aqui o nome foi colocado sem ser significativo

// string
const nome = 'Luiz'; 
const nome1 = "Luiz";
const nome2 = `Luiz`;

// number
const num1 = 10;
const num2 = 10.52;

// undefined -> não aponta pra local nenhum na memória
let nomeAluno;

// Nulo -> não aponta pra local nenhum na memória
const sobrenomeAluno = null;

// Boolean = true or false (é um valor lógico muito utilizado)
const aprovado = true;

// para ver qual o tipo, valor
// console.log(typeof sobrenomeAluno, sobrenomeAluno); indicará que null é object, mas isso é um bug, pois null não se enquadraria como object

let a = 2;
const b = a;
console.log(a, b); // 2, 2
// o valor de b vai valer esse que foi salvo nesta parte

a = 3;
console.log(a, b); // 3, 2
