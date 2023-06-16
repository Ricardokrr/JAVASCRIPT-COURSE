
//OPERATIONS ARRAYS BASIC AND ELEMENTS ADD / REMOVE 

//IS THIS ADD
const friends = ['Michael', 'Steven', 'Peter'];

const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);




//IS THIS REMOVE
friends.pop(); 
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); 
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}

