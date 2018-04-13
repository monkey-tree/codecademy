// function to get user input by assign a choice in main.
function getUserChoice (userInput) {
  userInput = userInput.toLowerCase();
  if ((userInput == 'rock') | (userInput == 'paper') | (userInput == 'scissors'))
  {
    return userInput;
  } else {
    console.log("User input must be one of rock, paper and scissors.")
    return false;
  }
}

// function to get input fro computer by random choice.
function getUserChoice (userInput) {
  userInput = userInput.toLowerCase();
  if ((userInput == 'rock') | (userInput == 'paper') | (userInput == 'scissors'))
  {
    return userInput;
  } else {
    console.log("User input must be one of rock, paper and scissors.")
    return false;
  }
}

// function to get input from computer by random choice
function getComputerChoice (){
  computerInput = Math.floor(Math.random()*2)
  if (computerInput == 0) {
    return 'rock';
  } else if (computerInput == 1) {
    return 'paper';
  } else if (computerInput == 2) {
    return 'scissors';
  }
}

// function to compare input from user and computer, return a string to indicate the game result.
function determin (userChoice, computerChoice) {
  if (userChoice == computerChoice) {
    return `User choice inspect is ${userChoice} and computer choice is ${computerChoice}\n> User and Computer are tied.`;
  } else if (((userChoice == "rock") && (computerChoice == "paper")) || ((userChoice == "paper") && (computerChoice == "scissors")) || ((userChoice == "scissors") && (computerChoice == "rock"))){
    return `User userChoice is ${userChoice} and computerChoice is ${computerChoice}\n> then Computer win.`
  } else {
    return `User choice is ${userChoice} and computer choice is ${computerChoice}\n> then User win.`
  }
}

let userInput = 'rock'
let gameResult = determin (getUserChoice (userInput), getComputerChoice())
console.log (`Rock paper scissors game result:\n> ${gameResult}`)
