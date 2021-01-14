// // functions
// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }

// const austria = describeCountry('Austria', 9, 'Vienna');
// const hungary = describeCountry('Hungary', 10, 'Budapest');
// const portugal = describeCountry('Portugal', 10, 'Lisbon');

// console.log(austria);
// console.log(hungary);
// console.log(portugal);

// const entirePopulation = 7900;

// function percentageOfWorld1(population) {
//   return population / entirePopulation * 100;
// }

// const austriaPopulation = 9;
// const hungaryPopulation = 10;
// const usaPopulation = 328;
// console.log('Austria', percentageOfWorld1(austriaPopulation));
// console.log('Hungary', percentageOfWorld1(hungaryPopulation));
// console.log('USA', percentageOfWorld1(usaPopulation));

// const percentageOfWorld2 = function (population) {
//   return population / entirePopulation * 100;
// }
// console.log('Austria', percentageOfWorld2(austriaPopulation));
// console.log('Hungary', percentageOfWorld2(hungaryPopulation));
// console.log('USA', percentageOfWorld2(usaPopulation));

// const percentageOfWorld3 = population => population / entirePopulation * 100;
// console.log('Austria', percentageOfWorld3(austriaPopulation));
// console.log('Hungary', percentageOfWorld3(hungaryPopulation));
// console.log('USA', percentageOfWorld3(usaPopulation));

// function calls from other functions
const entirePopulation = 7900;
function percentageOfWorld1(population) {
  return population / entirePopulation * 100;
}

const describePopulation = (country, population) => {
  `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world.`
}

console.log('Austria', percentageOfWorld1(9));
console.log('Hungary', percentageOfWorld1(10));
console.log('USA', percentageOfWorld1(328));