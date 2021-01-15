const bill = 430;
const tip = bill * (bill > 50 && bill < 300 ? 0.15 : 0.2);

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);