// classes
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando`);
    }
}

const pessoa1 = new Pessoa('Luiz', 'Miranda');

console.log(pessoa1);

// constructors
function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando`);
}

const pessoa2 = new Pessoa2('Maria', 'Miranda');

console.log(pessoa2);