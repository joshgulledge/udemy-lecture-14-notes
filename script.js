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

/*

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

// firstCar.accelerate();
// secondCar.accelerate();

// firstCar.brake();
// secondCar.brake();

// ------  classes  ------

// class expression

const PersonCl = class {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calAge() {
    const age = 2021 - this.birthYear;
    console.log(age);
  }
  //  when you put a method outside of the sonstructor--
  // --its going to .protoype and not the object.

  get futureAge() {
    return 2050 - this.birthYear;
  }

  // setting a property thats already declared
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else {
      alert(`${name} is not a full name`);
    }
  }

  get fullName() {
    return this._fullName;
  }
};

const timothy = new PersonCl('Timothy Moore', 1989);
timothy.calAge();
console.log(timothy.futureAge);

// class declaration

class PeopleCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // static method- not on the prototype and not inherited
  static hey() {
    console.log('Hello there');
  }
}

PeopleCl.prototype.greet = function () {
  console.log(`${this.firstName} wants to say hello.`);
};

const genre = new PeopleCl('Genre', 1994);

// console.log(timothy, genre);
genre.greet();

const bankAcc = {
  owner: 'Josh',
  cashFlow: [25, 900, 12, 45, 500],

  get latest() {
    return this.cashFlow.pop();
  },

  // setters need one argument
  set latest(cash) {
    this.cashFlow.push(cash);
  },
};

// both getters and setters are like a property
console.log(bankAcc.latest);
bankAcc.latest = 62;
console.log(bankAcc.latest);

*/

// ------ Object . create ------

/*
// will be a prototype so put proto in name
const PersonProto = {
  calAge() {
    const age = 2021 - this.birthYear;
    console.log(age);
  },

  // this helps make it easier to declare properties
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
  // ^ NOT a constructor function.
};

const jacob = Object.create(PersonProto);
// ^ manually sets the prototype for the object

jacob.name = 'Jacob';
jacob.birthYear = 2003;
jacob.calAge();

const beth = Object.create(PersonProto);
beth.init('Beth', 1995);
beth.calAge();

*/

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

const Car = class {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.speed} km/h`);
  }

  get mph() {
    const mphSpeed = this.speed / 1.6;
    console.log(`${mphSpeed} mph`);
  }

  set newSpeed(speed) {
    this.speed = speed * 1.6;
    console.log(`${this.speed} km/h`);
  }
};

const car1 = new Car('Ford', 120);
car1.accelerate();
car1.brake();
car1.mph;
car1.newSpeed = 80;
