const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBmi: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};
const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBmi: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

console.log(mark.calcBmi(), mark.bmi);
console.log(john.calcBmi(), john.bmi);

const response = (higherBmiPerson, lowerBmiPerson) => `${higherBmiPerson.fullName}'s BMI (${higherBmiPerson.bmi}) is higher than ${lowerBmiPerson.fullName}'s BMI (${lowerBmiPerson.bmi})`;

if (john.bmi > mark.bmi) {
  console.log(response(john, mark));
} else if (mark.bmi > john.bmi) {
  console.log(response(mark, john));
} else {
  console.log(`${mark.fullName} and ${john.fullName} has the same BMI (${mark.bmi})`);
}