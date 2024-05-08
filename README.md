# js-biglietto-treno

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana - con massimo due decimali, per indicare centesimi sul prezzo.
Questo richiederà un minimo di ricerca.
Il risultato andrà visualizzato in un apposito elemento <p> del  codice HTML.

Risoluzione:
1. Definiamo due variabili, una per la distanza (userDistance) ed una per l'età (userAge) ed acquisiamo i valori tramite prompt.
2. Ci assicuriamo che i due valori siano due numeri interi,positivi maggiori di 0.

    2.1 Mi assicuro che i dati siano numeri usando number() e che siano interi usando Parseint() durante l'assegnazione stessa

    2.2 Creo una breve struttura di controllo per verificare che i valori siano validi: 

        If((distanza è minore o uguale 0 || età è minore o uguale a 0) || (distanza è uguale a NaN || età è uguale a NaN) ){

            Scrivo un messaggio di errore chiedendo all'utente di inserire valori validi e ricarico la pagina.
        }

3. Calcoliamo il prezzo pieno del biglietto e lo inseriamo in una variabile (price).
4. Usiamo due strutture If Else nidificate per verificare se l'utente ha diritto a degli sconti in base all'età ed usiamo la funzione       toFixed() per arrotondare il risultato alla seconda cifra decimale:

    if (età è minore di 18){
        4.1 Stampiamo il prezzo con uno sconto del 20% moltiplicando il prezzo pieno per 0,8 
    }else if(età è maggiore di 65){

            4.2 Stampiamo il prezzo con uno sconto del 40% moltiplicando il prezzo pieno per 0,6

            }else{

                4.3 Stampiamo direttamente il prezzo pieno
            }