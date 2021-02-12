/**
 * Treinamento para fixação de ideias.
 * Projeto 001 - classes e objetos
 * - RPG HarryPotter
 */

// class Jogo extends Personagem {
//      spawnMobs() {

//      }
// }



class Personagem {
    nome;
    classe;
    tipoArma;
    bio;
    _pontosVida = 0;
    _pontosForca = 0;

    acrescentarVida (saude) {
        this._pontosVida += saude;
        return saude;
    }

    sofrerDano (dano) {
        this._pontosVida -= dano;
    }

    andar (passos) {
        return passos++
    };

    atacar (forcaAtaque) {
        if(forcaAtaque > 0){
            this._pontosForca += forcaAtaque;
        } else {
            this._pontosVida -= forcaAtaque;
        };
        return forcaAtaque;
    }
}

const harryTester = new Personagem();

harryTester.nome = "Zezin do bigBang";
harryTester.classe = "Magão Voador";
harryTester.tipoArma = "inteligẽncia";
harryTester.bio = "Bruxão maluco voador nascido em The Rivia";
harryTester.acrescentarVida(100);
harryTester.atacar(56);


console.log(harryTester);

