// console.log('Linha 0');
// console.log('Linha 1');
// console.log('Linha 2');
// console.log('Linha 3');
// console.log('Linha 4');
// console.log('Linha 5');

// i é index
// for (let i = 0; i <= 5; i++) {
//     console.log(`Linha ${i}`);
// }

/* for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'ímpar';
    console.log(i, par);
} */

//                0       1       2       3          4         5         6
const frutas = ['Maçã', 'Pêra', 'Uva', 'Banana', 'Morango', 'Melão', 'Melancia'];

for (let i = 0; i < frutas.length; i++) {
    console.log( `Índice ${i}`, frutas[i]);
}