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

const cliente1 = new Cliente();
const cliente2 = new Cliente();

const contaCorrenteJoao = new ContaCorrente();
contaCorrenteJoao._saldo = 0;
contaCorrenteJoao.agencia = 1010;

contaCorrenteJoao.depositar(500);


cliente1.nome = "João";
cliente1.cpf = 392745;


cliente2.nome = "Vera";
cliente2.cpf = 6789780;

const valorSacado = contaCorrenteJoao.sacar(42);
console.log(`Saque no valor de: R$ ${valorSacado} realizado com sucesso!`);
console.log(`O saldo atual é: R$ ${contaCorrenteJoao._saldo}`);

console.log(cliente1, "\n", cliente2);
