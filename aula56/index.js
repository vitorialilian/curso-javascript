// // Factory Function (Função fábrica)
// function criaPessoa(nome, sobrenome, altura, peso) {
//     return {
//         nome, 
//         sobrenome,
//         fala:(assunto) => {
//             return `${nome} está ${assunto}.`;
//         },
//         altura: altura,
//         peso: peso,
//         imc() {
//             const indice = this.peso / (this.altura ** 2);
//             return indice.toFixed(2);
//         }
//     };
// }

// const p1 = criaPessoa('Luiz', 'Otávio', 1.80, 80);
// console.log(p1.imc());
// const p2 = criaPessoa('Maria', 'Joaquina', 1.60, 50);
// console.log(p2.fala('falando sobre JS'));
// console.log(p2.imc());

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,

        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala(assunto = 'falando sobre nada') {
            return `${this.nome} está ${assunto}.`;
        },
        altura: altura,
        peso: peso,

        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

//const p1 = criaPessoa('Luiz', 'Otávio', 1.80, 80);
// p1.nomeCompleto = 'Maria Oliveira Silva'
// //console.log(p1.nomeCompleto);
// console.log(p1.nome);
// console.log(p1.sobrenome);
// //console.log(p1.imc);
// console.log(p1.fala());

const p1 = criaPessoa('Luiz', 'Otávio', 1.80, 80);
const p2 = criaPessoa('João', 'Otávio', 1.90, 57);
const p3 = criaPessoa('Junior', 'Otávio', 1.50, 110);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);


