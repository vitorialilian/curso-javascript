// Filter
// Exemplo 1
const palavras = ['Caderno', 'Lápis', 'Caneta', 'Borracha', 'Garrafa', 'Ventilador'];

const seteLetras = palavras.filter(valor => valor.length > 7);

console.log(seteLetras);

// Exemplo 2
function isBigEnough(value) {
    return value % 8 === 0;
};

const numeros = [18, 95, 1, 24, 64, 84, 12, 16, 80, 75].filter(isBigEnough);
console.log(numeros);

// Exemplo 3 

const frutas = ['Manga', 'Maçã', 'Banana', 'uva', 'laranja'];

const filtrarFrutas = (query) => { return frutas.filter( el => 
        el.toLowerCase().indexOf(query.toLowerCase() > -1));
    };

console.log(filtrarFrutas('an'));