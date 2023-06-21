function teste() {
    console.log('Este é meu teste.');
}

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
        teste();
    }

    // método de instância
    aumentarVolume() {
        this.volume += 2;
    }

    // método de instância
    diminuirVolume() {
        this.volume -= 2;
    }

    // método estático
    static trocarPilha() {
        console.log('Ok, vou trocar');
    }
}


const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);

ControleRemoto.trocarPilha();