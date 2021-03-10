var randomNumbers = [];
var numbers;
var userScore = 0;
var scoreMax = 84;
// 1-CREAZIONE ARRAY CON 16 NUMERI RANDOM
// FUNZIONE NUMERI RANDOM
function randomInt(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

while ( randomNumbers.length < 16) {

  numbers = randomInt(1,100);

  if (randomNumbers.includes(numbers) == false) {

  randomNumbers.push(numbers);

  }


}
console.log(randomNumbers);



// INTERAZIONE UTENTE - SELEZIONE NUMERI DA 1 A 100

var i = 1;
while ( i <= scoreMax && randomNumbers.includes(userNumber) == false ){
var userNumber = parseInt(prompt("Inserisci un numero da 1 a 100"));
i++
if (randomNumbers.includes(userNumber)) {
  console.log("Boom! Hai perso!");
  
}
else{
  userScore += 1;
}

}
console.log("Score = " + userScore);
