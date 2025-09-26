const choices = ["rock", "paper", "scissors"]
const playerDisplay = document.getElementById("playerDisplay")
const computerDisplay = document.getElementById("computerDisplay")
let resultDisplay = document.getElementById("result")
const playerScoreDisplay = document.getElementById("playerScore")
const computerScoreDisplay = document.getElementById("computerScore")
let playerChoice;
let playerScore = 0;
let computerScore = 0;
resultDisplay.textContent = "Make your move!";



function playGame(playerChoice) {

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    if (playerChoice == computerChoice) {
        result = "IT'S A TIE!";
    } else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN":"YOU LOSE"
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN":"YOU LOSE"
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN":"YOU LOSE"
                break;
        }
    }
    playerDisplay.textContent = `Player: ${playerChoice}`
    computerDisplay.textContent = `Computer: ${computerChoice}`
    resultDisplay.textContent = result;

    switch(result){
        case "YOU WIN":
            resultDisplay.classList.remove("redText")
            resultDisplay.classList.add("greenText")
            playerScore++;
            playerScoreDisplay.textContent = `Player Score: ${playerScore}`
            break;
        case "YOU LOSE":
            resultDisplay.classList.remove("greenText")
            resultDisplay.classList.add("redText")
            computerScore++;
            computerScoreDisplay.textContent = `Computer Score: ${computerScore}`
            break;
        case "IT'S A TIE!":
            resultDisplay.classList.remove("greenText")
            resultDisplay.classList.remove("redText")
            break;
    }
if (playerScore === 4 || computerScore === 4) {
        resultDisplay.textContent = (playerScore === 4) ? "PLAYER WINS THE GAME!" : "COMPUTER WINS THE GAME!";
        setTimeout(resetGame, 3000);
    }
    
    
   
}   

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = "Player Score: 0";
    computerScoreDisplay.textContent = "Computer Score: 0";
    playerDisplay.textContent = "Player:";
    computerDisplay.textContent = "Computer:";
    resultDisplay.textContent = "Make your move!";
    resultDisplay.classList.remove("greenText", "redText");
}
