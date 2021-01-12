// Task no 2.:
// const dolphinRound1 = 96;
// const dolphinRound2 = 108;
// const dolphinRound3 = 89;

// const koalaRound2 = 88;
// const koalaRound1 = 91;
// const koalaRound3 = 110;

// Bonus 1:
// const dolphinRound1 = 97;
// const dolphinRound2 = 112;
// const dolphinRound3 = 101;

// const koalaRound2 = 109;
// const koalaRound1 = 95;
// const koalaRound3 = 123;

// Bonus 2:
const dolphinRound1 = 97;
const dolphinRound2 = 112;
const dolphinRound3 = 101;

const koalaRound2 = 109;
const koalaRound1 = 95;
const koalaRound3 = 106;

const avgDolphin = (dolphinRound1 + dolphinRound2 + dolphinRound3) / 3;
const avgKoala = (koalaRound1 + koalaRound2 + koalaRound3) / 3;

if (avgDolphin >= 100 && avgKoala >= 100) {
  if (avgDolphin > avgKoala) {
    console.log('Dolphins are the winners!');
  } else if (avgDolphin < avgKoala) {
    console.log('Koalas are the winners!');
  } else {
    console.log('It\'s a draw!');
  }
} else {
  console.log('No winner today');
}
// Response 2. :
// Dolphins are the winners!
// Response Bonus 1:
// Koalas are the winners!
// Response Bonus 2:
// It's a draw!66