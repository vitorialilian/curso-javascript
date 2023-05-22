/*
Operadores de comparação
> Maior que
>= Maior que ou igual a 
< Menor que 
<= Menor que ou igual a 
== Igualdade (Checa valor) *************** NÃO SE USA
=== Igualdade estrita (Checa valor e tipo)
!= Diferente (Chega valor) *************** NÃO SE USA
!== Diferente estrito (Checa valor e tipo)
*/

// type correction - correção de tipo, mesmo sendo um number  e uma string, o próprio javascript deduziu e fez uma conversão, mas não é recomendado fazer isso, se quer trabalhar com números faça os com o tipo de number

/* const num1 = 10;
const num2 = '10'; 
const comp = num1 == num2;
console.log(comp); */

// Neste usando o ===(Igualdade estrita), vai mostrar que são diferentes, NÃO IGUAIS, pois realmente são, um é number e o outro string

/*const num1 = 10;
const num2 = '10'; 
const comp = num1 === num2;
console.log(comp); */

// Neste usa-se o !==(Diferente estrito), pois ele indicara que são diferentes
const num1 = 10;
const num2 = '10'; 
const comp = num1 !== num2;
console.log(comp); 