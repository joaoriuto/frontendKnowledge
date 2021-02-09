console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 13;
const estaAcompanhado = true;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1, 1); //splice remove o item
// } else if (estaAcompanhado) {
//     console.log("O menor de idade está acompanhado.");
//     listaDeDestinos.splice(1,1);
// } else {
//     console.log("Comprador é menor de idade, venda não autorizada.");    
// };

if (idadeComprador >= 18 || estaAcompanhado) {
    console.log("Boa viagem!");
    listaDeDestinos.splice(1, 1); //splice remove o item
} else {
    console.log("Comprador é menor de idade, venda não autorizada.");
};

const temPassagem = true;

console.log("Embarque: \n\n");
if(idadeComprador >= 18 && temPassagem) {
    console.log("Boa viagem!")
}else {
    console.log("Você não pode embarcar!")
};

console.log(listaDeDestinos);

