/* function meuEscopo() {
    const form = document.querySelector('.form');

    form.onsubmit = function (evento) {
        evento.preventDeFault();
        alert(1);
        console.log('Foi enviado');
    };

    let contador = 1;
    function recebeEventoForm (evento) {
        evento.preventDeFault();
        console.log(`Form não foi enviado ${contador}`);
        contador++;
    }

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo(); */ 

function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [] // objeto criado

    function recebeEventoForm (evento) {
        evento.preventDefault (); // Este serve para que a página não seja recarregada de uma forma que perca as informações

        const nome = form.querySelector('#nome');
        const sobrenome = form.querySelector('#sobrenome');
        const peso = form.querySelector('#peso');
        const altura = form.querySelector('#altura');

        pessoas.push({                             // Foram adicionadas arrays dentro do objeto pessoas
            nome: nome.value,                      // .value é para salvar os valores digitados no formulario
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>` // para que os resultados apareçam abaixo
    }

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();