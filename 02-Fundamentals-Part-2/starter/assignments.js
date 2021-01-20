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

// // function calls from other functions
// const entirePopulation = 7900;
// function percentageOfWorld1(population) {
//   return population / entirePopulation * 100;
// }

// const describePopulation = (country, population) => {
//   `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world.`
// }

// console.log('Austria', percentageOfWorld1(9));
// console.log('Hungary', percentageOfWorld1(10));
// console.log('USA', percentageOfWorld1(328));

// const entirePopulation = 7900;
// function percentageOfWorld(population) {
//   return population / entirePopulation * 100;
// }
// const austriaPopulation = 9;
// const hungaryPopulation = 10;
// const usaPopulation = 328;
// const germanyPopulation = 83;
// const populations = [austriaPopulation, hungaryPopulation, usaPopulation, germanyPopulation];
// console.log(populations.length === 4);

// const percentages = [percentageOfWorld(austriaPopulation), percentageOfWorld(hungaryPopulation), percentageOfWorld(usaPopulation), percentageOfWorld(germanyPopulation)];
// console.log(percentages); 

// const neighbours = ['Norway', 'Russia', 'Sweden'];
// neighbours.push('Utopia');
// neighbours.pop();
// if (!neighbours.includes('Germany')) {
//   console.log('Probably not a central European country');
// }
// if (neighbours.indexOf('Sweden') >= 0) {
//   neighbours[neighbours.indexOf('Sweden')] = 'Republic of Sweden';
// }
// console.log(neighbours);

// const myCountry = {
//   country: 'Hungary',
//   capital: 'Budapest',
//   language: 'hungarian',
//   population: 10,
//   neigbourCount: 7,
//   describe: function () {
//     console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neigbourCount} neighbouring country(ies) and a capital called ${this.capital}.`)
//   },
//   isIsland: function () {
//     return this.neigbourCount >= 1 ? false : true;
//   }

// };
// console.log(myCountry);

// const intro = (country) => `${country.country} has ${country.population} million ${country.language}-speaking people, ${country.neigbourCount} neighbouring country(ies) and a capital called ${country.capital}.`;

// console.log(intro(myCountry));

// myCountry.population += 2;
// console.log(myCountry.population);
// myCountry['population'] -= 2;
// console.log(myCountry.population);

// myCountry.describe();
// console.log(myCountry.isIsland());

// for (let voter = 0; voter < 50; voter++) {
//   console.log(`Voter number ${voter + 1} is currently voting`);
// }

// const austriaPopulation = 9;
// const hungaryPopulation = 10;
// const usaPopulation = 328;
// const germanyPopulation = 83;
// const populations = [austriaPopulation, hungaryPopulation, usaPopulation, germanyPopulation];

// const entirePopulation = 7900;

// function percentageOfWorld1(population) {
//   return population / entirePopulation * 100;
// }

// const percentages2 = [];
// for (let i = 0; i < populations.length; i++) {
//   percentages2.push(percentageOfWorld1(populations[i]));
// }

// console.log(percentages2);


// const percentages = [percentageOfWorld1(austriaPopulation), percentageOfWorld1(hungaryPopulation), percentageOfWorld1(usaPopulation), percentageOfWorld1(germanyPopulation)];
// console.log(percentages); 

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
  }
}
