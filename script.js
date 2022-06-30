// document.getElementById
const docElId = document.getElementById.bind(document);

// scores, results text, game icons, and reset button
const playerScore = docElId('playerScore');
const playerChoiceEl = docElId('playerChoice');
const computerScore = docElId('computerScore');
const computerChoiceEl = docElId('computerChoice');
const resultText = docElId('resultText');
const gameIcons = document.querySelectorAll('.far');
const resetBtn = docElId('resetBtn');

// player elements
const playerRock = docElId('playerRock');
const playerPaper = docElId('playerPaper');
const playerScissors = docElId('playerScissors');
const playerLizard = docElId('playerLizard');
const playerSpock = docElId('playerSpock');

// computer elements
const computerRock = docElId('computerRock');
const computerPaper = docElId('computerPaper');
const computerScissors = docElId('computerScissors');
const computerLizard = docElId('computerLizard');
const computerSpock = docElId('computerSpock');

// possible outcomes of game
const choices = {
  rock: { name: 'rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'spock', defeats: ['scissors', 'rock'] },
};

let computerChoice = '';
let playerChoice = '';
let computerScoreNumber = 0;
let playerScoreNumber = 0;

// reset selected icons when new icon is selected
function resetSelected() {
  // reset all selected icons 
  gameIcons.forEach((icon) => {
    icon.classList.remove('selected');
  });  
}  

// pl;ayer selection
function playerSelect(choice) {
  resetSelected();
  // update player choice and add 'selected' class
  switch(choice) {
    case 'rock':
      playerChoice = 'rock';
      playerChoiceEl.textContent = ' --- Rock';
      playerRock.classList.add('selected');
      break;
    case 'paper':
      playerChoice = 'paper';
      playerChoiceEl.textContent = ' --- Paper';
      playerPaper.classList.add('selected');
      break;
    case 'scissors':
      playerChoice = 'scissors';
      playerChoiceEl.textContent = ' --- Scissors';
      playerScissors.classList.add('selected');
      break;
    case 'lizard':
      playerChoice = 'lizard';
      playerChoiceEl.textContent = ' --- Lizard';
      playerLizard.classList.add('selected');
      break;
    case 'spock':
      playerChoice = 'spock';
      playerChoiceEl.textContent = ' --- Spock';
      playerSpock.classList.add('selected');
      break;
    default:
      break;
    }    
    computerSelect();
  }  

// computer selection
const computerSelect = () => {
  const random = Math.floor(Math.random() * 5);
  switch(random) {
  case 0:
    computerChoice = 'rock'; 
    computerChoiceEl.textContent = ' --- Rock';
    computerRock.classList.add('selected');
    break;
  case 1:
    computerChoice = 'paper';
    computerChoiceEl.textContent = ' --- Paper';
    computerPaper.classList.add('selected');
    break;
  case 2:
    computerChoice = 'scissors';
    computerChoiceEl.textContent = ' --- Scissors';
    computerScissors.classList.add('selected');
    break;
  case 3:
    computerChoice = 'lizard';
    computerChoiceEl.textContent = ' --- Lizard';
    computerLizard.classList.add('selected');
    break;
  case 4:
    computerChoice = 'spock';
    computerChoiceEl.textContent = ' --- Spock';
    computerSpock.classList.add('selected');
    break;
  default:
    break;
  }   
  compareSelections();
}  

// compare selections and update scores
function compareSelections() {
  // compare computer and player selections
  if (playerChoice === computerChoice) {
    resultText.textContent = 'It\'s a tie!';
  } else if (choices[playerChoice].defeats.includes(computerChoice)) {
    resultText.textContent = 'You win!';
    playerScoreNumber++;
    playerScore.textContent = playerScoreNumber;
  } else {
    resultText.textContent = 'You lose!';
    computerScoreNumber++;
    computerScore.textContent = computerScoreNumber;
  }
}

// reset game to default
function resetGame() {
  // reset game
  playerScoreNumber = 0;
  computerScoreNumber = 0;
  playerScore.textContent = playerScoreNumber;
  computerScore.textContent = computerScoreNumber;
  resultText.textContent = '';
  resetSelected();
}

// event listeners
resetBtn.addEventListener('click', resetGame)