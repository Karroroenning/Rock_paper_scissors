var user;
var yourScore = 0;
var computer;
var computerScore = 0;

var resultDisplay = document.getElementById('result');
var result;

var choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

// Choose the choice img

window.onload = function() {
    for (var i = 0; i < 5; i++) {
        var choice = document.createElement('img');
        choice.id = choices[i];
        choice.src = "assets/images/" + choices[i] + '.png';
        choices[i].alt="user choises";
        choice.alt = choices[i] + "user choises";
        choice.addEventListener('click', selectChoice);
        document.getElementById('your-choices').append(choice);
    }
};

function selectChoice() {
        user = this.id;
        document.getElementById('user-choice').src = 'assets/images/' + user + '.png';
        console.log(document.getElementById('user-choice').src);
   
// Random for the computer

        computer = choices[Math.floor(Math.random() * 5)]; 
        document.getElementById('computer-choice').src = 'assets/images/' + computer + '.png';
        console.log(document.getElementById('computer-choice').src);

// check who wins

if (user === computer) {
    yourScore += 1;
    computerScore += 1;
    result = "It's a tie!";
}
    
else {
// user choose scissors

    if (user === 'scissors') {
        if (computer === 'paper') {
            yourScore +=1;
            result = 'You win! Scissors cuts paper';
        }
         else if (computer === 'rock') {
            computerScore += 1;
            result = 'You lost! Rock crushes scissors';
        }
        else if (computer === 'lizard') {
            yourScore += 1;
            result = 'You Win! Scissors decapitates lizard';
        }
         else if (computer === 'spock') {
            computerScore += 1;
            result = 'You lost! spock smashes scissors';
        }
    }
else 
// User choose rock

    if (user === 'rock') {
        if (computer === 'lizard') {
            yourScore +=1;
            result = 'You win! Rock cruches lizard';
        }
        else if (computer === 'spock') {
            computerScore += 1;
            result = 'You lost! Spock vaporizes rock';
        }
        else if (computer === 'scissors') {
            yourScore += 1;
            result = 'You Win! Rock crushes scissors';
        }
        else if (computer === 'paper') {
            computerScore += 1;
            result = 'You lost! Paper covers rock';
        }
    }   
else
// user choose paper

    if (user === 'paper') {
        if (computer === 'scissors') {
            computerScore +=1;
            result = 'You lost! Scissors cuts paper';
        }
        else if (computer === 'rock') {
            yourScore += 1;
            result = 'You win! Paper covers rock';
        }
        else if (computer === 'lizard') {
            computerScore += 1;
            result = 'You lost! Lizard eats paper';
        }
        else if (computer === 'spock') {
            yourScore += 1;
            result = 'You Win! Paper disproves spock';
        }
    }
else 
// User choose lizard

    if (user === 'lizard') {
        if (computer === 'paper') {
            yourScore +=1;
            result = 'You win! Lizard eats paper';
        }
        else if (computer === 'rock') {
            computerScore += 1;
            result = 'You lost! Rock crushes lizard';
        }
        else if (computer === 'spock') {
            yourScore += 1;
            result = 'You Win! Lizard poisons spock';
        }
        else if (computer === 'scissors') {
            computerScore += 1;
            result = 'You lost! scissors decapitates lizard';
        }
    }
else 
// User choose spock

    if (user === 'spock') {
        if (computer === user) {
            result = "It's a tie!";
        }
        else if (computer === 'scissors') {
            yourScore +=1;
            result = 'You win! Spock smashes scissors';
        }
        else if (computer === 'rock') {
            yourScore += 1;
            result = 'You win! Spock vaporizes rock';
        }
        else if (computer === 'lizard') {
            computerScore += 1;
            result = 'You lost! Lizard poisons spock';
        }
        else if (computer === 'paper') {
            computerScore += 1;
            result = 'You lost! paper disproves spock';
        }
    } 
}

document.getElementById('your-score').innerHTML = yourScore;
document.getElementById('computer-score').innerHTML = computerScore;

resultDisplay.innerHTML = result;
}