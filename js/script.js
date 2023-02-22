/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana 
(con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca.
*/

/*
-chiedi all'utente il numero di km che vuole percorrere e memorizziamo
-chiedi all'utente l'età del passeggero e memorizziamo
-calcola il prezzo del biglietto (0.21 € * km)

-calcola il prezzo finale del biglietto in base all'età:
? SE l'età è inferiore a 18 anni
  °stampa prezzo biglietto con sconto del 20%
? ALTRIMENTI SE l'età è inferiore ai 65 anni
  °stampa prezzo biglietto privo di sconto
  ALTRIMENTI (cioè l'età è pari o superiore ai 65)
  °stampa prezzo del biglietto con sconto del 40%

*/

let km = prompt("quanti km hai intenzione di percorrere?")

// console.log(km)

let age = prompt("quanti anni hai?");

// console.log(age)

let firstPrice = (km * 0.21);

// console.log (firstPrice)

let finalPrice;

if (age < 18) {

    finalPrice = ((firstPrice / 100) * 80)

    // console.log (finalPrice)

    // console.log (finalPrice.toFixed(2))

    document.writeln(`prezzo intero del biglietto: ${firstPrice.toFixed(2)}. <br>
    per gli under 18 è previsto uno sconto del 20%. <br>
    prezzo finale del biglietto: ${finalPrice.toFixed(2)}
    `)

} else if (age < 65) {

    finalPrice = firstPrice

    // console.log (finalPrice)

    // console.log (finalPrice.toFixed(2))

    document.writeln(`prezzo intero del biglietto: ${firstPrice.toFixed(2)}. <br>
    per gli under 65 non è previsto uno sconto. <br>
    prezzo finale del biglietto: ${finalPrice.toFixed(2)}.
    `)

} else {

    finalPrice = ((firstPrice / 100) * 60)

    // consolelog (finalPrice)

    // console.log (finalPrice.toFixed(2))
    
    document.writeln(`prezzo intero del biglietto: ${firstPrice.toFixed(2)}. <br>
    per gli over 65 è previsto uno sconto pari al 40%. <br>
    prezzo finale del biglietto: ${finalPrice.toFixed(2)}.
    `)
}