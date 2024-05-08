'use strict';

//Dichiarazione delle variabili

const userDistance = parseInt(Number(prompt("Inserire la distanza che si vuole percorrere")));
const userAge = parseInt(Number(prompt("Inserire l'età")));
let fullPrice = 0;
let price = 0;
const kmPrice = 0.21;

//Struttura di controllo per verificare che i dati inseriti siano validi

if ((userDistance <= 0 || userAge <= 0) || (isNaN(userDistance) || isNaN(userAge))) {

    alert("Si accettano solo numeri interi positivi per distanza ed età. Ripetere la procedura inserendo valori validi");
    location.reload();

}

//Calcolo del prezzo pieno del biglietto

fullPrice = userDistance * kmPrice;

//Verifica diritto agli sconti

if (userAge < 18) {

    price = fullPrice * 0.8;
    console.log("L'utente ha diritto ad uno sconto del 20%");

} else {
    if (userAge > 65) {

        price = fullPrice * 0.6;
        console.log("L'utente ha diritto ad uno sconto del 40%");

    } else {

        price = fullPrice;
        console.log("L'utente non ha diritto a sconti");

    }

}

//Stampa in console dei risultati

console.log(`
********CALCOLO BIGLIETTO TRENO*******

Distanza inserita: ${userDistance}
Età inserita: ${userAge}

Prezzo pieno: ${fullPrice}

Prezzo dopo verifica sconti:${price}
`)