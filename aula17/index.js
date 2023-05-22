// aqui a função recebeu um valor e retornou um valor, mas nem sempre isso acontece no javascript

/* function saudacao(nome) {           
    return `Bom dia ${nome}!`;
}

const variavel = saudacao('Vitória');
console.log(variavel); */


// se os parametro tiverem um valor padrão, ele será usado sempre que não for dado um argumento para ambos, ou para um dos dois nesse caso que tem dois parametros.
/* function soma(x, y) {
    const resultado = x + y;
    return resultado;
    console.log('Hello World!');
}

//Aqui só foi possível dar o mesmo nome a variavel pois dentro da função é protegido e não pode ser acessado ou alterado, um não interfere no outro
const resultado = soma(); // se não for informado um valor e o parametro também não tenha um valor padrão, sera exibido NaN
console.log(resultado); */

/* const raiz = function (n) {
    return n ** 0.5;
};
console.log(raiz(0));
console.log(raiz(1));
console.log(raiz(4));
console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
console.log(raiz(36));
console.log(raiz(49));
console.log(raiz(64));
console.log(raiz(81)); */


/* const raiz = function (n) {
    return n ** 0.5;
} */

// Arrow function, o nome function não é colocado, e é adicionado => parecendo uma seta por isso o nome, e a função continua funcionando igual, Arrow function é utilizado para facilitar a vida do programador, pois de maneira mais compacta, quando no caso se tem um único parametro e uma única linha, podemos transformar: 

/*const raiz = (n) => {
    return n ** 0.5;
};*/

const raiz = n => n ** 0.5;

console.log(raiz(0));
console.log(raiz(1));
console.log(raiz(4));
console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
console.log(raiz(36));
console.log(raiz(49));
console.log(raiz(64));
console.log(raiz(81));