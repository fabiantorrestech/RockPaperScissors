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

function game(){
  let buttonsDiv = document.createElement('div');
  let rockButton = document.createElement('button');
  let paperButton = document.createElement('button');
  let scissorsButton = document.createElement('button');
  rockButton.textContent = "Rock";
  paperButton.textContent = "Paper";
  scissorsButton.textContent = "Scissors";
  buttonsDiv.setAttribute("style", "display: flex; justify-content: space-around; align-items: center;");
  rockButton.setAttribute("style", "");
  paperButton.setAttribute("style", "");
  scissorsButton.setAttribute("style", "");

  let scoreboard = document.createElement('div');
  scoreboard.setAttribute("style", "text-align: center;");

  let playerSelection = "";
  let roundVerdict = "";
  let playerScore = 0;
  let computerScore = 0;

  rockButton.addEventListener('click', () => {
    playerSelection = "rock";
    roundVerdict = playRound(playerSelection, getComputerChoice());
    if(roundVerdict==="You win!"){
      playerScore++;
    }
    else if(roundVerdict==="You lose!"){
      computerScore++;
    }

    if(playerScore===5 || computerScore===5){
      scoreboard.textContent = declareWinner(playerScore, computerScore);
      document.body.removeChild(buttonsDiv);
      return;
    }
    else{
      scoreboard.textContent = `Player: ${playerScore} --- Computer: ${computerScore}`;
    }
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

    if(playerScore===5 || computerScore===5){
      scoreboard.textContent = declareWinner(playerScore, computerScore);
      document.body.removeChild(buttonsDiv);
      return;
    }
    else{
      scoreboard.textContent = `Player: ${playerScore} --- Computer: ${computerScore}`;
    }
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

    if(playerScore===5 || computerScore===5){
      scoreboard.textContent = declareWinner(playerScore, computerScore);
      document.body.removeChild(buttonsDiv);
      return;
    }
    else{
      scoreboard.textContent = `Player: ${playerScore} --- Computer: ${computerScore}`;
    }
  });

  buttonsDiv.appendChild(rockButton);
  buttonsDiv.appendChild(paperButton);
  buttonsDiv.appendChild(scissorsButton);
  document.body.appendChild(buttonsDiv);

  document.body.appendChild(scoreboard);
}

game();