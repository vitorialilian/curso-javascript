function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.cliqueBotoes();
        this.pressionaEnter();
    };

    this.pressionaEnter = function () {
        this.display.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                this.realizaConta();
            }
        });
    };

    this.realizaConta = function () {
        let conta = this.display.value;

        try {
            conta = eval(conta);

            if (!conta) {
                alert('Conta Inválida');
                return;
            }

            this.display.value = String(conta);
        } catch (e) {
            alert('Conta Inválida');
            return;
        }
    };

    this.clearDisplay = () => this.display.value = '';

    this.deleteOne = function () {
        this.display.value = this.display.value.slice(0, -1);
    };


    this.cliqueBotoes = () => {
        document.addEventListener('click', event => {
            const el = event.target;

            if (el.classList.contains('button-number')) this.buttonsforDisplay(el);
            
            if (el.classList.contains('button-clear')) this.clearDisplay();
        
            if (el.classList.contains('button-delete')) this.deleteOne(el);

            if (el.classList.contains('button-equal')) this.realizaConta(el);
        });
    },

        this.buttonsforDisplay = (el) => this.display.value += el.innerText;
};
};

const calculadora = new Calculadora();
calculadora.inicia();