var user;
var yourScore = 0;
var computer;
var computerScore = 0;

var choices = ['rock', 'paper', 'scissors'];

window.onload = function() {
    for (let i = 0; i < 5; i++) {
        // <img id="rock" src=ROCK.png>
        let choice = document.createElement('img');
        choice.id = choices[i]
        choice.src = choices[i] + '.png';
        choice.addEventListener('click', selectChoice);
        document.getElementById('your-choices').append(choice);
    }
}
    function selectChoice() {
        user = this.id;
        document.getElementById('user-choice').src = user + '.png';
   

    // Random for the computer
    computer = choices[Math.floor(Math.random() * 3)]; 
    document.getElementById('computer-choice').src = computer + '.png';

    // check who wins
    if (user === computer) {
        yourScore += 1;
        computerScore += 1;
    }
    else {
         if (user === 'rock'){
            if (computer === 'scissors') {
                yourScore +=1;
            }
            else if (computer === 'paper') {
                computerScore += 1;
            }
    }
    else if (user === 'rock') {
        if (computer === 'scissors') {
            yourScore += 1;
        }
        else if (computer === 'paper') {
            computerScore += 1;
        }
    }
}

document.getElementById('your-score').innerHTML = yourScore;
document.getElementById('computer-score').innerHTML = computerScore;
}