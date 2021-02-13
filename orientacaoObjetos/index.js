/**
 * Orientação a objetos em javascript - Alura - Mestre Ricardo Bugan
 *  - Projeto Byte Bank -
 */
import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente();
const cliente2 = new Cliente();

const contaCorrenteJoao = new ContaCorrente();
contaCorrenteJoao._saldo = 0;
contaCorrenteJoao.agencia = 1010;
contaCorrenteJoao.cliente = cliente1;

contaCorrenteJoao.depositar(5500);


cliente1.nome = "João";
cliente1.cpf = 392745;

const contaCorrenteVera = new ContaCorrente();
contaCorrenteVera.cliente = cliente2;
contaCorrenteVera._saldo = 0;
cliente2.nome = "Vera";
cliente2.cpf = 6789780;
contaCorrenteVera.agencia = 101011;

// const valorSacado = contaCorrenteJoao.sacar(42);
// console.log(`Saque no valor de: R$ ${valorSacado} realizado com sucesso!`);
// console.log(`O saldo atual é: R$ ${contaCorrenteJoao._saldo}`);

contaCorrenteJoao.transferir(2500, contaCorrenteVera);
console.log(contaCorrenteJoao, "\n", contaCorrenteVera);
