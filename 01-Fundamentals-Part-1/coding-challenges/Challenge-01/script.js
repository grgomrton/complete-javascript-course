const markWeightKg = 95;
const markHeightM = 1.88;
const johnWeightKg = 85;
const johnHeightM = 1.76;

const markBmi = markWeightKg / markHeightM ** 2;
const johnBmi = johnWeightKg / johnHeightM ** 2;
const markHigherBmi = markBmi > johnBmi;

console.log(markBmi, johnBmi, markHigherBmi);
// test data 1:
// 27.309968138370508 24.194608809993426 true
// test data 2:
// 26.87867813490267 27.44059917355372 false