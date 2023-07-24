// os parametros recebidos req, res, next, são middlewares

exports.paginaInicial = (req, res) => { 
    res.render('index');
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};