//CHALLENGE 3

//PART A

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
   console.log('Dolphins win the trophy ');

} else if (scoreKoalas > scoreDolphins) {
   console.log('Koalas win the trophy ');

} else if (scoreDolphins === scoreKoalas) {
   console.log('Both win the trophy!');
 }

//PART B
const scoreDolphins1 = (97 + 112 + 80) / 3;
const scoreKoalas1 = (109 + 95 + 50) / 3;
console.log(scoreDolphins1, scoreKoalas1);

if (scoreDolphins1> scoreKoalas1 && scoreDolphins1 >= 100) {
  console.log('Dolphins win the trophy ');
} else if (scoreKoalas1 > scoreDolphins1 && scoreKoalas1 >= 100) {
  console.log('Koalas win the trophy ');
} else if (scoreDolphins1 === scoreKoalas1 && scoreDolphins1 >= 100 && scoreKoalas1 >= 100) {
  console.log('Both win the trophy!');
} else {
  console.log('No one wins the trophy ');
}
