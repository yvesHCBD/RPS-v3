console.log("Hello");

function getRandInt() {
  return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
  let choice = getRandInt();
  if (choice == 0) {
    console.log("Rock");
    return "Rock";
  } else if (choice == 1) {
    console.log("Paper");
    return "Paper";
  } else {
    console.log("Scissors");
    return "Scissors";
  }
}

function getPlayerChoice() {
  let playerChoice = prompt("Choose: Rock, Paper, Scissors");
  return playerChoice;
}

function playRound() {
  let computerChoice = getComputerChoice().toUpperCase();
  let playerChoice = getPlayerChoice().toUpperCase();

  if (computerChoice == playerChoice) {
    return (
      "What a tie! Computer chose " +
      computerChoice +
      " and player chose " +
      playerChoice
    );
  } else if (playerChoice == "ROCK" && computerChoice == "PAPER") {
    return "Computer wins!";
  } else if (playerChoice == "SCISSORS" && computerChoice == "ROCK") {
    return "Computer wins!";
  } else if (playerChoice == "PAPER" && computerChoice == "SCISSORS") {
    return "Computer wins!";
  } else if (playerChoice == "PAPER" && computerChoice == "ROCK") {
    return "Player wins!";
  } else if (playerChoice == "ROCK" && computerChoice == "SCISSORS") {
    return "Player wins!";
  } else if (playerChoice == "SCISSORS" && computerChoice == "PAPER") {
    return "Player wins!";
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

playGame();
