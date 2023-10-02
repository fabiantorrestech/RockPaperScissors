// randomly selects a choice of rock, paper, or scissors
function getComputerChoice(){
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

// - holds all the logic for the game, once the player has selected an option and a random choice has been made by the computer
function playRound(playerSelection, computerSelection){
  console.log("playerSelection: " + playerSelection + " | computerSelection: " + computerSelection);

  // - case insenstive for user-input (playerSelection)
  playerSelection = playerSelection.toLowerCase();

  let verdict = "";

  if(playerSelection==="rock" && computerSelection==="scissors" ||
  playerSelection==="paper" && computerSelection==="rock" ||
  playerSelection==="scissors" && computerSelection==="paper"){
    verdict = "You win!";
  }
  else if(playerSelection==="rock" && computerSelection==="rock" ||
  playerSelection==="paper" && computerSelection==="paper" ||
  playerSelection==="scissors" && computerSelection==="scissors"){
    verdict = "It's a tie.";
  }
  else{
    verdict = "You lose!";
  }

  return verdict;
}

function declareWinner(playerScore, computerScore){
  let message = "";
  if(playerScore===5 && computerScore < 5){
    message = "You win the game! (:";
  }
  else if (playerScore < 5 && computerScore===5){
    message = "You lose the game! ):";
  }
  return message;
}

function showScoreboard(playerScore, computerScore, scoreboard){
    // for when the game is over, remove the ability to keep playing.
    if(playerScore===5 || computerScore===5){
      scoreboard.textContent = declareWinner(playerScore, computerScore);
      // TODO: remove the ability to click buttons
      return;
    }
    else{
      scoreboard.textContent = `Player: ${playerScore} --- Computer: ${computerScore}`;
    }
}

// TODO: implement this so we don't redundantly keep calling the same code.
function incrementScore(playerScore, computerScore){

}

function game(){
  let playerSelection = "";
  let roundVerdict = "";
  let playerScore = 0;
  let computerScore = 0;

  let rockButton = document.querySelector('.rock');
  let paperButton = document.querySelector('.paper');
  let scissorsButton = document.querySelector('.scissors');

  // create the scoreboard to set below the buttons
  let scoreboard = document.createElement('div');
  scoreboard.setAttribute("style", "text-align: center;");
  scoreboard.textContent = "Click a decision to make your first move!";

  // reset all variables and scores when button is clicked, and remove the button.
  let restartButtonDiv = document.createElement('div');
  restartButtonDiv.setAttribute('style', 'display: flex; justify-content: center; margin: 10px;');
  let restartButton = document.createElement('button');
  restartButton.setAttribute("style", "flex: 0;")
  restartButton.textContent = 'Restart';
  restartButton.addEventListener('click', () => {
    playerSelection = "";
    roundVerdict = "";
    playerScore = 0;
    computerScore = 0;
    scoreboard.textContent = showScoreboard(playerScore, computerScore, scoreboard);
  });
  restartButtonDiv.appendChild(restartButton);

  // buttons logic
  rockButton.addEventListener('click', () => {
    playerSelection = "rock";
    roundVerdict = playRound(playerSelection, getComputerChoice());
    if(roundVerdict==="You win!"){
      playerScore++;
    }
    else if(roundVerdict==="You lose!"){
      computerScore++;
    }

    showScoreboard(playerScore, computerScore, scoreboard);
  });

  paperButton.addEventListener('click', () => {
    playerSelection = "paper";
    roundVerdict = playRound(playerSelection, getComputerChoice());
    if(roundVerdict==="You win!"){
      playerScore++;
    }
    else if(roundVerdict==="You lose!"){
      computerScore++;
    }

    showScoreboard(playerScore, computerScore, scoreboard);
  });

  scissorsButton.addEventListener('click', () => {
    playerSelection = "scissors";
    roundVerdict = playRound(playerSelection, getComputerChoice());
    if(roundVerdict==="You win!"){
      playerScore++;
    }
    else if(roundVerdict==="You lose!"){
      computerScore++;
    }

    showScoreboard(playerScore, computerScore, scoreboard);
  });

  document.body.appendChild(scoreboard);
  document.body.appendChild(restartButtonDiv);

  // TODO: disable all the buttons
  if(scoreboard.text === "You win the game! (:" || scoreboard.text === "You lose the game! ):"){
    
  }
}

game();