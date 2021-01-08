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

const descriptionTempLit = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(descriptionTempLit);