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
        super(nome);

        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }

    ligar() {
        console.log('Olha, você alterou o método ligar.');
    }

    mensagemTelaInicial() {
        console.log('Olá, seja Bem-vinda novamente!');
    }
}

const smarthphone1 = new Smarthphone('Samsung', 'Preto', 'Galaxy S10');
console.log(smarthphone1);

const tablet1 = new Tablet('Multilaser', true);
tablet1.ligar();
tablet1.mensagemTelaInicialtelaInicial();
console.log(tablet1);