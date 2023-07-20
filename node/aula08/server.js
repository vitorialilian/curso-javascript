const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true})) // serve para tratar o body, sem essa parte o valor de body não seria trabalhado e mostrado da forma correta

app.get('/', (req, res) => {
    res.send('<form action="/" method="post"> Nome do cliente: <input type="text" name="nome"> <form action="/" method="post"> <br> Número de identificação: <input type="text" name="numero">  <button>Enviar Formulário</button> </form>');
});

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.facebook);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O que você me enviou foi: ${req.body.nome} e ${req.body.numero}`);
});

app.listen(8080, () => {
    console.log('Acessar http://localhost:8080')
    console.log('Servidor executando na porta 8080');
});