console.log("Hello");

function getRandInt() {
  return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
  let choice = getRandInt();
  if (choice == 0) {
    return "Rock";
  } else if (choice == 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function getPlayerChoice() {
  let playerChoice = prompt("Choose: Rock, Paper, Scissors");
  return playerChoice;
}

function playRound(playerChoice) {
  let computerChoice = getComputerChoice().toUpperCase();
  if (computerChoice == playerChoice) {
    return `What a tie! You both chose ${computerChoice}`;
  } else if (playerChoice == "ROCK" && computerChoice == "PAPER") {
    return `You chose ${playerChoice} while Computer chose ${computerChoice}. Computer Wins!`;
  } else if (playerChoice == "SCISSORS" && computerChoice == "ROCK") {
    return `You chose ${playerChoice} while Computer chose ${computerChoice}. Computer Wins!`;
  } else if (playerChoice == "PAPER" && computerChoice == "SCISSORS") {
    return `You chose ${playerChoice} while Computer chose ${computerChoice}. Computer Wins!`;
  } else if (playerChoice == "PAPER" && computerChoice == "ROCK") {
    return `You chose ${playerChoice} while Computer chose ${computerChoice}. You Win!`;
  } else if (playerChoice == "ROCK" && computerChoice == "SCISSORS") {
    return `You chose ${playerChoice} while Computer chose ${computerChoice}. You Win!`;
  } else if (playerChoice == "SCISSORS" && computerChoice == "PAPER") {
    return `You chose ${playerChoice} while Computer chose ${computerChoice}. You Win!`;
  }
}

function playGame() {
  let roundCounter = 0;
  let userWins = 0;
  let computerWins = 0;
  do {
    let result = playRound();
    if (result.includes("Computer wins!")) {
      computerWins += 1;
      roundCounter += 1;
      console.log("Computer wins!");
    } else if (result.includes("Player wins!")) {
      userWins += 1;
      roundCounter += 1;
      console.log("Player wins!");
    } else {
      console.log("Tie!");
    }
  } while (roundCounter !== 5);

  if (userWins > computerWins) {
    console.log("User is the winner!");
  } else {
    console.log("Computer is the winner!");
  }
}

// playGame();
//
//

function TestplayRound(playerChoice) {
  let computerChoice = getComputerChoice().toUpperCase();

  if (computerChoice == playerChoice) {
    console.log(
      "What a tie! Computer chose " +
        computerChoice +
        " and player chose " +
        playerChoice
    );
  } else if (playerChoice == "ROCK" && computerChoice == "PAPER") {
    console.log("Computer wins!");
  } else if (playerChoice == "SCISSORS" && computerChoice == "ROCK") {
    console.log("Computer wins!");
  } else if (playerChoice == "PAPER" && computerChoice == "SCISSORS") {
    console.log("Computer wins!");
  } else if (playerChoice == "PAPER" && computerChoice == "ROCK") {
    console.log("Player wins!");
  } else if (playerChoice == "ROCK" && computerChoice == "SCISSORS") {
    console.log("Player wins!");
  } else if (playerChoice == "SCISSORS" && computerChoice == "PAPER") {
    console.log("Player wins!");
  }
}

const resultsContainer = document.querySelector(".results-container");
const results = document.createElement("div");
results.classList.add("displayResults");

const rockbtn = document.querySelector(".rock-button");
rockbtn.addEventListener("click", () => {
  const resultText = playRound("ROCK");
  results.textContent = resultText;
  resultsContainer.appendChild(results);
});

const paperbtn = document.querySelector(".paper-button");
paperbtn.addEventListener("click", () => {
  const resultText = playRound("PAPER");
  results.textContent = resultText;
  resultsContainer.appendChild(results);
});

const scissorsbtn = document.querySelector(".scissor-button");
scissorsbtn.addEventListener("click", () => {
  const resultText = playRound("SCISSORS");
  results.textContent = resultText;
  resultsContainer.appendChild(results);
});

const displayWinner = document.createElement("div");
