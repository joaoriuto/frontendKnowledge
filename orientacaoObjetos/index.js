/**
 * Orientação a objetos em javascript - Alura - Mestre Ricardo Bugan
 *  - Projeto Byte Bank -
 */

// Classes e Objetos

class Cliente {
    nome;
    cpf;
    agencia;
    saldo;
    rg;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "João";
cliente1.cpf = 392745;
cliente1.agencia = 1010;
cliente1.saldo = 1000000;
cliente1.rg = 2345462;

cliente2.nome = "Vera";
cliente2.cpf = 6789780;
cliente2.agencia = 1010;
cliente2.saldo = 6789678;
cliente2.rg = 45674567;

console.log(cliente1, "\n", cliente2);
