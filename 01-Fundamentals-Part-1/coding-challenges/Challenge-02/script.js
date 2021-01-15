const markWeightKg = 95;
const markHeightM = 1.88;
const johnWeightKg = 85;
const johnHeightM = 1.76;

const markBmi = markWeightKg / markHeightM ** 2;
const johnBmi = johnWeightKg / johnHeightM ** 2;
const markHigherBmi = markBmi > johnBmi;

console.log(markBmi, johnBmi, markHigherBmi);

if (markHigherBmi) {
  console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnBmi})`);
} else {
  console.log(`John's BMI (${johnBmi}) is higher than Mark's (${markBmi})`);
}