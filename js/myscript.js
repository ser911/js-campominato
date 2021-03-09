// 1-CREAZIONE ARRAY CON 16 NUMERI RANDOM
var randomNumbers = [];

function randomInt(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (var i = 1; i <= 16; i++) {
  var numbers;
  randomNumbers = randomInt(1,100);

  if (numbers !== randomNumbers[i]) {
  numbers += randomNumbers[i];

  }

  console.log(numbers);
}
