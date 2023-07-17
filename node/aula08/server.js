const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<form action="/" method="post"> Nome do cliente: <input type="text" name="nome"> <button>Enviar Formulário</button> </form>');
});

app.get('/testes/:idUsuarios', (req, res) => {
    console.log(req.params);
    res.send(req.params.idUsuarios);
})

app.post('/', (req, res) => {
    res.send('Recebi o formulário');
});

app.listen(8080, () => {
    console.log('Acessar http://localhost:8080')
    console.log('Servidor executando na porta 8080');
});