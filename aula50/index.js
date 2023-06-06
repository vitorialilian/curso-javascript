// A função definida com a palavra function tem uma variavel especial que chama arguments que sustenta todos os argumentos enviados
// function funcao(a, b, c, d, e, f, g, h) {
//     let total = 0;
//     for (let argumento of arguments) {
//         total += argumento;
//     }

//     console.log(total, a, b, c, d, e, f, g, h);
// }
// funcao(1, 2, 3, 4, 5, 6, 7, 8);

// function funcao(a, b, c, d, e, f) {
//     console.log(a, b, c, d, e, f);
// }
// funcao(1, 2, 3);

// resolvendo o problema caso não tenha valor em algum dos parametros, adicionando um valor padrão
// MANEIRA ANTIGA
// function funcao(a, b) {
//     b = b || 2;
//     console.log(a + b);
// }
// funcao(2);

// // MANEIRA ATUAL
// function funcao(a, b = 2, C = 4) {
//     console.log(a + b + C);
// }
// funcao(2, undefined, 20);

// Usando desestruturação de objeto
// fazendo a desestruturação e retirando as variaveis (parâmetros) das chaves do objeto
// function funcao ({nome, sobrenome, idade}) {
//     console.log(nome, sobrenome, idade);
// }
// // funcao({ nome: 'Luiz', sobrenome: 'Otávio', idade: 20}); // foi enviado um objeto literal
// let obj = {nome: 'Luiz', sobrenome: 'Otávio', idade: 20};
// funcao(obj);

// Usando desestruturação de array 
// function funcao([valor1, valor2, valor3]) {
//     console.log(valor1, valor2, valor3);
// }
// funcao(['Luiz Otávio', 'Miranda', 30]);


// function conta(operador, acumulador, ...numeros) {
//     for(let numero of numeros) {
//         if (operador === '+') acumulador += numero;
//         if (operador === '-') acumulador -= numero; 
//         if (operador === '/') acumulador /= numero; 
//         if (operador === '*') acumulador *= numero;     
//     }
    
//     console.log(acumulador);
// }
// conta('+', 1, 20, 30, 40, 50);

// function expression
// const conta = function(operador, acumulador, ...numeros) {
//     for(let numero of numeros) {
//         if (operador === '+') acumulador += numero;
//         if (operador === '-') acumulador -= numero; 
//         if (operador === '/') acumulador /= numero; 
//         if (operador === '*') acumulador *= numero;     
//     }
    
//     console.log(acumulador);
// }; // dessa forma precisa do ; , pois colocou o sinal de =
// conta('+', 1, 20, 30, 40, 50);

// const conta = function(operador, acumulador, ...numeros) {
//     console.log(arguments);
// };
// conta('+', 1, 20, 30, 40, 50);

const conta = (operador, acumulador, ...numeros) => {
    console.log(operador, acumulador, numeros);
};
conta('+', 1, 20, 30, 40, 50);

// pode usar o arguments com o rest operator
const conta = (...arguments) => {
    console.log(arguments);
};
conta('+', 1, 20, 30, 40, 50);