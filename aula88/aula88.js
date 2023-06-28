// Métodos úteis para promises

// Promise.all

// function aleatorio(min, max) {
//     min *= 1000;
//     max *= 1000;
//     return Math.floor(Math.random() * (max - min) + min);
// }

// function esperaAi(msg, tempo) {
//     return new Promise((resolve, reject) => {
//         if(typeof msg !== 'string') reject(false);

//         setTimeout(() => {
//             resolve(msg.toUpperCase() + ' - Passei na promise');
//         }, tempo);
//     });
// }

// const promises = [
//     'Primeiro valor',
//     esperaAi('Promise 1', 3000),
//     esperaAi('Promise 2', 500),
//     esperaAi('Promise 3', 1000),
//     'Outro valor'
// ];

// Promise.all(promises)
// .then(function(valor){
//     console.log(valor);
// })
// .catch(function(erro){
//     console.log('Error');
// })


//Promise.all

// function aleatorio(min, max) {
//     min *= 1000;
//     max *= 1000;
//     return Math.floor(Math.random() * (max - min) + min);
// }

// function esperaAi(msg, tempo) {
//     return new Promise((resolve, reject) => {
//         if(typeof msg !== 'string') {
//             reject('CAI NO ERRO');
//             return;
//         }

//         setTimeout(() => {
//             resolve(msg.toUpperCase() + ' - Passei na promise');
//             return;
//         }, tempo);
//     });
// }

// const promises = [
//     'Primeiro valor',
//     esperaAi('Promise 1', 3000),
//     esperaAi('Promise 2', 500),
//     esperaAi('Promise 3', 1000),
//     esperaAi(1000, 1000),
//     'Outro valor'
// ];

// Promise.all(promises)
// .then(function(valor){
//     console.log(valor);
// })
// .catch(function(erro) {
//     console.log(erro);
// });


// promise.race
// function aleatorio(min, max) {
//     min *= 1000;
//     max *= 1000;
//     return Math.floor(Math.random() * (max - min) + min);
// }

// function esperaAi(msg, tempo) {
//     return new Promise((resolve, reject) => {


//         setTimeout(() => {
//             if(typeof msg !== 'string') {
//                 reject('CAI NO ERRO');
//                 return;
//             }
//             resolve(msg.toUpperCase() + ' - Passei na promise');
//             return;
//         }, tempo);
//     });
// }

// const promises = [
//     esperaAi('Promise 1', aleatorio(1, 5)),
//     esperaAi('Promise 2', aleatorio(1, 5)),
//     esperaAi('Promise 3', aleatorio(1, 5)),
//     esperaAi(1000, aleatorio(1, 5)),

// ];

// Promise.race(promises)
// .then(function(valor){
//     console.log(valor);
// })
// .catch(function(erro) {
//     console.log(erro);
// });

//Promise.resolve
// function aleatorio(min, max) {
//     min *= 1000;
//     max *= 1000;
//     return Math.floor(Math.random() * (max - min) + min);
// }

// function esperaAi(msg, tempo) {
//     return new Promise((resolve, reject) => {


//         setTimeout(() => {
//             if(typeof msg !== 'string') {
//                 reject('CAI NO ERRO');
//                 return;
//             }
//             resolve(msg.toUpperCase() + ' - Passei na promise');
//             return;
//         }, tempo);
//     });
// }

// function baixaPagina() {
//     const emCache = true;

//     if(emCache) {
//         return Promise.resolve('Página em cache');
//     } else {
//         return esperaAi('Baixei a página', 3000);
//     }
// }

// baixaPagina()
//     .then(dadosPagina => {
//         console.log(dadosPagina);
//     })
//     .catch(e => console.log(e));


// Promise.reject
function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {


        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('CAI NO ERRO');
                return;
            }
            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo);
    });
}

function baixaPagina() {
    const emCache = true;

    if (emCache) {
        return Promise.reject('Página em cache');
    } else {
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log('Error', e));