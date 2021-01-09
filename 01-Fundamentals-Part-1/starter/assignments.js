// variables
const country = "Hungary";
const continent = "Europe";
let population = 10;

console.log("country", country, "continent", continent, "population", population);

// data types
const isIsland = false;
let language;

console.log("typeof isIsland", typeof isIsland);
console.log("typeof population", typeof population);
console.log("typeof country", typeof country);
console.log("typeof language", typeof language);

// let, const, var
language = "hungarian";
// isIsland = true; // TypeError: Assignment to constant variable

// operators
const halfPopulation = population / 2;
console.log('1.', halfPopulation);
console.log('2.', population + 1);
const populationOfFinland = 6;
console.log('3.', population > populationOfFinland);
const avgCountryPopulation = 33;
console.log('4.', population < avgCountryPopulation);
const description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
console.log(description);

// strings
const descriptionTempLit = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(descriptionTempLit);

// if-else statements
if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(`${country}'s population is ${33 - population} million below average`);
}

// type conversion, coercion
console.log('9' - '5'); // will be 4
console.log('19' - '13' + '17'); // will be 617
console.log('19' - '13' + 17); // will be 23
console.log('123' < 57); // will be false
console.log(5 + 6 + '4' + 9 - 4 - 2); // will be 1143
