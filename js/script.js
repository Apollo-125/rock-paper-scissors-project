
console.log(`Welcome to Rock, Paper, Scissors`);

function getComputerChoice(){
    let num = Math.floor(Math.random() * 3) + 1;
    /*Creates a number variable from 1-3 at random*/
    if (num === 1){
        return (`Rock`)
    } else if (num === 2){
        return (`Paper`)
    } else {
        return (`Scissors`)
    }
    /* Create an if statement to match each number to either R/P/S string */
}

function getPlayerChoice(){
    let playerChoice = prompt(`Please enter Rock, Paper, or Scissors`)
    let convPlayerChoice = (playerChoice.toLowerCase())
    if (convPlayerChoice == "rock"){
        return (`Rock`)
    } else if (convPlayerChoice == "paper") {
        return (`Paper`)
    } else if (convPlayerChoice == "scissors") {
        return (`Scissors`)
    } else {
        return ('Error')
    }
    /* Create a function that will take a player input, convert it to lower case and return a proper value relevant to the game*/
}

function playRound(){
   if (getPlayerChoice === "Rock"){
    switch (getComputerChoice){
        case "Rock":
            return (`Draw`)
            break;
        case "Scissors":
            return (`Win`)
            break;
        case "Paper":
            return (`Lose`)
            break;
        } 
   } else if (getPlayerChoice == "Scissors"){
        switch (getComputerChoice){
         case "Rock":
            return (`lose`)
            break;
         case "Scissors":
            return (`Draw`)
            break;
         case "Paper":
            return (`Win`)
            break;
        }
   } else {
        switch (getComputerChoice){
        case "Rock":
            return (`Win`)
            break;
        case "Scissors":
            return (`Lose`)
            break;
        case "Paper":
            return (`Draw`)
            break;
        }
    }
   }
/* This code tests the player choice against expression computerChoice and returns win, lose or draw*/

let playerWins = +0
let computerWins = +0
let draws = +0


while (playerWins || computerWins < 5){
console.log(`The computer has ${computerWins} wins. You have ${playerWins} wins. There have been ${draws} draws.`)
let computerChoice = getComputerChoice();
alert(`The computer has chosen ${computerChoice}`)
console.log(`The computer has chosen ${computerChoice}`)
let playerChoice = getPlayerChoice();
alert(`You have chosen ${playerChoice}`)
console.log(`You have chosen ${playerChoice}`)

console.log(playRound())

if (playRound() == "Win"){
    playerWins++
    console.log(`Player wins`)
} else if (playRound() == "Lose"){
    computerWins++
    console.log(`Computer wins`)
} else {
    draws++
    console.log(`Draw`)
}
}

console.log(`Game Over`)












/* The Algorithm/problem will be as folows:

Update:

What we have so far:

The computer will pick a choice at random, the choice is stored
The user is asked for a prompt to pick a choice, the choice is stored
The programe will compare the two and declare a win, lose or draw

What we need:

A win or lose will add to playerWins/computerWins
   

A loop to contain the code we have, to keep going if either win count is less than 5
If playerWins or computerWins gets to 5, a winner is declared








1. We want the computer to pick Rock/Paper/Scissors at random and for the choice to be saved
   Pick a number between 1-3
        math.floor random function to get 1-3
   Return a value of Rock/Paper/Scissors depending on the number
        if 1 then return 'rock'
        if 2 then return 'paper'
        if 3 then return 'scissors'
   Save the value/Return the value
        Create a variable using the getChoice function, which would be 'computerChoice'

2. We want the user to select Rock/Paper/Scissors and for that choice to be saved
    Create a function to obtain the player choice
        User to be prompted to pick Rock/Paper/Scissors
        User has to pick one of the three and it must be case in-sensitive
            Change the choice to lower or upper case
            Create three strings for it to match to, if it doesn't then must state entered incorrectly, or loop back?
            Return one of three strings as the result of the function.
    Return the player choice into a new variable
    



3. Make a function to compare player and computer choice, and return win/lose/draw
    if player chooses rock THEN (rock and rock = draw, rock and paper = lose, rock and scissors = win)
    if player chooses paper THEN (paper and rock = win, paper and paper = draw, paper and scissors = lose)
    if player chooses scissors THEN (scissors and scissors = draw, scissors and rock = lose, scissors and paper = win)


        

4. A win must store a win point, and vice versa
    Two variables for playerWins and computerWins. Each must be increased upon round completion

5. A draw must repeat the round.

6. A gameover/victory must occure at 5 points either end.
    if playerWins is 5 then Victory
    if computerWins is 5 then Game Over
    if neither, then keepGoing



*/