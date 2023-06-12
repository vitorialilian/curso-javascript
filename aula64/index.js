// concatenando arrays

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

// modo 1
// const a3 = a1.concat(a2, [7, 8, 9], 'Luiz');

//...rest -> ...spread(espalhar)
// modo 2
const a3 = [...a1, 'Luiz', ...a2, ...[7, 8, 9]];

console.log(a3);