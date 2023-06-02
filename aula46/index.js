// function mostraHora() {
//     let data = new Date();

//     return data.toLocaleTimeString('pt-br', {
//         hour12: false
//     });
// }

// function funcaoDoInterval() {
//     console.log(mostraHora());
// }

// setInterval(funcaoDoInterval, 1000);

function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-br', {
        hour12: false
    });
}

function funcaoDoInterval() {
}

const timer = setInterval(function() {
    console.log(mostraHora());
}, 1000);

setTimeout(function() {
    clearInterval(timer);
}, 3000);

setTimeout(function() {
    console.log('Olá Mundo!');
}, 5000);
