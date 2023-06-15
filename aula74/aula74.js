// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomeCompleto = () => 'ORIGINAL:' + this.nome + ' ' + this.sobrenome;
}


Pessoa.prototype.nomeCompleto = function () {
    return this.nome + ' ' + this.sobrenome;
};

// instância
const pessoa1 = new Pessoa('Vitória', 'L.'); // <- Pessoa = Função construtora
const pessoa2 = new Pessoa('Jonas', 'A.');
const data = new Date(); // <- Date = Função construtora

console.dir(pessoa1);
console.log(pessoa2);
console.dir(data);