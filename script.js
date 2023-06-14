function getRandInt() {
  return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
  let choice = getRandInt();
  if (choice == 0) {
    return "ROCK";
  } else if (choice == 1) {
    return "PAPER";
  } else {
    return "SCISSORS";
  }
}

function playRound(playerChoice) {
  let computerChoice = getComputerChoice();
  if (computerChoice == playerChoice) {
    return `What a tie! You both chose ${computerChoice}. \r\nRound is reset due to tie`;
  } else if (playerChoice == "ROCK" && computerChoice == "PAPER") {
    return `You chose ${playerChoice} while Computer chose ${computerChoice}. \r\nComputer Wins!`;
  } else if (playerChoice == "SCISSORS" && computerChoice == "ROCK") {
    return `You chose ${playerChoice} while Computer chose ${computerChoice}. \r\nComputer Wins!`;
  } else if (playerChoice == "PAPER" && computerChoice == "SCISSORS") {
    return `You chose ${playerChoice} while Computer chose ${computerChoice}. \r\nComputer Wins!`;
  } else if (playerChoice == "PAPER" && computerChoice == "ROCK") {
    return `You chose ${playerChoice} while Computer chose ${computerChoice}. \r\nYou Win!`;
  } else if (playerChoice == "ROCK" && computerChoice == "SCISSORS") {
    return `You chose ${playerChoice} while Computer chose ${computerChoice}. \r\nYou Win!`;
  } else if (playerChoice == "SCISSORS" && computerChoice == "PAPER") {
    return `You chose ${playerChoice} while Computer chose ${computerChoice}. \r\nYou Win!`;
  }
}

const resultsContainer = document.querySelector(".results-container");
const results = document.createElement("div");
results.classList.add("displayResults");

const displayWinner = document.createElement("div");
const buttons = document.querySelectorAll("button");

function endGame() {
  if (roundCounter == 6 && userWins > computerWins) {
    results.textContent =
      "Congratulations! You beat a computer at Rock Paper Scissors!";
    console.log("Congratulations! You beat a computer at Rock Paper Scissors!");
    resultsContainer.appendChild(results);
    roundCounter = 0;
    userWins = 0;
    computerWins = 0;
  } else if (roundCounter == 6 && computerWins > userWins) {
    results.textContent = "Congratulations! You suck at Rock Paper Scissors!";
    console.log("Congratulations! You beat a computer at Rock Paper Scissors!");
    resultsContainer.appendChild(results);
    roundCounter = 1;
    userWins = 0;
    computerWins = 0;
  }
}

const displayCurrentRound = document.createElement("h4");
displayCurrentRound.classList.add("currentRound");

const displayCurrentScore = document.createElement("div");
displayCurrentScore.classList.add("currentScoreContainer");

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
      displayCurrentRound.textContent = `ROUND: ${roundCounter} of 5`;
      resultsContainer.prepend(displayCurrentRound);
      if (resultText.includes("You Win!")) {
        roundCounter += 1;
        userWins += 1;
        displayCurrentScore.textContent = `Player's Score: ${userWins} | Computer's Score: ${computerWins}`;
        resultsContainer.appendChild(displayCurrentScore);
      } else if (resultText.includes("Computer Wins!")) {
        roundCounter += 1;
        computerWins += 1;
        displayCurrentScore.textContent = `Player's Score: ${userWins} | Computer's Score: ${computerWins}`;
        resultsContainer.appendChild(displayCurrentScore);
      } else {
        displayCurrentScore.textContent = `Player's Score: ${userWins} | Computer's Score: ${computerWins}`;
        resultsContainer.appendChild(displayCurrentScore);
      }
    } else if (e.target.innerText.includes("Paper")) {
      resultText = playRound("PAPER");
      results.textContent = resultText;
      resultsContainer.appendChild(results);
      displayCurrentRound.textContent = `ROUND: ${roundCounter} of 5`;
      resultsContainer.prepend(displayCurrentRound);
      if (resultText.includes("You Win!")) {
        roundCounter += 1;
        userWins += 1;
        displayCurrentScore.textContent = `Player's Score: ${userWins} | Computer's Score: ${computerWins}`;
        resultsContainer.appendChild(displayCurrentScore);
      } else if (resultText.includes("Computer Wins!")) {
        roundCounter += 1;
        computerWins += 1;
        displayCurrentScore.textContent = `Player's Score: ${userWins} | Computer's Score: ${computerWins}`;
        resultsContainer.appendChild(displayCurrentScore);
      } else {
        displayCurrentScore.textContent = `Player's Score: ${userWins} | Computer's Score: ${computerWins}`;
        resultsContainer.appendChild(displayCurrentScore);
      }
    } else {
      resultText = playRound("SCISSORS");
      results.textContent = resultText;
      resultsContainer.appendChild(results);
      displayCurrentRound.textContent = `ROUND: ${roundCounter} of 5`;
      resultsContainer.prepend(displayCurrentRound);
      if (resultText.includes("You Win!")) {
        roundCounter += 1;
        userWins += 1;
        displayCurrentScore.textContent = `Player's Score: ${userWins} | Computer's Score: ${computerWins}`;
        resultsContainer.appendChild(displayCurrentScore);
      } else if (resultText.includes("Computer Wins!")) {
        roundCounter += 1;
        computerWins += 1;
        displayCurrentScore.textContent = `Player's Score: ${userWins} | Computer's Score: ${computerWins}`;
        resultsContainer.appendChild(displayCurrentScore);
      } else {
        displayCurrentScore.textContent = `Player's Score: ${userWins} | Computer's Score: ${computerWins}`;
        resultsContainer.appendChild(displayCurrentScore);
      }
    }
    endGame();
  })
);

//OH MY GOD I THINK I'VE ACTUALLY COMPLETED THIS PROPERLY WOOOOOOO JUN 13 @ 4:11 AM
