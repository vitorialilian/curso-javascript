/* let a = 'A';
let b = a; // cópia do valor de a
console.log(a, b);

a = 'Outra coisa'; // aqui apenas o valor de a é modificado, o de b continua igual
console.log(a, b); */

/* let a = [1, 2, 3];
let b = a;   // Neste caso não é uma cópia, o que ocorre é que b passa a apontar para o mesmo valor na memória que a
console.log(a, b);

a.push(4);
console.log(a, b);  // Neste caso ambos os valores são modificados

b.pop(4);
console.log(a, b); // Neste caso ambos os valores são modificados também */

/* let a = [1, 2, 3];
let b = [...a];   // Neste caso agora é uma cópia, dessa forma b se torna uma cópia de a, sendo independente
console.log(a, b);

a.push(4);
console.log(a, b);  // Neste caso ambos os valores são modificados

b.pop(4);
console.log(a, b); */

const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
const b = {...a}; // Neste caso o objeto agora se torna uma cópia e pode ser modificado independentemente

a.nome = 'João';
console.log(a);
console.log(b);
