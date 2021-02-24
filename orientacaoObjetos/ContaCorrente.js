import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0;
    agencia;
    _cliente;

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }



    // Boa prática a separação do que é exposto
    _saldo = 0; // Modo private

    get saldo() {
        return this._saldo;
    }

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas ++;
    }


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