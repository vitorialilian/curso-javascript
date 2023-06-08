function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        
        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        realizaConta() {
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
        },

        clearDisplay() {
            this.display.value = ' ';
        },

        deleteOne() {
            this.display.value = this.display.value.slice(0, -1);
        },


        cliqueBotoes() {
            document.addEventListener('click', (e) => {
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
            });
        }, 

        buttonParaDisplay(valor) {
            this.display.value += valor;
        }
    }
}

const calculadora = criaCalculadora();
calculadora.inicia();