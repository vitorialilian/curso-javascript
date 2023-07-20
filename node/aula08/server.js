const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('<form action="/" method="post"> Nome do cliente: <input type="text" name="nome"> <button>Enviar Formulário</button> </form>');
});

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.facebook);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('Recebi o formulário');
});

app.listen(8080, () => {
    console.log('Acessar http://localhost:8080')
    console.log('Servidor executando na porta 8080');
});