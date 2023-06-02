/* Modo de construção 1
function getTimeFromSeconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-br', {
        hour12: false,
        timeZone: 'GMT'
    });
};

console.log(getTimeFromSeconds(10));

const relogio = document.querySelector('.relogio')
const botaoIniciar = document.querySelector('.iniciar')
const botaoPausar = document.querySelector('.pausar')
const botaoZerar = document.querySelector('.zerar')

let segundos = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000)
}

botaoIniciar.addEventListener('click', function(event) {
    relogio.classList.remove('pausado');
    relogio.classList.add('iniciado');
    clearInterval(timer);
    iniciaRelogio();
});
botaoPausar.addEventListener('click', function(event) {
    relogio.classList.remove('iniciado')
    relogio.classList.add('pausado');
    clearInterval(timer);
});
botaoZerar.addEventListener('click', function(event) {
    relogio.classList.remove('iniciado')
    relogio.classList.remove('pausado')
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
});
*/

// Modo de construção 2
function relogio() {

    function getTimeFromSeconds(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-br', {
            hour12: false,
            timeZone: 'GMT'
        });
    };

    const relogio = document.querySelector('.relogio')

    let segundos = 0;
    let timer;

    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = getTimeFromSeconds(segundos);
        }, 1000)
    }

    document.addEventListener('click', function (e) {
        const el = e.target;

        if (el.classList.contains('zerar')) {
            relogio.classList.remove('iniciado')
            relogio.classList.remove('pausado')
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
        }

        if (el.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            relogio.classList.add('iniciado');
            clearInterval(timer);
            iniciaRelogio();
        }

        if (el.classList.contains('pausar')) {
            relogio.classList.remove('iniciado')
            relogio.classList.add('pausado');
            clearInterval(timer);
        }
    });
}

relogio();