// Operadores Aritméticos, de atribuição e incremento

/**
 * Aritméticos 
 * ( + ) Adição / Concatenação
 * ( - ) Subtração 
 * ( / ) Divisão
 * ( * ) Multiplicação, 
 * ( ** ) Potenciação
 * ( % ) resto da divisão
*/

/*
Existe como na matemática uma ordem de precedência
( ) 
** 
* e / e %  Da esquerda para a direita, quando tem a mesma colocação de precedência
+ e - Da esquerda para a direita também
Se colocar dentro de parênteses você eleva a precedência para o topo
*/

/* Exemplo 1
const num1 = 5;
const num2 = 2;
const num3 = 10
console.log(num1 * num2 / num3);*/

// Operador de Incremento ++, adiciona um valor a mais, cada vez que é colocado, pode ser pós (executa a ação e depois faz o incremento) ou pré (faz o incremento, conta, depois executa a ação)

/* Exemplo 2
let contador = 1; 
++contador; //2
++contador; //3
contador++; //4
contador++; //5
console.log(contador);*/

/* Exemplo 3
let contador = 1;
console.log(contador++);
console.log(contador); 
// 1 2 */

/* Exemplo 4
let contador = 1;
console.log(++contador);
2*/

// Operador de decremento --, que subtrai um valor a menos cada vez que é colocado, também tem a diferenciação entre pré e pós

/* Exemplo 5
let contador = 10;
--contador;
--contador;
contador--;
contador--;
console.log(contador);*/

/* Exemplo 6
const passo = 26;
let contador = 0;
contador = contador + passo; 
console.log(contador);
contador = contador + passo; 
console.log(contador);
contador = contador + passo; 
console.log(contador);*/

// Para fazer o que foi feito no exemplo 6 de forma mais clean
/*let contador = 2;
contador += 2;
contador += 2;
contador += 2;
console.log(contador);*/

/*Operadores de atribuição
Qualquer operador e o =
+=
-=
*=
/=
%=
**=
*/

//NaN - Not a Number: significa que houve algum erro, algum tipo de dado não bateu, ai sua conta veio errada
/*const num1 = 10;
const num2 = 'Luiz';
console.log(num1 * num2);*/

// Neste caso o próprio javascrip resolveria, e não teria exibição de NaN
// MAS O IDEAL É QUE VOCÊ RESOLVA POR CONTA PRÓPRIA AO DETECTAR UM ERRO, ANALISE BEM SEUS CÓDIGOS PARA NÃO DEIXAR QUE PASSE ALGUM
// Mas caso fosse usar o sinal de adição, não iria somar e sim fazer a concatenação - seria exibido 105 - junção do 10 com o '5'

/*const num1 = 10;
const num2 = '5';
console.log(num1 * num2);*/

// JavaScript é uma linguagem estranha porque ela tenta solucionar muita coisa para a gente
// MAS O IDEAL É QUE VOCÊ RESOLVA POR CONTA PRÓPRIA AO DETECTAR UM ERRO, ANALISE BEM SEUS CÓDIGOS PARA NÃO DEIXAR QUE PASSE ALGUM


// Para converter a string em number, caso seja necessário - parseInt(); - Essa função converte para um número inteiro
// Sempre que se chama parenteses no javascript é porque quer executar alguma ação

/*const num1 = 10;
const num2 = parseInt('5');
console.log(num1 + num2);
console.log(typeof num2);*/

// javascript não faz distinção de números inteiros ou com outras casas decimais, com ponto flutuante no caso. Exemplo: 5.2
// Neste caso para ser lido com número com ponto flutuante, para analisar as outras casas decimais, usa-se a função - parseFloat()

/*const num1 = 10;
const num2 = parseFloat('5.2');
console.log(num1 + num2);
console.log(typeof num2);*/

// a função Number() analisa por conta própria e distingue inteiros de decimais
const num1 = 10;
const num2 = Number('5');
console.log(num1 + num2);
console.log(typeof num2);