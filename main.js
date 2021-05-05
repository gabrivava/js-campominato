//Istuzioni:

//Il computer deve generare 16 numeri casuali tra 1 e 100.
//funzione numeri casuali
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
/* 
BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50
 */
var difficoltà = prompt('inserisci il livello di difficoltà [0, 1, 2]');
while (difficoltà < 0 || difficoltà > 2) {
    alert('devi inserire un numero tra [0, 1, 2]');
}
var limite;
switch (difficoltà) {
    case 1:
        limite = 80;
        break;
    case 2:
        limite = 50;
        break;
    default:
        limite = 100;
        break;
}

var bombe = [];
while (bombe.length < 16) {
    var numeroBomba = getRandomNumber(1, limite);
    // i numeri non possono essere duplicati
    if (!bombe.includes(numeroBomba)) {
        bombe.push(numeroBomba);
    }
}
console.log(bombe);

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
var arrayUtente = [];
while (arrayUtente.length < (limite - 16)) {
    var numeroUtente = Number(prompt('Inserisci un numero compreso tra 1 e 100'));
    while (numeroUtente < 1 || numeroUtente > 100 || isNaN(numeroUtente)) {
        alert ('numero non corretto riprova');
        numeroUtente = Number(prompt('Inserisci un numero compreso tra 1 e 100'));
    }
    // Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
    if (bombe.includes(numeroUtente)) {
        alert('hai preso una bomba 💣' + ' punteggio: ' + arrayUtente.length);
        break
    }
    // L’utente non può inserire più volte lo stesso numero.
    if (!arrayUtente.includes(numeroUtente)) {
        arrayUtente.push(numeroUtente);
    }  else {
        alert('hai già inserito questo numero');
    }
    console.log(arrayUtente);
}
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
//Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
if (arrayUtente.length == (limite - 16)) {
    alert('complimenti hai vinto 🎆' + ' punteggio: ' + arrayUtente.length);
}
