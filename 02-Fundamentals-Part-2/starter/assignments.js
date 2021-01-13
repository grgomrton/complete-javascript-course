function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const austria = describeCountry('Austria', 9, 'Vienna');
const hungary = describeCountry('Hungary', 10, 'Budapest');
const portugal = describeCountry('Portugal', 10, 'Lisbon');

console.log(austria);
console.log(hungary);
console.log(portugal);