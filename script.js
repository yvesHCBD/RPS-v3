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
    console.log(
      "What a tie! Computer chose " +
        computerChoice +
        " and player chose " +
        playerChoice
    );
  } else if (playerChoice == "ROCK" && computerChoice == "PAPER") {
    console.log(computerChoice + " beats " + playerChoice + "! Computer wins!");
  } else if (playerChoice == "SCISSORS" && computerChoice == "ROCK") {
    console.log(computerChoice + " beats " + playerChoice + "! Computer wins!");
  } else if (playerChoice == "PAPER" && computerChoice == "SCISSORS") {
    console.log(computerChoice + " beats " + playerChoice + "! Computer wins!");
  } else if (playerChoice == "PAPER" && computerChoice == "ROCK") {
    console.log(playerChoice + " beats " + computerChoice + "! Player wins!");
  } else if (playerChoice == "ROCK" && computerChoice == "SCISSORS") {
    console.log(playerChoice + " beats " + computerChoice + "! Player wins!");
  } else if (playerChoice == "SCISSORS" && computerChoice == "PAPER") {
    console.log(playerChoice + " beats " + computerChoice + "! Player wins!");
  }
}
playRound();
