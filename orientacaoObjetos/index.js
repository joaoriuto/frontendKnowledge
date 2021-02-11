/**
 * Orientação a objetos em javascript - Alura - Mestre Ricardo Bugan
 *  - Projeto Byte Bank -
 */

// Classes e Objetos

class Cliente {
    nome;
    cpf;   
}

class ContaCorrente {
    agencia;
    _saldo;

    sacar(valor) {
        if(this._saldo >= valor) {
            this._saldo -= valor;
        } else (
            console.log("Saldo insuficiente.")
        )
    }

    depositar(valor) {
       if(valor > 0 ){
           this._saldo += valor;
       } else {
           console.log("O valor não é suportado.");
       }
    }
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

const contaCorrenteJoao = new ContaCorrente();
contaCorrenteJoao._saldo = 0;
contaCorrenteJoao.agencia = 1010;

console.log(contaCorrenteJoao._saldo);
contaCorrenteJoao.depositar(500);
console.log(contaCorrenteJoao._saldo);

cliente1.nome = "João";
cliente1.cpf = 392745;


cliente2.nome = "Vera";
cliente2.cpf = 6789780;


console.log(cliente1, "\n", cliente2);
