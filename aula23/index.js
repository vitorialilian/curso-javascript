/*
&& -> false && true -> false "O valor mesmo" -> Se achar um valor falso não preciso checar mais nada, quando uso o && pois se tiver mesmo que apenas um, será falso

|| -> true || false -> Vai retorna o valor 'verdadeiro'

FALSY(Valores avaliados como falsos)

*false é falso literal

Esses são falsy que fingem ser falsos 
0
'' "" `` (aspas simples e duplas, e crases vazias)
null/undefined
NaN
*/

/* console.log('Luiz Otávio' && 0 && 'Maria'); // Será retornado o valor da expressão falso
console.log('Luiz Otávio' && true && 'Maria'); // Como todos são verdadeiros, true sendo literal, sera retornado o último valor
console.log('Luiz Otávio' && true && NaN); // Neste será retornado NaN como sendo o valor falso */

/*function falaOi() {
    return 'Oi';
}*/

/* const vaiExecutar = 'false';

console.log(vaiExecutar && falaOi());  - a função não será executada pois o javascript detecta o valor false primeiramente e executa ele*/

/* const vaiExecutar = 'Joãozinho';

console.log(vaiExecutar && falaOi());  - neste a função será executada pois o valor é true */

/* const corUsuario = 'red';
const corPadrao = corUsuario || 'black';

console.log(corPadrao); */

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e); // Qual valor sera exibido? 'false' pois é unico verdadeiro
