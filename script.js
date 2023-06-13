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

const resultsContainer = document.querySelector(".results-container");
const results = document.createElement("div");
results.classList.add("displayResults");

const rockbtn = document.querySelector(".rock-button");
// rockbtn.addEventListener("click", () => {
//   const resultText = playRound("ROCK");
//   results.textContent = resultText;
//   resultsContainer.appendChild(results);
// });

const paperbtn = document.querySelector(".paper-button");
// paperbtn.addEventListener("click", () => {
//   const resultText = playRound("PAPER");
//   results.textContent = resultText;
//   resultsContainer.appendChild(results);
// });

const scissorsbtn = document.querySelector(".scissor-button");
// scissorsbtn.addEventListener("click", () => {
//   const resultText = playRound("SCISSORS");
//   results.textContent = resultText;
//   resultsContainer.appendChild(results);
// });

const displayWinner = document.createElement("div");

const buttons = document.querySelectorAll("button");
let resultText = "";

let roundCounter = 1;
let userWins = 0;
let computerWins = 0;

buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    if (e.target.innerText.includes("Rock")) {
      resultText = playRound("ROCK");
      results.textContent = resultText;
      resultsContainer.appendChild(results);
      console.log(`Round: ${roundCounter}`);
      console.log(resultText);
      if (resultText.includes("You Win!")) {
        roundCounter += 1;
        userWins += 1;
        console.log(`Player's Score: ${userWins}`);
      } else if (resultText.includes("Computer Wins!")) {
        roundCounter += 1;
        computerWins += 1;
        console.log(`Computer's Score: ${computerWins}`);
      } else return;
    } else if (e.target.innerText.includes("Paper")) {
      resultText = playRound("PAPER");
      results.textContent = resultText;
      resultsContainer.appendChild(results);
      console.log(`Round: ${roundCounter}`);
      console.log(resultText);
      if (resultText.includes("You Win!")) {
        roundCounter += 1;
        userWins += 1;
        console.log(`Player's Score: ${userWins}`);
      } else if (resultText.includes("Computer Wins!")) {
        roundCounter += 1;
        computerWins += 1;
        console.log(`Computer's Score: ${computerWins}`);
      } else return;
    } else {
      resultText = playRound("SCISSORS");
      results.textContent = resultText;
      resultsContainer.appendChild(results);
      console.log(`Round: ${roundCounter}`);
      console.log(resultText);
      if (resultText.includes("You Win!")) {
        roundCounter += 1;
        userWins += 1;
        console.log(`Player's Score: ${userWins}`);
      } else if (resultText.includes("Computer Wins!")) {
        roundCounter += 1;
        computerWins += 1;
        console.log(`Computer's Score: ${computerWins}`);
      } else return;
    }
    if (roundCounter == 6 && userWins > computerWins) {
      console.log(
        "Congratulations! You beat a computer at Rock Paper Scissors!"
      );
    } else if (roundCounter == 6 && computerWins > userWins) {
      console.log("Congratulations! You suck at Rock Paper Scissors!");
    }
  })
);
