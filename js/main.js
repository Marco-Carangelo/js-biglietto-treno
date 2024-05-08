'use strict';

//Dichiarazione delle variabili

const userDistance = parseInt(Number(prompt("Inserire la distanza che si vuole percorrere")));
const userAge = parseInt(Number(prompt("Inserire l'età")));
let fullPrice = 0;

//Struttura di controllo per verificare che i dati inseriti siano validi

if ((userDistance <= 0 || userAge <= 0) || (isNaN(userDistance) || isNaN(userAge))) {

    alert("Si accettano solo numeri interi positivi per distanza ed età. Ripetere la procedura inserendo valori validi");
    location.reload();

}


//Stampa in console dei risultati

console.log(`

********CALCOLO BIGLIETTO TRENO*******

Distanza inserita: ${userDistance}
Età inserita: ${userAge}



`)