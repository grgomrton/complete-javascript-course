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
/*
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
*/
/*
// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas')); // NaN
console.log(typeof NaN);      // number
console.log(10 > NaN);        // false - also 10 < NaN

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3); // 10 : operator - converts to numbers
console.log('23' / '2');      // division converts to number as well
console.log('23' > '18');     // also greater than converts to number
*/
/*
let height = 0;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is undefined');
}
*/
/*
const favourite = Number(prompt("What is your favourite number?"));

if (favourite === 23) {
  console.log("Cool! 23 is a great number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else {
  console.log("Number is not 23 or 7");
}

if (favourite !== 23) {
  console.log("Why not 23?");
}*/
/*
const day = 'wednesday';

if (day === 'monday') {
  console.log('Plan course structure');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend');
} else {
  console.log('Invalid day');
}*/

const age = 23;
console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);
