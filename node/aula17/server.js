require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose'); // é quem vai modelar nossa base de dados
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        app.emit('pronto');
    })
    .catch(e => console.log(e));

const session = require('express-session');

const MongoStore = require('connect-mongo');

const flash = require('connect-flash');

const routes = require('./routes');

const path = require('path');

const helmet = require('helmet')

const csrf = require('csurf');

const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');

app.use(helmet());

app.use(express.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
    secret: 'mqixgshdytegfbvu',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false, 
    saveUnitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, 
        httpOnly: true
    }
})

app.use(sessionOptions);

app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views')) // Aqui esta passando o caminho absoluto

app.set('view engine', 'ejs');

app.use(csrf())
// Nossos próprios middlewares
app.use(middlewareGlobal); 

app.use(checkCsrfError);

app.use(csrfMiddleware);

app.use(routes);

app.on('pronto', () => {
    app.listen(8080, () => {
        console.log('Acessar http://localhost:8080')
        console.log('Servidor executando na porta 8080');
    });
});