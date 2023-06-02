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

document.addEventListener('click', function(e) {
    const el = e.target;
    
    if (el.classList.contains('zerar')) {
        console.log('Você clicou em zerar');
    }
});

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