const path = require('path');
const caminhoArquivo = path.resolve(__dirname, '..', 'teste.json');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');

// const pessoas = [
//     {nome: 'João'},
//     {nome: 'Maria'},
//     {nome: 'Eduardo'},
//     {nome: 'Luiza'},
// ];

// const json = JSON.stringify(pessoas, '', 2);
// escreve(caminhoArquivo, json);

async function lerArquivo(caminho) {
    const dados = await ler(caminho);
    renderizaDados (dados);
}

function renderizaDados(dados) {
    console.log(dados);
}
lerArquivo(caminhoArquivo);