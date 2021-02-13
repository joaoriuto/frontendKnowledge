export class ContaCorrente {
    agencia;
    cliente;

    // Boa prática a separação do que é exposto
    _saldo; // Modo private

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor; // Retorna o valor para o cliente
        } else (
            console.log("Saldo insuficiente.")
        );
    };

    depositar(valor) {
        if (valor <= 0) {
           return console.log("O valor não foi aceito.");
        } else {
            this._saldo += valor;
        };
    };

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

}; // fim classe