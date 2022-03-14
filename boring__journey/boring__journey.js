// Кнопка начала игры
const gameContainer = document.querySelector('.boring-journey-main-section');
const startButton = document.querySelector('.boring-journey-main-section__button');
const mapImage = document.querySelector('.boring-journey-main-section__image');

// Функция запуска игры
function startGame() {
  mapImage.src = '../images/map2.svg';
  startButton.classList.add('boring-journey-main-section__button_invisible');
  gameContainer.insertAdjacentHTML('beforeend', `<button id="moveButton">Move</button>`);
  const moveButton = document.querySelector('#moveButton');
  moveButton.addEventListener('click', startJourney);
}

// Функция первого хода
function startJourney() {

  const answer = prompt('Where will you go? Straight, left or right', '').toLowerCase();

  switch(answer) {
    case 'left':
      alert('You are dead');
      resetGame ();
      break;

    case 'right':
      alert('You are dead');
      resetGame ();
      break;

    case 'straight':
      mapImage.src = '../images/map3.svg';
      alert('Excelent!');
      moveButton.removeEventListener('click', startJourney);
      moveButton.addEventListener('click', makeSecondStep);
      break;

    default:
      startJourney();
    }
}

// Функция 2хода
function makeSecondStep() {
  const secondAnswer = prompt('Whats is your next step? Left or right?', '').toLowerCase();
      switch(secondAnswer) {
        case 'left':
          mapImage.src = '../images/map4.svg';
          alert('You are close already!');
          moveButton.removeEventListener('click', makeSecondStep);
          moveButton.addEventListener('click', makeThirdStep);
            break;
        case 'right':
          alert('You are dead');
          resetGame ();
          break;
        default:
          makeSecondStep()
      }
}

// Функция 3 хода
function makeThirdStep() {
  const thirdAnswer = prompt('So whats is your next step? Left or right?', '').toLowerCase();
          switch(thirdAnswer) {
            case 'right':
              mapImage.src = '../images/map5.svg';
              alert('Hooray! You are alive');
              moveButton.removeEventListener('click', makeThirdStep);
              moveButton.innerHTML = 'Reset Game';
              moveButton.addEventListener('click', resetGame);
              break;
            case 'left':
              alert('You are dead');
              resetGame ();
              break;
            default:
              makeThirdStep()
            }
}

// Функция перезапуска игры
function resetGame () {
  mapImage.src = '../images/map0.svg';
  startButton.classList.remove('boring-journey-main-section__button_invisible');
  moveButton.remove();
}

// Слушатель событий на кнопке начала игры
startButton.addEventListener('click', startGame);
