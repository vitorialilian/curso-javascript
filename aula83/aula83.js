class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }
    ligar() {
        if(this.ligado) {
            console.log(this.nome + ' já ligado');
            return;
        }
        
        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(this.nome + ' já desligado');
            return;
        }

        this.ligado = false;
    }
}

// const dispositivo1 = new DispositivoEletronico('Smarthphone');
// dispositivo1.ligar();
// dispositivo1.desligar();
// dispositivo1.desligar();
// console.log(dispositivo1);

class Smarthphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        // super(nome);

        this.cor = cor;
        this.modelo = modelo;
    }
}

const smarthphone1 = new Smarthphone('Samsung', 'Preto', 'Galaxy S10');
console.log(smarthphone1);