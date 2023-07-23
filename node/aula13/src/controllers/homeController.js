// os parametros recebidos req, res, next, são middlewares

exports.paginaInicial = (req, res, next) => { 
    res.render('index');
    next();
};

exports.trataPost = (req, res, next) => {
    res.send('Ei, sou sua nova rota de POST.');
};