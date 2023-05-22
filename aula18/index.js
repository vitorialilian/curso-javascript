// Essa função se chama factory, ela retorna objetos, ela cria objetos, logo ela é uma fábrica de objetos
/* function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
} */

// Forma mais compacta
/* function criaPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade};
}

const pessoa1 = criaPessoa('Luiz', 'Miranda', 25);
const pessoa2 = criaPessoa('Maria', 'Oliveira', 32);
const pessoa3 = criaPessoa('João', 'Moreira', 55);
const pessoa4 = criaPessoa('Junior', 'Lara', 44);
const pessoa5 = criaPessoa('Jean', 'Otávio', 69);

console.log(pessoa1.nome, pessoa2.nome); */

/* const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`)   // this neste caso esta relacionado a pessoa1
    }
};

pessoa1.fala(); */

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    // essa é uma função, mesmo sem o nome function, mas visualmente da para perceber o nome próximo aos parenteses e o corpo entre chaves que indicam uma função.
    fala() {
        console.log(`A minha idade atual é ${this.idade}`)
    },

    incrementaIdade() {         // isso se chama método
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();