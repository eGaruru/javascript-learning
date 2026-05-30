'use strict';

const INITIAL_SCORE = 20;
const INITIAL_HIGH_SCORE = 0;

const MESSAGES = {
  initial: 'Start guessing...',
  noInput: '⛔ No number!',
  outOfRange: '⛔ Invalid number!',
  correct: '🎉 Correct Number',
  tooHigh: '📈 Too high!',
  tooLow: '📉 Too low!',
  lostGame: '💥 You lost the game!',
};

const body = document.querySelector('body');
const messageEl = document.querySelector('.message');
const numberEl = document.querySelector('.number');
const guessEl = document.querySelector('.guess');
const scoreEl = document.querySelector('.score');
const highScoreEl = document.querySelector('.highscore');

let secretNumber = getSecretNumber();
let score = INITIAL_SCORE;
let highScore = INITIAL_HIGH_SCORE;
let isEndGame = false;

function getRandomNumber(min, max) {
  return Math.trunc(Math.random() * max) + min;
}

function getSecretNumber() {
  return getRandomNumber(1, 20);
}

const changeTextContent = function (el) {
  return function (text) {
    return (el.textContent = text);
  };
};

const setGameState = function (ended) {
  isEndGame = ended;
  guessEl.disabled = ended;
  checkBtn.disabled = ended;
};

const init = function () {
  score = INITIAL_SCORE;
  secretNumber = getSecretNumber();
  setGameState(false);

  displayMessage(MESSAGES.initial);
  displayScore(score);
  displayNumber('?');

  guessEl.value = '';
  guessEl.focus();
  body.classList.remove('win', 'game-over');
};

const displayMessage = changeTextContent(messageEl);
const displayNumber = changeTextContent(numberEl);
const displayScore = changeTextContent(scoreEl);
const displayHighScore = changeTextContent(highScoreEl);

const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

checkBtn.addEventListener('click', function () {
  if (isEndGame) return;

  const guess = Number(guessEl.value);

  // When there is no input
  if (!guess) {
    displayMessage(MESSAGES.noInput);
    guessEl.focus();
    return;
  }

  // When user inputs the invalid number
  if (guess < 0 || guess > 20) {
    displayMessage(MESSAGES.outOfRange);
    guessEl.value = '';
    guessEl.focus();
    return;
  }

  // When player wins
  if (guess === secretNumber) {
    displayMessage(MESSAGES.correct);
    displayNumber(secretNumber);

    body.classList.add('win');

    setGameState(true);

    if (score > highScore) {
      highScore = score;
      displayHighScore(highScore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? MESSAGES.tooHigh : MESSAGES.tooLow);
      score--;
      displayScore(score);
    } else {
      displayMessage(MESSAGES.lostGame);
      displayNumber(secretNumber);
      displayScore(0);
      body.classList.add('game-over');

      setGameState(true);
    }
  }
});

init();
againBtn.addEventListener('click', init);
