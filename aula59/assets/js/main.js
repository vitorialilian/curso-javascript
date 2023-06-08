function Calculadora() {
    this.display = document.querySelector('.display');
    
    this.inicia = () => {
        this.cliqueBotoes();
        this.capturaEnter();
    };
    
    this.buttonsforDisplay = (el) => {
        this.display.value += el.innerText;
        this.display.focus();
    };
    
    this.capturaEnter = () => {
        this.display.addEventListener('keyup', e => {
            if (e.key !== 13) {
                this.realizaConta();
            }
        });
    };

    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value);

            if (!conta) {
                alert('Conta Inválida');
                return;
            }
            
            this.display.value = (conta);

        } catch (e) {
            alert('Conta Inválida');
            return;
        }
    };

    this.clearDisplay = () => this.display.value = '';

    this.deleteOne = () => this.display.value = this.display.value.slice(0, -1);

    this.cliqueBotoes = () => {
        document.addEventListener('click', event => {
            const el = event.target;

            if (el.classList.contains('button-number')) this.buttonsforDisplay(el);

            if (el.classList.contains('button-clear')) this.clearDisplay();

            if (el.classList.contains('button-delete')) this.deleteOne();

            if (el.classList.contains('button-equal')) this.realizaConta(el);
        });
    };
};

const calculadora = new Calculadora();
calculadora.inicia();