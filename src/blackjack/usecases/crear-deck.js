import _ from "underscore";


/**
 * 
 * @param {array<String>} tiposDeCarta 
 * @param {array<String>} tiposEspeciales 
 * @returns {array<String>} retorna un deck de cartas
 */


//esta funcion crea un deck
export const crearDeck = (tiposDeCarta,tiposEspeciales) => {
    let deck = [];
        if (!tiposDeCarta || tiposDeCarta.lenght === 0 ) 
        throw new console.Error('Tipos de carta Obligatorio como un arreglo de string');

        if (!tiposEspeciales || tiposEspeciales.lenght === 0 ) 
        throw new console.Error('TTipos de carta Obligatorio como un arreglo de string');

       
   

    for (let i = 2; i <= 10; i++) {

        for (let tipo of tiposDeCarta) {
            deck.push(i + tipo)
        }
    }

    for (let tipo of tiposDeCarta) {
        for (let esp of tiposEspeciales) {
            deck.push(esp + tipo)
        }
    }

    // console.log(deck);
     deck = _.shuffle(deck);

     return deck;

}

