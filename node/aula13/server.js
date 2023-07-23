const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views')) // Aqui esta passando o caminho absoluto
app.set('view engine', 'ejs');

app.use(routes);

app.listen(8080, () => {
    console.log('Acessar http://localhost:8080')
    console.log('Servidor executando na porta 8080');
});