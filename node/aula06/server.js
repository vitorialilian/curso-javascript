const express = require('express');
const app = express();

// Operações que tendemos a fazer numa API:
//         CRIAR   LER   ATUALIZAR   APAGAR
// CRUD -> CREATE, READ, UPDATE,     DELETE
//         POST    GET   PUT         DELETE

// Quando a gente acessa a rota para o site, está fazendo um GET, para a barra é a rota para a raiz principal 
// http://meusite.com/ <- GET -> Entregue a página /

// Para o sobre, por exemplo, estou fazendo um GET na página sobre, o navegador esta pedindo ao servidor para lhe entregar a rota para sobre
// http://meusite.com/sobre <- GET -> Entregue a página /sobre

// http://meusite.com/contato <- GET -> Entregue a página /contato

app.get('/', (req, res) => {
    res.send('Hello <b> World! </b>');
})

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente.')
})

app.get('/formulario', (req, res) => {
    res.send('<form action="/" method="post"> Nome: <input type="text" name="nome"> <button>Enviar</button> </form>')
})

app.post('/', (req, res) => {
    res.send('Recebi o formulário');
})

app.listen(8080, () => {
    console.log('Acessar http://localhost:8080')
    console.log('Servidor executando na porta 8080');
});