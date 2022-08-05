// Make a random selection from an array of strings
function getComputerChoice(selections) {
    let choice = selections[Math.floor(Math.random()*selections.length)];
    return choice;
}

// Prompt the player to select either rock, paper or scissors
function getPlayerChoice(selections) {
    let choice = (prompt("Rock, Paper or Scissors?").toLowerCase());
    // Ensure the player makes a valid choice
    if (!(selections.includes(choice))) {
        alert("You made an invalid choice\r\nPlease choose one of Rock, Paper or Scissors");
        return getPlayerChoice(selections);
    }
    return choice;
}

// Defines 1 round of the game
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

game();