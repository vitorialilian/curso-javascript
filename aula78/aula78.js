// Polimorfismo

// Superclasse, ou classe mãe, classe pai
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: ${this.saldo}`);
        this.verSaldo();
        return; 
    }

    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function() {
    console.log(
        `Agência/conta: ${this.agencia}/${this.conta} | ` +
        `Saldo:R$ ${this.saldo.toFixed(2)}`
    );
};

const contaCorrente1 = new ContaCorrente(11, 22, 0, 100);
contaCorrente1.depositar(15);
contaCorrente1.sacar(22);
contaCorrente1.sacar(50);

