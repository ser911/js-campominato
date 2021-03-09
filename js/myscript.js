// 1-CREAZIONE ARRAY CON 16 NUMERI RANDOM
var numbers;
var randomNumbers = [];

function randomInt(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (var i = 1; i <= 16; i++) {

  randomNumbers = randomInt(1,100);
  console.log(randomNumbers);
}
