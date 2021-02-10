/*Criando aplicações para fixação do conteúdo:
 * ******************************************
 */

console.log("Exercícios para fixação:\n\n");


console.log("Teatro Tickets.\n");
const cadeiras = 28;
const participantes = 27;
let disponiveis = cadeiras - participantes;

if (cadeiras >= participantes) {
    console.log(`\nExistem ${disponiveis} cadeiras disponíveis.`);
    if (disponiveis == 0) {
        console.log(`\nA sala está totalmente ocupada.`);
    }
} else {
    console.log(`\nA sala não suporta ${participantes} participantes, pois não há quantidade de assentos.`);
    console.log(`\nQuantidade máxima de: ${cadeiras} participantes.`)
} 

// Loopings
console.log("\n\n\n--------------------------------");
console.log("Lista de livros do HP\n")

const listaLivros = new Array(
    "e a pedra filosofal",
    "e a câmara secreta.",
    "e o prisioneiro de Azkaban",
    "e o cálice de fogo",
    "e o enigma do príncipe",
    "e a ordem da fênix",
    "e as Relíquias da morte."
);

let contador = 0;

while(contador < listaLivros.length){
    console.log(contador + 1, "Harry Potter", listaLivros[contador])
    contador++;
}

