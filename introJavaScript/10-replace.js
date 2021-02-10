console.log("Trabalhando com replace:\n");

// variavel.replace('valor', 'substituição');

const cpfPadrao = '12345679810';

const cpfModelado = cpfPadrao.replace('12345679810', '098.445.525-62');
console.log(cpfModelado);

const cpfMascara = cpfPadrao.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4");
console.log(cpfMascara);

// Situação inesperada:

const frase = 'Frase com uma palavra-feia e mais palavra-feia'; // só na primeira

const fraseMod = frase.replace('palavra-feia', '************');
const fraseRegex = frase.replace(/palavra-feia/g, '++++++++++++');
//O /g no final da regex indica que queremos buscar de forma global.

console.log(`FraseMod: ${fraseMod}, \nfraseRegex: ${fraseRegex}`);
