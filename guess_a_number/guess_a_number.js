let randomNumber = Math.floor(Math.random() * 100) + 1;

let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');

let guessSubmit = document.querySelector('.guessSubmit');
let guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;
guessField.focus();

let gameSection = document.querySelector('.game-section');

function checkGuess(evt) {
  evt.preventDefault()
  let userGuess = Number(guessField.value);

  if (isNaN(userGuess) || userGuess===0) {
    alert('Print a number between 1 and 100!');
    guessField.value = '';
    guessField.focus();
  } else {
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
  }
  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = 'Good job!!!';
    lowOrHi.style = 'text-align: center;';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = 'GAME OVER';
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!';
    } else if(userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!';
    }
  }
  guessCount++;
  guessField.value = '';
  guessField.focus();
}
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  resetButton.style = 'color:green; font-weight: bold; font-size: 18px; border-radius: 10px; cursor: pointer;';
  gameSection.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;

  let resetParas = document.querySelectorAll('.resultParas p');
  for (let i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'rgb(228, 208, 183)';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}
