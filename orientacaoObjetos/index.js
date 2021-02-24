/**
 * Orientação a objetos em javascript - Alura - Mestre Ricardo Bugan
 *  - Projeto Byte Bank -
 */
import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("João", 4733324256);
const cliente2 = new Cliente("Maria", 8920490234);

const contaCorrenteJoao = new ContaCorrente(1010, cliente1);
const contaCorrenteVera = new ContaCorrente(10101, cliente2);

contaCorrenteJoao.depositar(5500);

// const valorSacado = contaCorrenteJoao.sacar(42);
// console.log(`Saque no valor de: R$ ${valorSacado} realizado com sucesso!`);
// console.log(`O saldo atual é: R$ ${contaCorrenteJoao._saldo}`);

contaCorrenteJoao.transferir(2500, contaCorrenteVera);
console.log(cliente1, "\n", cliente2);
console.log(contaCorrenteJoao, "\n", contaCorrenteVera, "\n\n Contas ativas: ", ContaCorrente.numeroDeContas);
