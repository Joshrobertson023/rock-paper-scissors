/**********************************************************************/
/*                                                                    */
/* Program name: Rock-paper-scissors                                  */
/* Date:         October 20, 2023                                     */
/* Author:       Josh Robertson                                       */
/*                                                                    */
/* This is a simple rock-paper-scissors game. The player can press    */
/* three buttons to chose either rock, paper, or scissors. Then the   */
/* computer generates a random selection and the results are          */
/* compared, formatted, then displayed. The total scores are updated. */
/*                                                                    */
/**********************************************************************/

/**********************************************************************/
/*                            DOM constants                           */
/**********************************************************************/
const btnRock = document.getElementById('rock'),
      btnPaper = document.getElementById('paper'),
      btnScissors = document.getElementById('scissors'),
      displayWinner = document.getElementById('display'),
      displayPlayerScore = document.getElementById('player-score'),
      displayComputerScore = document.getElementById('computer-score');

/**********************************************************************/
/*                          Global variables                          */
/**********************************************************************/
let playerScore = 0,
    computerScore = 0,
    playerSelection = '',
    computerSelection = '',
    charPlayerSelection = '',
    charComputerSelection = '',
    combined = '';

/**********************************************************************/
/*                             Main program                           */
/**********************************************************************/
btnRock.addEventListener('click', () => {
   playerSelection = 'rock';
   playRound();
   updateScore();
});
btnPaper.addEventListener('click', () => {
   playerSelection = 'paper';
   playRound();
   updateScore();
});
btnScissors.addEventListener('click', () => {
   playerSelection = 'scissors';
   playRound();
   updateScore();
});


/**********************************************************************/
/*                     Updates the displayed score                    */
/**********************************************************************/
function updateScore() {
   displayPlayerScore.textContent = playerScore;
   displayComputerScore.textContent = computerScore;
}

/**********************************************************************/
/*                             Play a round                           */
/**********************************************************************/
function playRound() {
   computerSelection = getComputerChoice();
   charPlayerSelection = playerSelection.charAt(0).toLowerCase();
   charComputerSelection = computerSelection.charAt(0).toLowerCase();
   combined = charPlayerSelection.concat(charComputerSelection);

   if(combined === 'rs' || combined === 'sp' || combined === 'pr') {
      displayWinner.textContent = `Player wins! ${(playerSelection.charAt(0).toUpperCase()) + playerSelection.slice(1)} beats ${computerSelection}.`;
      playerScore += 1;
   }
   else if(combined === 'sr' || combined === 'ps' || combined === 'rp') {
      displayWinner.textContent = `Computer wins!  ${(computerSelection.charAt(0).toUpperCase()) + computerSelection.slice(1)} beats ${playerSelection}.`;
      computerScore += 1;
   }
   else 
      displayWinner.textContent = "Tie!";
}

/**********************************************************************/
/*                Get a random choice from the computer               */
/**********************************************************************/
function getComputerChoice() {
   let randomNumber = Math.round(Math.random() * 2);
   computerSelection = randomNumber.toString();

   switch(computerSelection) {
      case '0':
         computerSelection = 'rock';
         break;
      case '1':
         computerSelection = 'paper';
         break;
      case '2':
         computerSelection = 'scissors';
         break;
      default:
         alert("Error in getComputerChoice().");
   }

   return computerSelection;
}