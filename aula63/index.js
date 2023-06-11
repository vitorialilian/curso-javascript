//               -5       -4       -3         -2        -1
//                0        1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(indice, delete, elem1, elem2);

// const removidos = nomes.splice(3, 1);
// console.log(nomes, removidos);

// const removidos = nomes.splice(-2, 1);
// console.log(nomes, removidos);

// const removidos = nomes.splice(-2, Number.MAX_VALUE);
// console.log(nomes, removidos);
// console.log(Number.MAX_VALUE);

// const removidos = nomes.splice(3, 0, 'Luiz');
// console.log(nomes, removidos);

// const removidos = nomes.splice(3, 2, 'Luiz', 'Otávio');
// console.log(nomes, removidos);

// simulando o pop com splice
// const removidos = nomes.splice(-1, 1);
// console.log(nomes, removidos);

// simulando o shift com splice
// const removidos = nomes.splice(0, 1);
// console.log(nomes, removidos);

// simulando o push com splice - neste caso é melhor usar o push
// const removidos = nomes.splice(nomes.length, 0, 'Luiz');
// console.log(nomes, removidos);

// simulando unshift com splice
const removidos = nomes.splice(0, 0, 'Luiz', 'Otávio');
console.log(nomes, removidos);


