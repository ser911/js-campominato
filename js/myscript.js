// ELENCO VARIABILI
var randomNumbers = [];
var numbers;
var userScore = 0;
var level = 84;
var userDiff;
// DEFINIZIONE FUNZIONE RANDOM
function randomInt(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;

}
// INPUT DIFFICOLTA' A 3 USCITE: 0,1,2
do {
  var userDiff = parseInt(prompt("Scegli un livello di difficoltà: 0, 1, 2"))

} while (userDiff !== 0 && userDiff !== 1 && userDiff !==2  ){
  // LIVELLO DI DIFFICOLTA' 1


  if (userDiff == 1) {
    var level = 64;
    while ( randomNumbers.length < 16) {

      numbers = randomInt(1,80);

      if (randomNumbers.includes(numbers) == false) {

        randomNumbers.push(numbers);

      }


    }
    console.log(randomNumbers);



    // INTERAZIONE UTENTE - SELEZIONE NUMERI DA 1 A 80

    var i = 1;
    while ( i <= level && randomNumbers.includes(userNumber) == false ){

      var userNumber = parseInt(prompt("Inserisci un numero da 1 a 100"));
      i++;

      if (randomNumbers.includes(userNumber)) {
        console.log("Boom! Hai perso!");

      }
      else{
        userScore += 1;
      }

    }
    console.log("Score = " + userScore);
  }
  }

  // LIVELLO DI DIFFICOLTA' 2
  if (userDiff == 2) {
    var level = 36;
    while ( randomNumbers.length < 16) {

      numbers = randomInt(1,50);

      if (randomNumbers.includes(numbers) == false) {

        randomNumbers.push(numbers);

      }


    }
    console.log(randomNumbers);



    // INTERAZIONE UTENTE - SELEZIONE NUMERI DA 1 A 50

    var i = 1;
    while ( i <= level && randomNumbers.includes(userNumber) == false ){

      var userNumber = parseInt(prompt("Inserisci un numero da 1 a 100"));
      i++;

      if (randomNumbers.includes(userNumber)) {
        console.log("Boom! Hai perso!");

      }
      else{
        userScore += 1;
      }

    }
    console.log("Score = " + userScore);

  }
  // LIVELLO DI DIFFICOLTA' 0

  else {
    while ( randomNumbers.length < 16) {

      numbers = randomInt(1,100);

      if (randomNumbers.includes(numbers) == false) {

        randomNumbers.push(numbers);

      }


    }
    console.log(randomNumbers);



    // INTERAZIONE UTENTE - SELEZIONE NUMERI DA 1 A 100

    var i = 1;
    while ( i <= level && randomNumbers.includes(userNumber) == false ){

      var userNumber = parseInt(prompt("Inserisci un numero da 1 a 100"));
      i++;

      if (randomNumbers.includes(userNumber)) {
        console.log("Boom! Hai perso!");

      }
      else{
        userScore += 1;
      }

    }
    console.log("Score = " + userScore);


}
