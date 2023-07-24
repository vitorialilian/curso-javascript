exports.middlewareGlobal = (req, res, next) => {
    next()
};

/*
// Também pode criar o middleware dessa outra forma
module.exports = (req, res, next) => {
    if (req.body.cliente) {
        req.body.cliente = req.body.cliente.replace('Miranda', 'NÃO USE MIRANDA');
    console.log();
    console.log(`Vi que você postou ${req.body.cliente}`);
    console.log();
    }

    next()
};
*/

exports.outroMiddleware = (req, res, next) => {
    console.log('Sou seu outro middleware');
    next()
}

// Apesar de ter criado esse outro, ele não foi usado, é só tirar ele da variavel, e não usar ele no app.use(outroMiddleware);