import validator from 'validator';

export default class CriarContato {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }
    
    init() {
        this.events()
    };

    events() {
        if(!this.form) return;
        this.form.addEventListener('submit', event => {
            event.preventDefault();
            this.validate(event);
        });
    }

    validate(event) {
        const element = event.target;
        const nomeInput = element.querySelector('input[name="nome"]');
        const sobrenomeInput = element.querySelector('input[name="sobrenome"]');
        const emailInput = element.querySelector('input[name="email"]');
        const telefoneInput = element.querySelector('input[name="telefone"]');

        let error = false;

        if(!nomeInput.value) {
            alert('Campo nome é obrigatório');
            error = true;
        }

        
        if(!emailInput.value && !telefoneInput.value) {
            alert('Pelo menos um contato precisa ser enviado: e-mail ou telefone.');
            error = true;
        }

        if(emailInput.value && !validator.isEmail(emailInput.value)) {
            alert('Email inválido');
            error = true;
        }


        if(!error) element.submit();

    }
}