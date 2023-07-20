exports.paginaInicial = (req, res) => {
    res.send('<form action="/" method="post"> Nome do cliente: <input type="text" name="nome"> <form action="/" method="post"> <br> Número de identificação: <input type="text" name="numero">  <button>Enviar Formulário</button> </form>');
};

exports.trataPost = (req, res) => {
    res.send('Ei, sou sua nova rota de POST.');
};