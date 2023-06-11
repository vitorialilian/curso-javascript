//               -5       -4       -3         -2        -1
//                0        1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(indice, delete, elem1, elem2);
// pop

const removidos = nomes.splice(-1, 1);
console.log(nomes, removidos);