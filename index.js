const values = ["rock", "paper", "scissors"];

const results = document.querySelector("#results");
results.setAttribute("style", "display: flex; width: 200px; justify-content: space-between");

const displayHumanScoreText = document.createElement("p");
displayHumanScoreText.textContent = "Your score";
results.appendChild(displayHumanScoreText);

const displayComputerScoreText = document.createElement("p");
displayComputerScoreText.textContent = "Computer score";
results.appendChild(displayComputerScoreText);

const displayHumanScore = document.createElement("p");
displayHumanScore.textContent = 0;
displayHumanScoreText.appendChild(displayHumanScore);

const displayComputerScore = document.createElement("p");
displayComputerScore.textContent = 0;
displayComputerScoreText.appendChild(displayComputerScore);

const winner = document.querySelector("#winner");

const gameWinner = document.querySelector("#gameWinner");

const rock = document.querySelector("#rock");

let humanScore = 0;
function humanWinner() {
    if(humanScore === 5) {
        winner.textContent = "";
        gameWinner.textContent = "You won the game! " + humanScore + " at " + computerScore + "!";
        console.log("You won the game! " + humanScore + " at " + computerScore + "!");
        resetGame();
    }
}
let computerScore = 0;
function computerWinner() {
    if(computerScore === 5) {
        winner.textContent = "";
        gameWinner.textContent = "Computer won the game! " + computerScore + " at " + humanScore + "!";
        console.log("Computer won the game! " + computerScore + " at " + humanScore + "!");
        resetGame();
    }
}

function resetGame() {
    humanScore = 0;
    displayHumanScore.textContent = 0;
    computerScore = 0;
    displayComputerScore.textContent = 0;
}

function rockButton() {
    let computerChoice = values[Math.floor(Math.random() * values.length)];
    console.log(computerChoice);
    if(computerChoice === "rock") {
        console.log("Tie");
        winner.textContent = "Tie";
    }
    else if(computerChoice === "paper") {
        console.log("You lose");
        winner.textContent = "You lose";
        computerScore++;
        displayComputerScore.textContent = computerScore;
        console.log(humanScore);
        console.log(computerScore);
    }
    else if(computerChoice === "scissors") {
    console.log("You win");
    winner.textContent = "You win";
    humanScore++;
    displayHumanScore.textContent = humanScore;
    console.log(humanScore);
    console.log(computerScore);
    }
    humanWinner();
    computerWinner();
}

const paper = document.querySelector("#paper");
function paperButton() {
    let computerChoice = values[Math.floor(Math.random() * values.length)];
    console.log(computerChoice);
    if(computerChoice === "rock") {
        console.log("You win");
        winner.textContent = "You win";
        humanScore++;
        displayHumanScore.textContent = humanScore;
        console.log(humanScore);
        console.log(computerScore);
    }
    else if(computerChoice === "paper") {
        console.log("Tie");
        winner.textContent = "Tie";
    }
    else if(computerChoice === "scissors") {
    console.log("You lose");
    winner.textContent = "You lose";
    computerScore++;
    displayComputerScore.textContent = computerScore;
    console.log(humanScore);
    console.log(computerScore);
    }
    humanWinner();
    computerWinner();
}

const scissors = document.querySelector("#scissors");
function scissorsButton() {
    let computerChoice = values[Math.floor(Math.random() * values.length)];
    console.log(computerChoice);
    if(computerChoice === "rock") {
        console.log("You lose");
        winner.textContent = "You lose";
        computerScore++;
        displayComputerScore.textContent = computerScore;
        console.log(humanScore);
        console.log(computerScore);
    }
    else if(computerChoice === "paper") {
        console.log("You win");
        winner.textContent = "You win";
        humanScore++;
        displayHumanScore.textContent = humanScore;
        console.log(humanScore);
        console.log(computerScore);
    }
    else if(computerChoice === "scissors") {
    console.log("Tie");
    winner.textContent = "Tie";
    }
    humanWinner();
    computerWinner();
}

function game() {
    rock.addEventListener("click", rockButton);
    paper.addEventListener("click", paperButton);
    scissors.addEventListener("click", scissorsButton);
}

game()