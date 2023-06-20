'use strict';

//CONSTRUCTOR FUNCIONS

const Person = function (firstName, birthYear) {
  
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(jonas instanceof Person);

Person.hey = function () {
  console.log('Hey there');
  console.log(this);
};
Person.hey();