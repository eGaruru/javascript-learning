'use strict';

/* my code */
// const playerEls = document.querySelectorAll('.player');

// const score1 = document.getElementById('score--0');
// const score2 = document.getElementById('score--1');
// const scoreEls = [score1, score2];

// const currentScore1 = document.getElementById('current--0');
// const currentScore2 = document.getElementById('current--1');
// const currentScoreEls = [currentScore1, currentScore2];

// const diceEl = document.querySelector('.dice');
// const newBtn = document.querySelector('.btn--new');
// const rollBtn = document.querySelector('.btn--roll');
// const holdBtn = document.querySelector('.btn--hold');

// let isPlayng = false;
// let activePlayer = 0;
// let currentScore = 0;
// let scores = [0, 0];

// const rollDice = function () {
//   return Math.trunc(Math.random() * 6) + 1;
// };

// const switchPlayer = function () {
//   currentScore = 0;
//   currentScoreEls[activePlayer].textContent = currentScore;
//   activePlayer = activePlayer === 0 ? 1 : 0;
//   playerEls.forEach(player => player.classList.toggle('player--active'));
// };

// const checkWinner = function (totalScore) {
//   return totalScore >= 100;
// };

// rollBtn.addEventListener('click', () => {
//   if (isPlayng) return;

//   const diceNumber = rollDice();

//   if (diceNumber === 1) {
//     switchPlayer();
//   } else {
//     currentScore += diceNumber;
//     currentScoreEls[activePlayer].textContent = currentScore;
//   }

//   diceEl.src = `dice-${diceNumber}.png`;
// });

// holdBtn.addEventListener('click', () => {
//   if (isPlayng) return;

//   scores[activePlayer] += currentScore;
//   scoreEls[activePlayer].textContent = scores[activePlayer];

//   const isWinner = checkWinner(scores[activePlayer]);

//   if (isWinner) {
//     playerEls[activePlayer].classList.add('player--winner');
//     isPlayng = true;
//   } else {
//     switchPlayer();
//   }
// });

// const initGame = function () {
//   isPlayng = false;
//   activePlayer = 0;
//   currentScore = 0;
//   scores = [0, 0];
//   scoreEls.forEach(score => (score.textContent = 0));
//   currentScoreEls.forEach(currentScore => (currentScore.textContent = 0));

//   playerEls.forEach(player =>
//     player.classList.remove('player--active', 'player--winner'),
//   );

//   playerEls[activePlayer].classList.add('player--active');
// };

// newBtn.addEventListener('click', initGame);

// initGame();

/* Jonas's code */
// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0EL.textContent = 0;
  score1EL.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // 3. Check for rolled 1: if true, switch to next player
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
