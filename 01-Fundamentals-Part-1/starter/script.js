/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = 'Jonas';
console.log(firstName);
console.log(firstName);
console.log(firstName);
*/

/*
// Mathetmatical operators
const currentYear = 2037;
const jonasBirthYear = 1991;
const sarahBirthYear = 2018;
const ageJonas = currentYear - jonasBirthYear;
const ageSarah = currentYear - sarahBirthYear;
console.log('Jonas\' age', ageJonas);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// Assignment operators
const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

let x = 10 + 5; // 15
x += 10;
x++;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah);

console.log(currentYear - 1991 > currentYear - 2018);
*/

/*
const currentYear = 2037;
const jonasBirthYear = 1991;
const sarahBirthYear = 2018;
const ageJonas = currentYear - jonasBirthYear;
const ageSarah = currentYear - sarahBirthYear;
console.log(currentYear - 1991 > currentYear - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log('x', x, 'y', y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/
/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job;
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}`;
console.log(jonasNew);

console.log('String with \n\
multiple \n\
lines');

console.log(`Another string with
multiple
lines with spaces`);

console.log(`multiline string with
             whitespaces`); // whitespaces are included in the string
*/

const age = 15;

if (age >= 18) {
  console.log('Sarah can start acquring driving license 🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Still need to wait ${yearsLeft} years ⏰`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

console.log(" ");
