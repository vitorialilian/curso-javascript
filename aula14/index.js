// IEEE 754-2008 Esse é o padrão que o JavaScript segue

/*let num1 = 0.7; // number
let num2 = 0.1; // number

num1 += num2; // 0.8  // num1 = num1 + num2
num1 += num2; // 0.9
num1 += num2; // 1.0*/

/*num1 += num2; // 1.1
num1 += num2; // 1.2
num1 += num2; // 1.3
num1 += num2; // 1.4 
num1 += num2; // 1.5
num1 += num2; // 1.6
num1 += num2; // 1.7
num1 += num2; // 1.8
num1 += num2; // 1.9
num1 += num2; // 2.0*/

// num1 =parseFloat(num1.toFixed(2)); // Pode usar parseFloat ou Number, para resolver o problema de imprecisão dos resultados

/*console.log(num1); 
console.log(Number.isInteger(num1));*/

/* console.log(num1.toString() + num2); // .toString() transforma o number em string, então sera exibido uma concatenação, pois o + esta entre uma string e  um number
console.log(typeof num1); // buscando o typeof continua sendo um number */

/*let num1 = 10.5789551255547; // number
let num2 = 2.5; // number

// num1 = num1.toString(); // Dessa forma sera possível transformar o number numa string 'permanente'
// console.log(typeof num1); // Dessa forma o typeof será string
// console.log(num1.toString(2)); // Dessa forma podemos ver a representação binária do número da variavel
// console.log(num1.toFixed(2)); // Serve para arredondar o number, o número representa o total de casas que tera o arendondamento, as casas decimais.
// console.log(Number.isInteger(num1)); // para saber se o número é inteiro
let temp = num1 * '5';
// console.log(Number.isNaN(temp)); // Para dizer se a conta é invalida ou não NaN */

let num1 = 0.7; // number
let num2 = 0.1; // number

// Outra forma de resolver o problema de imprecisão, mas a anterior é melho segundo o professor
// num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.8
// num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.9
// num1 = ((num1 * 100) + (num2 * 100)) / 100; // 1.0

num1 = Number(num1.toFixed(2)); // Quando tiver o problema de imprecisão, isso também pode resolver caso tenha mais casas decimais e queira compactar mais, ou só para exibir ao final como já foi dito antes

console.log(num1);
console.log(Number.isInteger(num1));