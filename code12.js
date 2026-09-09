let game = ["rock" , "paper" , "scissors"];

function getComputerChoice(){
    let randomIndex = Math.floor(Math.random() * game.length) ;
    return game[randomIndex];
}

function winner(user , computer){
    if(user === computer){
        return "TIE" ;
    }
    else if(
        (user === "rock" && computer === "scissors") ||
         (user === "paper" && computer === "rock") || 
         (user === "scissors" && computer === "paper"))
         {
        return "USER WIN";
    }
    else{
        return "COMPUTER WIN";
    }
}

let computerScore = document.getElementById("computer-score");
let userScore = document.getElementById("user-score");

let result = document.getElementById("result");

let computerAns = document.getElementById("computer-ans");
let userAns = document.getElementById("user-ans");

let scoreOfUser = 0;
let scoreOfComputer = 0;

let userChoice = document.getElementsByClassName("box");

let resetBtn = document.getElementById("reset");

for(let choice of userChoice){
    choice.addEventListener("click" , function(){
        let user = this.classList[1];
        let computer = getComputerChoice();

        computerAns.textContent = user;
        userAns.textContent = computer;

        let output = winner(user , computer);

        if(output === "TIE"){
            result.textContent = "IT'S A TIE";

        }
        else if(output === "USER WIN"){
            scoreOfUser++;
            userScore.textContent = scoreOfUser;
            result.textContent = "USER WIN";
        }
        else{
            scoreOfComputer++;
            computerScore.textContent = scoreOfComputer;
            result.textContent = "COMPUTER WIN";
        }
    });
}

resetBtn.onclick = function(){
    scoreOfComputer = 0;
    scoreOfUser = 0 ;

    computerScore.textContent = scoreOfComputer;
    userScore.textContent = scoreOfUser;

    result.textContent = "CHOOSE YOUR MOVE";

    computerAns.textContent = "NULL";
    userAns.textContent = "NULL";

};
