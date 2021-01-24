'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Hello Marci';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23;

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.btn.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  const messageBox = document.querySelector('.message');
  const scoreBox = document.querySelector('.score');
  if (score >= 1) {
    if (!guess) {
      messageBox.textContent = 'No number';
    } else if (guess > secretNumber) {
      messageBox.textContent = 'Too high';
      score -= 1;
      scoreBox.textContent = score;
    } else if (guess < secretNumber) {
      messageBox.textContent = 'Too low';
      score -= 1;
      scoreBox.textContent = score;
    } else if (guess === secretNumber) {
      messageBox.textContent = 'Correct number!';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
    }
  }
  if (score === 0) {
    messageBox.textContent = 'You lost the game';
    scoreBox.textContent = 0;
  }
});
