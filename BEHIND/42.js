
//HOISTING AND PRACTICE FOR THAT
'use strict';

console.log(me);

var me = 'Jonas';
let job = 'teacher';
const year = 1978;

console.log(addDecl(2, 3));
console.log(addArrow);


function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

