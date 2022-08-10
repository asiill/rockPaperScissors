/* 
Rock Paper Scissors
*/

let computerScore = 0;
let playerScore = 0;

const playerResult = document.querySelector("#playerResult");
const computerResult = document.querySelector("#computerResult");
const finalResult = document.querySelector("#finalResult");

const resetGame = document.querySelector(".reset");
resetGame.addEventListener("click", function() {
    location.reload();
});

let choices = document.querySelectorAll(".choices");
choices.forEach(c => {
    c.addEventListener("click", eventHandler);
});

function eventHandler(e) {
    const button = e.target;
    let playerChoice = button.value;
    playRound(playerChoice);
}

function getComputerChoice() {
    const selections = ["rock", "paper", "scissors"];
    let choice = selections[Math.floor(Math.random()*selections.length)];
    return choice;
}

function playRound(playerChoice){
    let computerChoice = getComputerChoice();
    let result;

    if (playerChoice === computerChoice){
        result = ("It's a tie\r\n" + playerChoice + " " + "clashes with" + " " + computerChoice);
        finalResult.textContent = result;
        playerResult.textContent = playerScore;
        computerResult.textContent = computerScore;
        
    }
    else if ((playerChoice === "rock" && computerChoice === "paper") || (playerChoice === "paper" && computerChoice === "scissors") || (playerChoice === "scissors" && computerChoice === "rock")){
        computerScore += 1;
        result = ("You lose this round\r\n" + playerChoice + " " + "is overcome by" + " " + computerChoice);
        finalResult.textContent = result;
        playerResult.textContent = playerScore;
        computerResult.textContent = computerScore;
    }
    else {
        playerScore += 1;
        result = ("You win this round\r\n" + playerChoice + " " + "defeats" + " " + computerChoice);
        finalResult.textContent = result;
        playerResult.textContent = playerScore;
        computerResult.textContent = computerScore;
    }
    checkScores(playerChoice, computerChoice);
}

function checkScores(playerChoice, computerChoice) {
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === 5) {
            finalResult.style.color = "green";
            finalResult.textContent = "You won the game\r\n" + playerChoice + " " + "defeats" + " " + computerChoice;
        }
        else {
            finalResult.style.color = "red";
            finalResult.textContent = "You lost the game\r\n" + playerChoice + " " + "is overcome by" + " " + computerChoice;
        }
        choices.forEach(c => {
            c.removeEventListener("click", eventHandler);
        });
    }
}

/*

function getPlayerChoice(selections) {
    let choice = (prompt("Rock, Paper or Scissors?").toLowerCase());
    // Ensure the player makes a valid choice
    if (!(selections.includes(choice))) {
        alert("You made an invalid choice\r\nPlease choose one of Rock, Paper or Scissors");
        return getPlayerChoice(selections);
    }
    return choice;
}

function playRound(playerChoice, computerChoice){
    let result;
    if (playerChoice === computerChoice){
        result = ["tie", playerChoice, computerChoice];
    }
    else if ((playerChoice === "rock" && computerChoice === "paper") || (playerChoice === "paper" && computerChoice === "scissors") || (playerChoice === "scissors" && computerChoice === "rock")){
        result = ["computer", playerChoice, computerChoice];
    }
    else {
        result = ["player", playerChoice, computerChoice];
    }
    return result;

}

function game(){
    let selections = ["rock", "paper", "scissors"];
    let computerScore = 0;
    let playerScore = 0;
    let result;
    // A game is 5 rounds
    for (let i = 0; i < 5; i++){
        let computerChoice = getComputerChoice(selections);
        let playerChoice = getPlayerChoice(selections);
        let round = playRound(playerChoice, computerChoice);
        // Print the result for each round
        if (round[0] === "tie"){
            computerScore += 1;
            playerScore += 1;
            alert ("It's a tie\r\n" + round[1] + " " + "clashes with" + " " + round[2]);
        }
        else if (round[0] === "computer"){
            computerScore += 1;
            alert ("You lose this round\r\n" + round[1] + " " + "is overcome by" + " " + round[2]);
        }
        else {
            playerScore += 1;
            alert("You win this round\r\n" + round[1] + " " + "defeats" + " " + round[2]);
        }
    }
    // Determine the final game score
    if (playerScore === computerScore){
        result = playerScore + " " + ":" + " " + computerScore + "\r\nIt's a tie";
    }
    else if (playerScore > computerScore){
        result = playerScore + " " + ":" + " " + computerScore + "\r\nYou won the game";
    }
    else {
        result = playerScore + " " + ":" + " " + computerScore + "\r\nYou lost the game";
    }
    alert(result);
}

*/