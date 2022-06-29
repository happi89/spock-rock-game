const playerScore = document.getElementById('playerScore');
const playerChoice = document.getElementById('playerChoice');
const computerScore = document.getElementById('computerScore');
const computerChoiceEl = document.getElementById('computerChoice');
const resultText = document.getElementById('resultText');
const gameIcons = document.querySelectorAll('.far');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let computerChoice = '';
let computerScoreNumber = 0;
let playerScoreNumber = 0;

function resetSelected() {
  // reset all selected icons 
  gameIcons.forEach((icon) => {
    icon.classList.remove('selected');
  });  
}  

function playerSelect(choice) {
  resetSelected();
  computerSelect();
  // update player choice and add 'selected' class
  switch(choice) {
    case 'rock':
      playerChoice.textContent = ' --- Rock';
      playerRock.classList.add('selected');
      break;
    case 'paper':
      playerChoice.textContent = ' --- Paper';
      playerPaper.classList.add('selected');
      break;
    case 'scissors':
      playerChoice.textContent = ' --- Scissors';
      playerScissors.classList.add('selected');
      break;
    case 'lizard':
      playerChoice.textContent = ' --- Lizard';
      playerLizard.classList.add('selected');
      break;
    case 'spock':
      playerChoice.textContent = ' --- Spock';
      playerSpock.classList.add('selected');
      break;
    default:
      break;
  }    
}  

const computerSelect = () => {
  const random = Math.floor(Math.random() * 5);
  switch(random) {
    case 0:
      computerChoice = 'rock'; 
      displayComputerSelect(computerChoice);
      break;
    case 1:
      computerChoice = 'paper';
      displayComputerSelect(computerChoice);
      break;
    case 2:
      computerChoice = 'scissors';
      displayComputerSelect(computerChoice);
      break;
    case 3:
      computerChoice = 'lizard';
      displayComputerSelect(computerChoice);
      break;
    case 4:
      computerChoice = 'spock';
      displayComputerSelect(computerChoice);
      break;
    default:
      break;
  }    
}  

const displayComputerSelect = (computerChoice) => {
  // update computer choice and add 'selected' class
  switch(computerChoice) {
    case 'rock':
      computerChoiceEl.textContent = ' --- Rock';
      computerRock.classList.add('selected');
      break;
    case 'paper':
      computerChoiceEl.textContent = ' --- Paper';
      computerPaper.classList.add('selected');
      break;
    case 'scissors':
      computerChoiceEl.textContent = ' --- Scissors';
      computerScissors.classList.add('selected');
      break;
    case 'lizard':
      computerChoiceEl.textContent = ' --- Lizard';
      computerLizard.classList.add('selected');
      break;
    case 'spock':
      computerChoiceEl.textContent = ' --- Spock';
      computerSpock.classList.add('selected');
      break;
    default:
      break;
  }    
}  



