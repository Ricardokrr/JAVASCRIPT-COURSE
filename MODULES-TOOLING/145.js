// Exporting and Importing in ES6 Modules

console.log('Importing module');
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);
