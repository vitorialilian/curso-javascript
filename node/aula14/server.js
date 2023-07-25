require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        app.emit('pronto');
    })
    .catch(e => console.log(e));

const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware');

app.use(express.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views')) // Aqui esta passando o caminho absoluto
app.set('view engine', 'ejs');

// Nossos próprios middlewares
app.use(middlewareGlobal); 
app.use(routes);

app.on('pronto', () => {
    app.listen(8080, () => {
        console.log('Acessar http://localhost:8080')
        console.log('Servidor executando na porta 8080');
    });
});