// escreva uma função que recebe 2 números e retorne o maior deles

// Modo 1
function max(x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}

console.log(max(15, 5));

// Modo 2
function max(x, y) {
    if (x > y) return x;
    return y;
}

console.log(max(6, 2));

// Modo 3
function max(x, y) {
    return x > y ? x : y;  
}

console.log(max(10, 6));

// Modo 4
const max2 = (x, y) => {
    return x > y ? x : y;
}

console.log(max2(5, 8));

// Modo 5
const max3 = (x, y) => x > y ? x : y;

console.log(max3(2, 9));