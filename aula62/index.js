/*
//   indice        0         1        2
// const nomes = ['Eduardo', 'Maria', 'Joana']; // array forma literal, na sua forma de ser criada
// Funciona para String, object, funccion, number
// pode criar array dessa forma, é possível mas é pouquissimo usado
const nomes = new Array('Eduardo', 'Maria', 'Joana');

nomes[2] = 'João';
delete nomes[2];
console.log(nomes);
*/

// Valores por referência
// indice          0         1        2
// const nomes = ['Eduardo', 'Maria', 'Joana'];
// const novo = nomes; // neste momento o valor foi passado por referencia, tudo que eu fizer em nomes reflete em novo, e vice-versa
// // valores por referencia podem ser copiados

// novo.pop(); // faz perder um elemento, em ambos nomes e novo
// console.log(nomes);

// const nomes = ['Eduardo', 'Maria', 'Joana'];
// const novo = [...nomes]; // spread
// // assim um não influencia o outro, pois foi criada uma cópia

// console.log(nomes.length);
// console.log(novo.length);
// novo.pop();
// console.log(novo.length);
// console.log(nomes);
// console.log(novo);

// const nomes = ['Eduardo', 'Maria', 'Joana'];
// const removido = nomes.pop(); // pop() remove do final
// console.log(nomes);
// console.log(removido);
// console.log(nomes, removido);

// const nomes = ['Eduardo', 'Maria', 'Joana'];
// const removido = nomes.shift(); // shift() remove do começo
// console.log(nomes);
// console.log(removido);
// console.log(nomes, removido);
// // removendo o do começo o indice é modificado

//  indice            0         1         2
// const nomes = ['Eduardo', 'Maria', 'Joana'];
// nomes.push('João');
// nomes.push('Wallace');
// console.log(nomes[3]);
// console.log(nomes[4]);
// console.log(nomes);

// const nomes = ['Eduardo', 'Maria', 'Joana'];
// nomes.unshift('João');
// nomes.unshift('Wallace');
// // unshift adiciona elementos no começo do meu array, no indice 0, e modifica todos
// console.log(nomes);

// indices         0         1        2         3          4
// const nomes = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana'];
// const novo = nomes.slice(1, -2);
// console.log(novo);

// transformar string em array
// const nome = 'Luiz Otávio Miranda';
// const nomes = nome.split(' ');
// console.log(nomes);

// transformar array em string
const nomes = ['Luiz', 'Otávio', 'Miranda'];
const nome = nomes.join(' ');
console.log(nome);



