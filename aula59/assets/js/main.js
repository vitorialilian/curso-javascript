function Calculadora() {
        const display = document.querySelector('.display');
        
        this.inicia = function() {
            this.cliqueBotoes();
            this.pressionaEnter();
        };

        this.pressionaEnter = function() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        };

        this.realizaConta = function() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(!conta) {
                    alert('Conta Inválida');
                    return;
                }
                
                this.display.value = String(conta);
            } catch(e) {
                alert('Conta Inválida');
                return;
            }
        };
        
        this.clearDisplay = function() {
            this.display.value = '';
        };

        this.deleteOne = function() {
            this.display.value = this.display.value.slice(0, -1);
        };


        this.cliqueBotoes = function() {
            document.addEventListener('click', e => {
                const el = e.target;

                if (el.classList.contains('button-number')) {
                    this.buttonParaDisplay(el.innerText);
                }

                if (el.classList.contains('button-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('button-delete')) {
                    this.deleteOne();
                }

                if (el.classList.contains('button-equal')) {
                    this.realizaConta();
                }

                this.display.focus();
            });
        }, 

        this.buttonParaDisplay = function(valor) {
            this.display.value += valor;
        }
    };
}

const calculadora = new Calculadora();
calculadora.inicia();