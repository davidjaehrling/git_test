function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

function playRound() {
  const playerChoice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
  const computerChoice = getComputerChoice();

  console.log(`You chose: ${playerChoice}`);
  console.log(`Computer chose: ${computerChoice}`);

  const result = determineWinner(playerChoice, computerChoice);
  console.log(result);
  return result;
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 1; i <= 5; i++) {
    console.log(`Round ${i}`);
    const result = playRound();

    if (result === "You win!") {
      playerScore++;
    } else if (result === "Computer wins!") {
      computerScore++;
    }

    console.log(`Score after Round ${i}: Player - ${playerScore}, Computer - ${computerScore}`);
  }

  console.log("Game Over!");
  if (playerScore > computerScore) {
    console.log("You are the overall winner!");
  } else if (computerScore > playerScore) {
    console.log("Computer is the overall winner!");
  } else {
    console.log("It's an overall tie!");
  }
}

// Start the game
game();