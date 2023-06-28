// PROMISES

function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('BAD VALUE');

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });  
}

esperaAi('Conexão com o Banco de Dados', aleatorio(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Buscando dados da BASE', aleatorio(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi(52416398, aleatorio(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
    }).then(() => {
        console.log('Exibi dados na tela');
    })
    .catch(e => {
        console.log('ERRO', e);
    });

console.log('Isso será exibido antes de qualquer um promise.');