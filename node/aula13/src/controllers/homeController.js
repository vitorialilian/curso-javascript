// os parametros recebidos req, res, next, são middlewares

exports.paginaInicial = (req, res, next) => { 
    console.log('Respondendo o cliente');
    res.render('index');
    console.log(`'paginaInicial'Olha o que tem na req.session.nome ${req.session.nome}`);
    next();
};

exports.trataPost = (req, res, next) => {
    res.send('Ei, sou sua nova rota de POST.');
};