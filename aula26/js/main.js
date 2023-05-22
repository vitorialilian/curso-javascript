// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

// adicionou um escutador,  que é um evento. E então previniu o default, não deixa esse formulário ser enviado.
form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Configurou os inputs
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    // converte para Number
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    // se o peso (! - diferente) for inválido NaN, a função irá parar aqui, pois tem o return e nada mais a baixo será executado
    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    // se a altura (! - diferente) for inválida NaN, a função irá parar aqui, pois tem o return e nada mais a baixo será executado
    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const mensagem = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultado(mensagem, true);
});

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

// Essa tem a função de criar e retornar um parágrafo - p
function criaP() {
    const p = document.createElement('p');
    return p;
}

// Essa função foi feita apenas com a especialidade de adicionar uma mensagem no HTML na <div id='resultado'>
function setResultado(mensagem, isValid) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = '';

    
    const p = criaP();
    
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }
    p.innerHTML = mensagem;
    resultado.appendChild(p);
}