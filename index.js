/* const choices = ["rock", "paper", "scissors"];

//Play game 5 times
function game() {
  let winnerC = [];
  let winnerP = [];
  let noWinners = [];

  for (let i = 0; i < 5; i++) {
    let game = playRound();
    if (game === "Tie") {
      noWinners.push(game);
      console.log("It is a tie");
    } else if (game === "Player wins") {
      winnerP.push(game);
      console.log(`You won! ${round[i]}`);
    } else {
      winnerC.push(game);
      console.log(`Computer won ${round[i]}`);
    }
  }

  if (winnerC.length > winnerP.length) {
    return "Computer won";
  } else if (winnerP.length > winnerC.length) {
    return "Player won";
  } else {
    return "It's a tie";
  }
}

console.log(game());

//Play one round
function playRound() {
  const player = playerSelection();
  const computer = computerSelection();

  if (player === computer) {
    return "Tie";
  } else if (
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper") ||
    (player === "rock" && computer === "scissors")
  ) {
    return "Player wins";
  } else {
    return "Computer wins";
  }
}

//Ask player to select his choice and validate input

function playerSelection() {
  //let input = prompt("Select rock, paper or scissors");

  //check if user presses Cancel
  while (input == null) {
    input = prompt("Select rock, paper or scissors");
  }
  input = input.toLowerCase();
  let check = validateInput(input);

  //check if user typed wrong word
  while (check == false) {
    input = prompt(
      "Select rock, paper or scissors. You've typed the wrong word."
    );
    while (input == null) {
      input = prompt("Select rock, paper or scissors");
      input = input.toLowerCase();
      check = validateInput(input);
    }
    return input;
  }
  return input;
}

//computer selection
function computerSelection() {
  return choices[Math.floor(Math.random() * choices.length)];
}

//validate user selection
function validateInput(choice) {
  return choices.includes(choice);
}
*/

const selection = ["rock", "paper", "scissors"];

const computerSelection = function () {
  return selection[Math.floor(Math.random() * selection.length)];
};

const playerSelection = function () {
  let playerChoice = prompt(
    "Select between rock, scissors or paper"
  ).toLowerCase();
  return playerChoice;
};

const playRound = function () {
  const player = playerSelection();
  const computer = computerSelection();

  if (player === computer) {
    return "It's a draw!";
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "scissors" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  ) {
    return "You won!";
  } else {
    return "You lost";
  }
};

const game = function (numOfGames) {
  let playerCount = 0;
  let computerCount = 0;

  for (let i = 0; i < numOfGames; i++) {
    let game = playRound();
    if (game === "You won!") {
      playerCount++;
    } else if (game === "You lost") {
      computerCount++;
    } else {
      playerCount++;
      computerCount++;
    }
  }
  console.log(playerCount);
  console.log(computerCount);
  if (playerCount > computerCount) return `You won! You scored ${playerCount}`;
  else if (computerCount > playerCount) return `You lost!`;
  else return `It's a draw!`;
};

console.log(game(5));
