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

*/

/*

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calAge = function () {
  console.log(2021 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  // this.firstName = firstName;
  // this.birthYear = birthYear;

  Person.call(this, firstName, birthYear);
  // ^better solution- but first we have to set the this--
  // keyword to the current object.

  this.course = course;
};

Student.prototype = Object.create(Person.prototype);
// ^this sets a new empty obj linked to Person.prototype --
// --as the prototype obj for Student.
Student.prototype.constructor = Student;

Student.prototype.introduce = function () {
  console.log(
    `Hey! My name is ${this.firstName} and im a student of ${this.course}. `
  );
};

const peter = new Student('Peter', 1999, 'Physics');
console.log(peter);
peter.introduce();
peter.calAge();

console.log(peter instanceof Student);
console.log(peter instanceof Person);
console.log(peter instanceof Object);


///////////////////////////////////////
// Coding Challenge #3


1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀


const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.gas = function () {
  this.speed += 10;
  console.log(`${this.make} speed is ${this.speed}`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} speed is ${this.speed}`);
};

const EV = function (make, speed, battery) {
  Car.call(this, make, speed);

  this.battery = battery;
};

EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;

EV.prototype.chargeBattery = function (chargeTO) {
  this.battery = chargeTO;
  console.log(`${this.battery}% battery`);
};

EV.prototype.gas = function () {
  this.speed += 20;
  this.battery -= 1;
  console.log(
    `${this.make} speed is ${this.speed} with a battery or ${this.battery}%`
  );
};

const tesla = new EV('Tesla', 50, 65);
const ford = new Car('Ford', 65);
console.log(tesla);
console.log(ford);

tesla.gas();
tesla.chargeBattery(80);
tesla.brake();
ford.gas();
ford.brake();
// ford.chargeBattery();

*/

/*

class Account {
  // public fields
  locale = navigator.language;

  // private fields
  #movements = [];
  #pin;

  // ^these will be on instances not prototypes

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // this.locale = navigator.language;

    // protected property
    this.#pin = pin;
    // this._movements = [];
    // ^ lets others know to not access it
  }

  // moveMoney(value) {
  //   this.movements.push(value);
  //   console.log(
  //     `You ${value > 0 ? 'deposited' : 'withdrew'} ${Math.abs(value)} ${
  //       this.currency
  //     }.`
  //   );
  // }

  // public methods
  getMovements() {
    return this.#movements;
  }
  deposit(value) {
    this.#movements.push(value);
    return this;
  }

  withdraw(value) {
    this.deposit(-value);
    return this;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      console.log('Loan Approved');
      this.deposit(val);
    }
  }

  // private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Josh', 'Dollar', 1234);
console.log(acc1);
// acc1.moveMoney(250);
// acc1.moveMoney(-50);
acc1.deposit(350);
acc1.withdraw(150);
acc1.requestLoan(125);
console.log(acc1.getMovements());
// console.log(acc1.#movements);

// ------ chaining ------
acc1.deposit(125).deposit(215).withdraw(100);

*/

///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀

*/

class CarsCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accerlate() {
    this.speed += 10;
    console.log(`${this.make} is now at ${this.speed}.`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is now at ${this.speed}.`);
  }
}

class EVCl extends CarsCl {
  #batteryCharge;

  constructor(make, speed, batteryCharge) {
    super(make, speed);
    this.batteryCharge = batteryCharge;
  }

  accerlate() {
    this.speed += 10;
    this.batteryCharge -= 4;
    console.log(
      `${this.make} is now at ${this.speed}, with a charge of ${this.batteryCharge}.`
    );
    return this;
  }

  _chargeTo(val) {
    this.batteryCharge = val;
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
rivian.accerlate()._chargeTo(90).accerlate().brake();
