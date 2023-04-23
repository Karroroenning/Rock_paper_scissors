const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
}))

function generateComputerChoice() {
    const randomNum = Math.floor(Math.random() * 5) + 1
    
    if (randomNum === 1) {
        computerChoice = 'rock'
    }
    if (randomNum === 2) {
        computerChoice = 'scissors'
    }
    if (randomNum === 3) {
        computerChoice = 'paper'
    }
    if (randomNum === 4) {
        computerChoice = 'lizard'
    }
    if (randomNum === 5) {
        computerChoice = 'spock'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}