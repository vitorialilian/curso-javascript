const path = require('path');

console.log(path.resolve(__dirname, '..', '..', 'arquivos', 'imagens'));

console.log(path.resolve(__dirname, '.', '.', 'arquivos', 'imagens'));

console.log(__dirname);

// '..' é para voltar alguma pasta, o que fara elas serem removidas do caminho mostrado, no console.log
// '.' é para ir em frente, mas neste caso só deixou como estava o caminho e adicionou as duas "pastas" a mais

console.log(__filename);

const Cachorro = require('./Z/mod02.js');

const cachorrinho = new Cachorro('Vira-lata');
cachorrinho.latir();