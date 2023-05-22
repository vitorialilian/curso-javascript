//               0       1        2          3      4
let alunos = ['Luiz', 'Maria', 'João']; // Luiza, Eduardo
alunos = 123; // caso mude o valor pode deixar de ser um array, como neste caso

console.log(typeof alunos); // Array é do tipo object
console.log(alunos instanceof Array); // para saber se é realmente um array


//               0       1        2          3      4
/*const alunos = ['Luiz', 'Maria', 'João']; // Luiza, Eduardo

alunos.push('Luiza');
alunos.push('Eduardo');

console.log(alunos.slice(0, 3)); // forma com número positivo para fatiar e pegar só determinada parte da array, é exibida a parte entre os dois indices, precisa ser o segundo número um indice a mais do que o último que queira exibir
console.log(alunos.slice(0, -2)); // forma com número negativo, onde elimina de trás para frente e o que sobra é exibido*/


//               0       1        2
/* const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos[50]); // Acessando um item que não existe, será mostrado o valor: undefined*/


//               0       1        2
/*const alunos = ['Luiz', 'Maria', 'João'];
delete alunos[1]; // O delete deleta um item sem mudar a ordem do indice, apenas deleta e deixa o elemento vazio
console.log(alunos[1]);
console.log(alunos);*/


//               0       1        2
/* const alunos = ['Luiz', 'Maria', 'João'];
const removido = alunos.shift(); // remove um elemento do inicio da array, e assim como no caso anterior o elemento removido acaba sendo salvo na variavel
console.log(removido);
console.log(alunos);*/


//               0       1        2
/*const alunos = ['Luiz', 'Maria', 'João'];

const removido = alunos.pop(); // .pop() usado para remover o último elemento, como neste caso se tornou um valor de uma variavel, o elemento removido acabou sendo salvo nesta variavel
console.log(removido); 
console.log(alunos);*/

//               0       1        2
/*const alunos = ['Luiz', 'Maria', 'João'];

alunos.unshift('Luiza'); // Adiciona elementos na frente, no início da array
alunos.unshift('Fábio');
console.log(alunos);*/

//               0       1        2
/*const alunos = ['Luiz', 'Maria', 'João'];

alunos.push('Luiza'); // serve para adicionar um novo elemento no fim 
alunos.push('Fábio');
console.log(alunos);*/

//               0       1        2
/*const alunos = ['Luiz', 'Maria', 'João'];

alunos[alunos.length] = 'Luiza'; // dessa forma cada vez que adicona mais uma linha semelhante com um outro nome, vai ser acressentado como um novo elemento na array, sempre no final 
alunos[alunos.length] = 'Fábio';
alunos[alunos.length] = 'Luana';
console.log(alunos);*/


//               0       1        2
/*const alunos = ['Luiz', 'Maria', 'João'];
alunos[0] = 'Eduardo'; // alterar um elemento
alunos[3] = 'Luiza'; // adicionar um elemento
console.log(alunos);*/

//               0       1        2
// const alunos = ['Luiz', 'Maria', 'João'];
/*console.log(alunos); // array completo
console.log(alunos[0]); // o primeiro indice
console.log(alunos[2]); // o terceiro no indice*/