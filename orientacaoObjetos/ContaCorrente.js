export class ContaCorrente {
    agencia;
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
}; // fim classe