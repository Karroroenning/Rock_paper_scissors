var user;
var yourScore = 0;
var computer;
var computerScore = 0;

var choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

window.onload = function() {
    for (let i = 0; i < 5; i++) {
        let choice = document.createElement('img');
        choice.id = choices[i]
        choice.src = choices[i] + '.png';
        document.getElementById('your-choices').append(choice);
    }
}