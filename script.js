'use strict';

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //never do this. this function will be carried with every instance
  this.calAge = function () {
    console.log(2021 - this.birthYear);
  };
};

// to call a constructor function use "new"
const josh = new Person('Josh', 1989);
console.log(josh);
/*
1) new object is created
2) funct called with this pointing to the obj
3){} is linked to prototype
4)function auto returns the {}
*/

const bethany = new Person('Bethany', 1995);
const aralai = new Person('Aralai', 2016);
console.log(bethany, aralai);
const tim = 'Tim';

console.log(josh instanceof Person);
console.log(tim instanceof Person);
// ^ returns bool
