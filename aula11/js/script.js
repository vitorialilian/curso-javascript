let num1 = prompt("Digite um número");
let num2 = prompt("Digite outro número");

num1 = parseInt(num1);
num2 = parseInt(num2);

/*const resultado = num1 + num2; 
Nessa pudemos excluir a constante resultado por ser um código simples, em um mais complexo aumentaria ainda mais a complexidade, e tornaria o código menos explicito. O que se deve evitar pois escrevemos codigos para humanos e não maquinas, para eu poder compreender e quem olhar também*/ 

alert(`O resultado da sua conta é: ${num1 + num2}`);