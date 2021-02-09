console.log("Trabalhando com listas");

// Modo comum de declaração:

// const salvador = 'Salvador';
// const saoPaulo = 'São Paulo';
// const rioDeJaneiro = 'Rio de Janeiro';

// console.log("Destinos possíveis:");

// console.log(salvador, saoPaulo, rioDeJaneiro);

//Criando lista (Array):

const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro",
);

console.log("Destinos possíveis:");

listaDeDestinos.push('Bahia');

console.log(listaDeDestinos);
