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
