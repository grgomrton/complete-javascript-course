const forecast = [17, 21, 23];
const longForecast = [12, 5, -5, 0, 4];

const printForecast = (arr) => {
  let forecast = "...";
  for (let i = 0; i < arr.length; i++) {
    forecast += ` ${arr[i]} °C in ${i + 1} days ...`;
  }
  return forecast;
};

console.log("--- Short-term forecast --- ");
console.log(printForecast(forecast));
console.log("--- Long-term forecast --- ");
console.log(printForecast(longForecast));
