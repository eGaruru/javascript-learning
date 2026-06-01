'use strict';

/* my code */
const playerEls = document.querySelectorAll('.player');

const score1 = document.getElementById('score--0');
const score2 = document.getElementById('score--1');
const scoreEls = [score1, score2];

const currentScore1 = document.getElementById('current--0');
const currentScore2 = document.getElementById('current--1');
const currentScoreEls = [currentScore1, currentScore2];

const diceEl = document.querySelector('.dice');
const newBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');

let isPlayng = false;
let activePlayer = 0;
let currentScore = 0;
let scores = [0, 0];

const rollDice = function () {
  return Math.trunc(Math.random() * 6) + 1;
};

const switchPlayer = function () {
  currentScore = 0;
  currentScoreEls[activePlayer].textContent = currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerEls.forEach(player => player.classList.toggle('player--active'));
};

const checkWinner = function (totalScore) {
  return totalScore >= 100;
};

rollBtn.addEventListener('click', () => {
  if (isPlayng) return;

  const diceNumber = rollDice();

  if (diceNumber === 1) {
    switchPlayer();
  } else {
    currentScore += diceNumber;
    currentScoreEls[activePlayer].textContent = currentScore;
  }

  diceEl.src = `dice-${diceNumber}.png`;
});

holdBtn.addEventListener('click', () => {
  if (isPlayng) return;

  scores[activePlayer] += currentScore;
  scoreEls[activePlayer].textContent = scores[activePlayer];

  const isWinner = checkWinner(scores[activePlayer]);

  if (isWinner) {
    playerEls[activePlayer].classList.add('player--winner');
    isPlayng = true;
  } else {
    switchPlayer();
  }
});

const initGame = function () {
  isPlayng = false;
  activePlayer = 0;
  currentScore = 0;
  scores = [0, 0];
  scoreEls.forEach(score => (score.textContent = 0));
  currentScoreEls.forEach(currentScore => (currentScore.textContent = 0));

  playerEls.forEach(player =>
    player.classList.remove('player--active', 'player--winner'),
  );

  playerEls[activePlayer].classList.add('player--active');
};

newBtn.addEventListener('click', initGame);

initGame();

/* Jonas's code */
