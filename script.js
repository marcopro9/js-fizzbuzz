// variabile per stampare il risultato
var risultato = document.getElementById('risultato');

// inizio il ciclo per contare da 1 a 100
for (var i = 1; i <= 100; i++) {
  // prima condizione: stampa fizzbuz ogni multiplo di 3 e 5
  if (i % 15== 0) {
    risultato.innerHTML += '<li>' + "FIZZBUZZ" + '</li>';
  }
    // seconda condizione: stampa fizz ogni multiplo di 3
    else if (i % 3 == 0) {
      risultato.innerHTML += '<li>' + "fizz" + '</li>';
    }
      // terza condizione: stampa buzz ogni multiplo di 5
      else if (i % 5 == 0) {
        risultato.innerHTML += '<li>' + "buzz" + '</li>';
      }
      // altrimenti stampa tutti i numeri fino a 100
      else{
        risultato.innerHTML += '<li>' + i + '</li>';
      }
}
