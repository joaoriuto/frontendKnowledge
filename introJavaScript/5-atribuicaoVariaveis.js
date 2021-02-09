console.log("Trabalhando com atribuição de variáveis");

const idade = 27;
const nome = "João";
const sobrenome = "Riuto";

// console.log(nome, sobrenome); <- Efeito de espaço entre 
// console.log(nome + sobrenome); <- Concatenação sem espaço

console.log(`Meu nome é ${nome} ${sobrenome}`);

const nomeCompleto = nome + sobrenome;

console.log(nomeCompleto);

/** Recomendações:
 *  -------------
 * -> Tentar manter sempre o mesmo estado, declarando como const.
 * -> Não trabalhar com tipos diferentes de dados na mesma variável do tipo let
 * -> Interpolar dados é uma maneira eficiente de economizar linhas.
 *  * 
 */

 let contador = 0;
 contador = contador + 1;

 let numero; //Declarando a variável
 numero = 26; //Atribuindo valor à variável
 numero = numero + 1; //Sobreescrevendo a variável

 console.log(numero);