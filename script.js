let playerScore = 0;
let computerScore = 0;
const rockButton = document.querySelector(".rock")
const paperButton = document.querySelector(".paper")
const scissorsButton = document.querySelector(".scissors")
const result = document.querySelector(".result");
const playerScoreSpan = document.querySelector(".player-score")
const computerScoreSpan = document.querySelector(".computer-score")



function getComputerChoice() {
    let number = Math.floor(Math.random() * 3 + 1);
        if (number == 1) {
            computerChoice = "rock";
        }
        else if (number == 2){
            computerChoice = "paper";
        }
        else {
            computerChoice = "scissors";
        }
        return(computerChoice);
}
        
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors"){
            playerScore++;
            const p = document.createElement("p")
            p.innerText = "You Win! Rock beats Scissors";
            result.appendChild(p)
            // return("You Win! Rock beats Scissors");
        }
        else if (playerSelection === "rock" && computerSelection === "paper"){
            computerScore++;
            const p = document.createElement("p")
            p.innerText = "You Lose! Paper beats Rock";
            result.appendChild(p)
            // return("You Lose! Paper beats Rock");
        }
        else if (playerSelection === "rock" && computerSelection === "rock"){
            const p = document.createElement("p")
            p.innerText = "You tied! You both chose Rock";
            result.appendChild(p)
            // return("You tied! You both chose Rock");
        }
        else if (playerSelection === "scissors" && computerSelection === "rock"){
            computerScore++;
            const p = document.createElement("p")
            p.innerText = "You Lose! Rock beats Scissors";
            result.appendChild(p)
            // return("You Lose! Rock beats Scissors");
        }
        else if (playerSelection === "scissors" && computerSelection === "paper"){
            playerScore++;
            const p = document.createElement("p")
            p.innerText = "You Win! Scissors beats Paper";
            result.appendChild(p)
            // return("You Win! Scissors beats Paper");
        }
        else if (playerSelection === "scissors" && computerSelection === "scissors"){
            const p = document.createElement("p")
            p.innerText = "You tied! You both chose Scissors";
            result.appendChild(p)
            // return("You tied! You both chose Scissors");
        }
        else if (playerSelection === "paper" && computerSelection === "rock"){
            playerScore++;
            const p = document.createElement("p")
            p.innerText = "You Win! Paper beats Rock";
            result.appendChild(p)
            // return("You Win! Paper beats Rock");
        }
        else if (playerSelection === "paper" && computerSelection === "scissors"){
            computerScore++;
            const p = document.createElement("p")
            p.innerText = "You Lose! Scissors beats Paper";
            result.appendChild(p)
            // return("You Lose! Scissors beats Paper");
        }
        else {
            const p = document.createElement("p")
            p.innerText = "You tied! You both chose Paper";
            result.appendChild(p)
            // return("You tied! You both chose Paper");
        }
}

const winner = (playerScore, computerScore) => {
    if (playerScore === 5){
        const h2 = document.createElement("h2")
        h2.innerText = `You won! You beat the computer ${playerScore} to ${computerScore}`
        result.appendChild(h2);
    }
    else if (computerScore === 5){
        const h2 = document.createElement("h2")
        h2.innerText = `You lost! The computer beat you ${playerScore} to ${computerScore}`
        result.appendChild(h2);
    }   
    else {
        return;
    }
}

const updateScore = (playerScore, computerScore) => {
    playerScoreSpan.innerText = `Player Score: ${playerScore}`
    computerScoreSpan.innerText = `Computer Score: ${computerScore}`
}

rockButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "rock";
    playRound(playerSelection, computerSelection);
    updateScore(playerScore, computerScore)
    winner(playerScore, computerScore)
})

paperButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "paper";
    playRound(playerSelection, computerSelection);
    updateScore(playerScore, computerScore)
    winner(playerScore, computerScore)
})

scissorsButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "scissors";
    playRound(playerSelection, computerSelection);
    updateScore(playerScore, computerScore)
    winner(playerScore, computerScore)
})