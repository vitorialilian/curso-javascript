//               01234567
/*let umaString = "Um Texto";

console.log(umaString[2]);*/


/*let umaString = "Um Texto";

console.log(umaString.charAt(6));*/


/*let umaString = "Um Texto";

console.log(umaString.concat(' ', 'em', ' ', 'um'));*/

// 3 formas diferentes de fazer concatenação
//               01234567
/*let umaString = "Um Texto";

console.log(umaString.concat(' em um lindo dia. '));
console.log(umaString + ' em um lindo dia. ');
console.log(`${umaString} em um lindo dia.`);*/

// a última é mais usada pelo professor, é a forma chamada template strings

//                  01234567
/* let umaString = "Um Texto";

console.log(umaString.indexOf('e', 3)); //Aqui pode procurar o indice com a palavra, letra, ou insolando para encontrar apenas a partir de/ após um determinado elemento. Se estiver antes dará -1. */

/*let umaString = "Um Texto";

console.log(umaString.lastIndexOf('o', 3)); //Aqui a função faz a contando começando do último elemento do indice, então neste caso não apareceria o elemento do o pois esta depois do elemento isolado escolhido*/

// EXPRESSÕES REGULARES: (/[a-z]/) - (/[a-z]/g) - (/x/)

/*let umaString = "Um Texto";

console.log(umaString.match(/[a-z]/));*/

/*let umaString = "Um Texto";

console.log(umaString.search(/[a-z]/g)); // indica no indice onde começa as minuscula*/

/*let umaString = "Um Texto";

console.log(umaString.search(/x/)); // indica o elemento onde a letra esta no Indice.*/ 

/*let umaString = "Um Texto";

console.log(umaString.replace(/Um/, 'Outro')); // substituir uma palavra por outra a palavra entre / / que é uma expressão regular também*/ 

//               01234567891011...
/*let umaString = "O rato roeu a roupa do rei de roma.";

console.log(umaString.replace(/r/g, '#')); // Substituiu todos os r pela #, mas só ocorre por conta da flag g
*/

/*let umaString = "O rato roeu a roupa do rei de roma.";

console.log(umaString.length); // Para saber o tamanho, a quantidade de caracteres. Mas ele conta o zero 0 como sendo 1 e continua daí.*/

/*let umaString = "O rato roeu a roupa do rei de roma.";

console.log(umaString.slice(2, 6)); // Para pegar um pedaço da string, exemplo a palavra rato, começando no 2 e terminando no 5, mas se colocar o 5, não ira exibir a parte toda, precisa ir até uma a mais, no caso terminando no 6, para aparecer rato exatamente */

/*let umaString = "O rato roeu a roupa do rei de roma.";

console.log(umaString.slice(-3)); // É exibir o total de caracteres menos o valor informado, como se tivesse isolado o 32 e quisesse apena so que vem depois dele, começa do 32 e vai até o final neste exemplo. 
console.log(umaString.slice(32));*/ 

/*let umaString = "O rato roeu a roupa do rei de roma.";

console.log(umaString.slice(-5)); // nesse seria exibido os ultimos 5 caracteres roma.

console.log(umaString.slice(-5, -1)); // nesse seria retirado o ponto final também

console.log(umaString.substring(umaString.length - 5, umaString.length - 1)) // faz o mesmo que a anterior, .slice, mais o código acaba ficando bem maior */

let umaString = "O rato roeu a roupa do rei de roma.";

console.log(umaString.split('r')); // pegar todas as palavras separadas num array, por espaço, ou r, o que indica não ira aparecer e vai ser separado cada outro parte entre aspas e uma da outra por virgulas. 

console.log(umaString.split(' ', 9)) // Aparece o tanto de resultado de acordo com o número indicado, cada palavra representa 1 número, 1 exibiria 'O', 2 exibiria 'O', 'Rei'

console.log(umaString.toUpperCase()); // Deixar a string toda em maísculas
console.log(umaString.toLowerCase()); // Deixar a string toda em minusculas