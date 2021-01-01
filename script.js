'use strict';

/*

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // //never do this. this function will be carried with every instance
  //   this.calAge = function () {
  //     console.log(2021 - this.birthYear);
  //   };
  //  --instead put it in the protype, it will be inherited
};

// to call a constructor function use "new"
const josh = new Person('Josh', 1989);
console.log(josh);
// 
// 1) new object is created
// 2) funct called with this pointing to the obj
// 3){} is linked to prototype
// 4)function auto returns the {}
// 

const bethany = new Person('Bethany', 1995);
const aralai = new Person('Aralai', 2016);
console.log(bethany, aralai);
const tim = 'Tim';

console.log(josh instanceof Person);
console.log(tim instanceof Person);
// ^ returns bool

// ------  Prototypes  ------

Person.prototype.calAge = function () {
  console.log(2021 - this.birthYear);
};

console.log(Person.prototype);

josh.calAge();
bethany.calAge();

Person.prototype.species = 'Human';

// console.log(josh.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(josh));
// console.log(Person.prototype.isPrototypeOf(Person));
console.log(josh.__proto__.__proto__);
// console.log(josh.__proto__.__proto__.__proto__);

const theArr = [2, 2, 4, 5, 5, 6, 8, 8, 10];
console.log(theArr.__proto__);
console.log(theArr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
// ^ dont make this a habbit

console.log(theArr.unique());

*/

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  const newSpeed = this.speed + 10;
  //   this.speed += 10
  console.log(
    `The speed of the ${this.make} accerated from ${this.speed} to ${newSpeed}.`
  );
  this.speed = newSpeed;
};

Car.prototype.brake = function () {
  const newSpeed = this.speed - 5;
  //   this.speed -= 5
  console.log(
    `The speed of the ${this.make} decreased from ${this.speed} to ${newSpeed}.`
  );
  this.speed = newSpeed;
};

const firstCar = new Car('BMW', 120);
const secondCar = new Car('Mercedes', 95);

firstCar.accelerate();
secondCar.accelerate();

firstCar.brake();
secondCar.brake();
