// Interpolação - Template string / template literals

const palavra = "Interpolação";

console.log(`Minha Template Literal ${palavra}`);

//Tagged Template: 

/** Chamada de função comum:
 * 
 *  minaFunction = (entrada) => {
 *      console.log(entrada);
 * } 
 * 
 * minhaFunction( `Texto a ser exibido.` );
 * 
 */

 // Utilizando a Tagged Template:

 /**
  *  minhaFunction `Texto como parâmetro`; -> Desta forma o texto passa a ser um Array.
  *  |
  *  --> minhaFunction ([`Texto como parâmetro`]);
  * 
  */

//   const arrayDeStrings = new Array(
//       "Estou gostando de estudar sobre",
//       "de dados."
//   );

  minhaFunction = (arrayDeStrings, palavra) => {
      console.log(`${arrayDeStrings[0]} ${palavra} ${arrayDeStrings[1]}`);
  }

  minhaFunction `Estou gostando de aprender sobre ${palavra} de dados.`;
  minhaFunction (['Gosto de como a' , 'consegue ser maleável.'], palavra);