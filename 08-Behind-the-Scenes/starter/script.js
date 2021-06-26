//'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);
  }

  if (birthYear >= 1981 && birthYear <= 1996) {
    var millenial = true;
    const notification = `Oh, and your a millenial, ${firstName}`;
    console.log(notification);

    function add(a, b) {
      return a + b;
    }
  }
  console.log(add(1, 2));
  console.log(millenial);
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
