var guessPrompt = function() {
    var guess = prompt('Guess a number between 0 and 100!');
    return guess;
}

function guessNumber(guess) {
    var secNum = 4;
    var solved = false;
    var attempts = 0;
    var attemptStr = '';

    while (solved === false) {
        var answer = guess();
        if (answer === null) {
            alert('Goodbye!');
            break;
        }
        if (attempts === 0) {
            attemptStr += `${answer}`;
        } else {
            attemptStr += `, ${answer}`;
        }
        if (answer == secNum) {
            attempts++;
            if (attempts === 1) {
                alert(`Good job ${nameOf}, that is the correct number! it took you ${attempts} attempt! You guessed ${attemptStr}`);
            } else {
                alert(`Good job, that is the correct number! it took you ${attempts} attempts! You guessed ${attemptStr}`);
            }
            solved = true;
        } else if (answer < secNum) {
            alert('That isn\'t it, try higher!');
            attempts++;
        } else if (answer > secNum) {
            alert('That isn\'t it, try lower!');
            attempts++;
        }
    }
    return attempts;
}

var nameObj = {};
var loopGame = true;

while (loopGame === true) {
    var nameOf = prompt('What is your name!?!?');
    var attempts = guessNumber(guessPrompt);
    if (attempts < nameObj[nameOf]) {
        alert(`Congratz ${nameOf}, you beat your highscore!`);
    } 
    nameObj[nameOf] = attempts;
    console.log(attempts);
    console.log(nameObj[nameOf]);
    var playAgain = prompt('Would you like to play again? type "yes" or "no"')
    while(true) {
        if (playAgain === 'yes') {
            break;
        } else if (playAgain === 'no') {
            alert(`Goodbye ${nameOf}!`);
            loopGame = false;
            break;
        }
    }
}