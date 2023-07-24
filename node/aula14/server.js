const express = require('express');
const app = express();

const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://vitorialilian:Z6OwOYmbzgsr8Obg@cluster0.vccyryv.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Agora que a conexão ocorreu'));

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

app.listen(8080, () => {
    console.log('Acessar http://localhost:8080')
    console.log('Servidor executando na porta 8080');
});