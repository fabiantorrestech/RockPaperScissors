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

function game(){
  let playerScore = 0;
  let computerScore = 0;
  let playerSelection = "";
  let roundVerdict = "";

  console.log("Welcome to Rock, Paper, Scissors!");

  // minimmum 5 round game, then we declare a winner at the end.
  for(let i=0; i<5; i++){
    roundVerdict = "";
    if((playerScore===3 && computerScore<=2) ||
    (computerScore===3 && playerScore<=2)){
      break;
    }
    
    // TODO: keep prompting the player until they enter a valid option
    playerSelection = prompt("Type out a choice: rock, paper, scissors.");

    roundVerdict = playRound(playerSelection, getComputerChoice());
    
    // update score!
    if(roundVerdict==="You lose!"){ computerScore++; }
    else if(roundVerdict==="You win!"){ playerScore++; }

    // score printout
    console.log("Score -- Player: " + playerScore + " | Computer: " + computerScore);
  }

  if(playerScore > computerScore){ return "Player wins! (:"; }
  else if(playerScore < computerScore){ return "Computer wins! ):" }
  else{ return "It's a tie!" }
}
