console.log(`\nTrabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Distrito Federal`
);

const idadeComprador = 18;
const estaAcompanhado = false;
let temPassagem = false;
const destino = "Salvador";
const podeComprar = idadeComprador >= 18 || estaAcompanhado;
let contador = 0;
let destinoExiste = false;

console.log("\nDestinos possíveis:");
console.log(listaDeDestinos);

while (contador < listaDeDestinos.length) {
    if (listaDeDestinos[contador] == destino) {
        console.log(`O destino ${destino} está disponível.`);
        destinoExiste = true;
        break;
    } else {
        console.log(`O destino ${destino} não está disponível.`)
    };
    contador++;
}

if (podeComprar && destinoExiste) {
    console.log("\nBoa Viagem!");
} else { 
    console.log("\nDesculpe, houve um erro!");
};

for(let cont = 0; cont < listaDeDestinos.length; cont++) {
    if(listaDeDestinos[cont] == destino) {
        destinoExiste = true;
    }
}