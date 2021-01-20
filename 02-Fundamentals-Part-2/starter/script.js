// // strict mode
// 'use strict';

// let hasDriversLicence = false;
// const passTest = true;

// if (passTest) {
//   hasDriverLicense = true;
// }
// if (hasDriversLicence) {
//   console.log('I can drive!');
// }

// const interface = 'Audio';

// // functions
// function logger() {
//   console.log('My name is Jonas');
// }

// logger();
// const nonRetValue = logger();
// console.log(nonRetValue);

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const now = 2037;

// // function declaration
// function calcAge1(birthYear) {
//   return now - birthYear;
// }
// const age1 = calcAge1(1991);

// // function expression
// const calcAge2 = function (birthYear) {
//   return now - birthYear;
// }
// const age2 = calcAge2(1991);

// console.log(age1);
// console.log(age2);

// // arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);

// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'));

// // function calls from other functions
// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends.length);
// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);

// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, friends];
// console.log(jonas);

// // Exercise
// const calcAge = (birthYear) => 2037 - birthYear;

// const birthYears = [1990, 1967, 2002, 2010, 2018];

// const ages = birthYears.map((year) => calcAge(year));
// console.log(ages);

// // add elements
// const friends = ['Michael', 'Steven', 'Peter'];
// const newLength = friends.push('Jay');

// console.log(friends);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

// // remove elements
// friends.pop(); // removes the last element from the array
// const popped = friends.pop();
// console.log(friends);
// console.log(popped);

// friends.shift(); // first
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob')); // -1

// friends.push(23);
// console.log(friends.includes('Steven')); // true
// console.log(friends.includes('Bob'));  // false
// console.log(friends.includes('23')); // false

// if (friends.includes('Stephen')) {
//   console.log('You have a friend called Stephen');
// }

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   age: 2037 - 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven']
// };
// console.log(jonas);
// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);


// const interestedIn = prompt('What do you want to know about Jonas? Choose from firstName, lastName, age, job, friend');

// if (jonas[interestedIn] !== undefined) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log('Wrong request. Choose from firstName, lastName, age, job, friend');
// }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtmann';
// console.log(jonas);

// // Challenge
// const introBuilder = (person) => `${person.firstName} has ${person.friends.length} friends, and his/her best friend is ${person.friends[0]}`;

// console.log(introBuilder(jonas));

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   birthYear: 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven'],
//   hasDriversLicence: true,

//   // calcAge: function (birthYear) {
//   //   return 2037 - birthYear;
//   // }

//   // calcAge: function () {
//   //   return 2037 - this.birthYear;
//   // }

//   calcAge: function () {
//     if (this.age === undefined) {
//       this.age = 2037 - this.birthYear;
//     }
//     return this.age;
//   },

//   intro: function () {
//     return `${this.firstName} is a ${this.calcAge()} years old ${this.job}, and he has ${this.hasDriversLicence ? 'a' : 'no'} driver's license`;
//   }
// };

// console.log(jonas.calcAge());

// console.log(jonas.calcAge());
// console.log(jonas.calcAge());
// // console.log(jonas['calcAge'](1991));

// // Challenge
// console.log(jonas.intro());

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

// const jonas = [
//   'Jonas',
//   'Schmedtmann',
//   2037 - 1991,
//   'teacher',
//   ['Michael', 'Peter', 'Steven']
// ];
// let types = [];

// for (let i = 0; i < jonas.length; i++) {
//   console.log(jonas[i]);
//   // Filling the type array
//   // types[i] = typeof jonas[i];
//   types.push(typeof jonas[i]);
// }
// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// // continue and break
// console.log('--- ONLY STRINGS ---');
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== 'string') continue;

//   console.log(jonas[i]);
// }

// console.log('--- BREAK WITH NUMBER ---');
// for (let i = 0; i < jonas.length; i++) {
//   console.log(jonas[i], typeof jonas[i]);
//   if (typeof jonas[i] === 'number') break;
// }

const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`--- Starting exercise ${exercise}`);

  for (let repetition = 1; repetition < 6; repetition++) {
    console.log(`Exercise no. ${exercise} repetition no. ${repetition}`);
  }
}
