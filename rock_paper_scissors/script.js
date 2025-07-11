const CHOICES = ["rock", "paper", "scissors"];

const getComputerChoice = () => CHOICES[Math.floor(Math.random() * CHOICES.length)];

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win round";
  } else {
    return "Computer wins round";
  }
}

function restartGame() {
  // Reset scores
  playerScore = 0;
  computerScore = 0;

  // Reset displayed text
  document.querySelector("#user-choice").textContent = `Your choice: -`;
  document.querySelector(
    "#computer-choice"
  ).textContent = `Computer's choice: -`;
  document.querySelector("#result").textContent = `Result: -`;
  document.querySelector("#score").textContent = `Score: 0 - 0`;

  // Remove winner message and restart button
  const endContainer = document.querySelector("#end-container")
  endContainer.innerHTML = ""; // Clear the container
  endContainer.remove();
  // Enable buttons again
  document.querySelectorAll("button").forEach((button) => {
    button.disabled = false;
  });
}

function playRound(playerChoice) {
  playerChoice = playerChoice.toLowerCase();
  const computerChoice = getComputerChoice();

  // Select elements for displaying choices and results
  const showUserChoice = document.querySelector("#user-choice");
  const showComputerChoice = document.querySelector("#computer-choice");
  const showResult = document.querySelector("#result");
  const showScore = document.querySelector("#score");
  const gameContainer = document.querySelector(".game"); // Container for winner and restart button

  // Determine the result of the round
  const result = determineWinner(playerChoice, computerChoice);

  // Update scores
  if (result === "Computer wins round") {
    computerScore++;
  } else if (result === "You win round") {
    playerScore++;
  }

  // Check if the game is over
  if (computerScore === 5 || playerScore === 5) {
    const endContainer = document.createElement("div");
    const winner = document.createElement("h3");
    const restart = document.createElement("button");
    endContainer.id = "end-container";
    restart.id = "restart";

    if (computerScore === 5) {
      winner.textContent = "Game over! You lost!";
    } else if (playerScore === 5) {
      winner.textContent = "Congratulations! You won!";
    }

    restart.textContent = "RESTART";
    restart.addEventListener("click", restartGame);

    // Append winner message and restart button to the game container
    gameContainer.appendChild(endContainer);
    endContainer.appendChild(winner);
    endContainer.appendChild(restart);

    // Disable further button clicks
    document.querySelectorAll("button").forEach((button) => {
      if (button.id != "restart") {
        button.disabled = true;
      }
    });

    return; // Stop further execution
  }

  // Update the text content of the <p> nodes
  showUserChoice.textContent = `Your choice: ${playerChoice}`;
  showComputerChoice.textContent = `Computer's choice: ${computerChoice}`;
  showResult.textContent = `Result: ${result}`;
  showScore.textContent = `Score: ${playerScore} - ${computerScore}`;
}
let playerScore = 0;
let computerScore = 0;
let choice = document.querySelectorAll("button");

choice.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id)
  });
});

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

    console.log(
      `Score after Round ${i}: Player - ${playerScore}, Computer - ${computerScore}`
    );
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
// game();
