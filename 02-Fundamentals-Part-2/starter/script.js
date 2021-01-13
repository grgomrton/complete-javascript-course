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

const now = 2037;

// function declaration
function calcAge1(birthYear) {
  return now - birthYear;
}
const age1 = calcAge1(1991);

// function expression
const calcAge2 = function (birthYear) {
  return now - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1);
console.log(age2);