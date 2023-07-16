// const fs = require('fs').promises;
// const path = require('path');
// // const caminhoArquivo = path.resolve(__dirname, '..', 'teste.txt');
// const caminhoArquivo = path.resolve(__dirname, '..', 'teste.json');

// const pessoas = [
//     {nome: 'João'},
//     {nome: 'Maria'},
//     {nome: 'Eduardo'},
//     {nome: 'Luiza'},
// ];

// const json = JSON.stringify(pessoas, '', 2);

// fs.writeFile(caminhoArquivo, json, { flag: 'w'});

const fs = require('fs').promises;

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, { flag: 'w', encoding: 'utf8'});
};