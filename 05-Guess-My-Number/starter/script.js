'use strict';

const generateSecretNumber = () => Math.trunc(Math.random() * 20) + 1;

let secretNumber = generateSecretNumber();
let score = 20;

document.querySelector('.btn.again').addEventListener('click', () => {
  secretNumber = generateSecretNumber();
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing';
  document.querySelector('.score').textContent = score;
});

document.querySelector('.btn.check').addEventListener('click', () => {
  const guess = document.querySelector('.guess').valueAsNumber;
  const messageBox = document.querySelector('.message');
  const scoreBox = document.querySelector('.score');
  if (score > 0) {
    if (guess >= 1 && guess <= 20) {
      if (guess > secretNumber) {
        messageBox.textContent = 'Too high';
        score -= 1;
        scoreBox.textContent = score;
      } else if (guess < secretNumber) {
        messageBox.textContent = 'Too low';
        score -= 1;
        scoreBox.textContent = score;
      } else {
        messageBox.textContent = 'Correct number!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
      }
    } else {
      messageBox.textContent = 'No number';
    }
  }
  if (score === 0) {
    messageBox.textContent = 'You lost the game';
    scoreBox.textContent = 0;
  }
});
