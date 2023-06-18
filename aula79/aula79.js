// Factory Functions + Prototypes
const falar = {
    falar() {
    console.log(`${this.nome} está falando`);
    },
}

const comer = {
    comer() {
    console.log(`${this.nome} está comendo`);
    },
}

const beber = {
    beber() {
    console.log(`${this.nome} está bebendo`);
    },
}

// const pessoaPrototype = { ...falar, ...beber, ...comer };
const pessoaPrototype = Object.assign({}, falar, comer, beber);


function criaPessoa(nome, sobrenome) {
   return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    });
}

const pessoa1 = criaPessoa('Luiz', 'Otávio');

const pessoa2 = criaPessoa('Maria', 'Silva')

console.log(pessoa1);
console.log(pessoa2);
