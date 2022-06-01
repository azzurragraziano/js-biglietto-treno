/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, 
per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.*/

// 1- RACCOLTA DATI E DEFIZIONE DELLE VARIABILI
// chiedere all'utente i km da percorrere e l'età del passeggero
const userKm = parseInt( prompt ("quanti Km devi percorrere?") );
const userAge = parseInt( prompt ("quanti anni hai?") );

// 2- LOGICA DELLA MIA APPLICAZIONE
// se l'utente è minorenne va applicato uno sconto del 20% sul prezzo del biglietto
// se l'utente è over 65 va applicato uno sconto del 40% sul prezzo del biglietto
// altrimenti il prezzo del biglietto è di (0.21 € al km)
let userMessage;
let discountedPrice;
let price = userKm * 0.21;
let youthDiscount = price * 20 / 100;
let seniorsDiscount = price * 40 / 100;

// calcolo il prezzo scontato in base all'età
if (userAge < 18) {
    discountedPrice = price - youthDiscount
} else if (userAge > 65) {
    discountedPrice = price - seniorsDiscount
} else {
    discountedPrice = price
}

// definisco che il prezzo non può avere più di due decimali
let finalPrice = discountedPrice.toFixed(2);

// calcolo il prezzo finale
if (userAge < 18) {
    userMessage = "il prezzo del biglietto, scontato del 20% è di " + finalPrice
} else if (userAge > 65) {
    userMessage = "il prezzo del biglietto, scontato del 40% è di " + finalPrice
} else {
    userMessage = "il prezzo del biglietto è di " + finalPrice
}

// 3- OUTPUT PER L'UTENTE
// messaggio per l'utente
document.getElementById("user-msg").innerHTML = userMessage