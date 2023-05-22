// let num1 = 9.54578;
// let num2 = Math.floor(num1); // - Esse arredonda para baixo = 9 neste exemplo
// let num2 = Math.ceil(num1); // - Esse arredonda para cima = 10 neste exemplo
// let num2 = Math.round(num1); // - Esse arrendonda para cima ou para baixo dependendo das casas decimais = exemplo: 9.49 arredonda para baixo, 9.50 arredonda para cima
// console.log(num2);

// console.log(Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6)); // - Esse determina qual o maior número, neste exemplo 1500
// console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6)); // - Esse determina qual o menor número, neste exemplo -50
// console.log(Math.random()); // - Esse vai gerar um número aleatório entre 0 e 1, só que o um não é incluído, sera abaixo de 1 e terá varias casas decimais, cada vez que executar sera um número diferente

/* const aleatorio = Math.random() * (10 - 5) + 5; // Dessa forma agora o número aletorio gerado, vai ser entre 10 e 5 
console.log(aleatorio); */

/*const aleatorio = Math.round(Math.random() * (10 - 5) + 5); // Dessa forma o número gerado é arredondado
console.log(aleatorio); */

// console.log(Math.PI); // para mostrar o valor de PI 

// Ambas são usadas para potenciação
// console.log(Math.pow(2, 10));
// console.log(2 ** 10); // Essa é mais indicada para usar para potenciação

/* let num1 = 16;
console.log(num1 ** 0.5); // dessa forma da para encontrar a raiz quadrada de algum número */

/* console.log(100 / 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001); Infinity */

console.log(100 / 0); // - No JavaScript da para dividir por zero, e é verdadeiro, true em boolean por exemplo, o resultado executado é Infinity.