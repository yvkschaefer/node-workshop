//Write a program that will let the user play hangman. The program should work as follows:
// Choose a random word from a list of words.
// In a loop, do the following:
// Ask the user to guess a letter
// If the user guessed a wrong letter, then add one step to the hangman "drawing"
// Display the current completion of the word next to a hangman ASCII "drawing". You can get some 
//inspiration from either here or here
// Keep looping until either the word is found or the hangman is hanged!
// Display a message to the user letting them know what happened
// Save/commit/push

var hangmanArray = [
        [ //0, coincides with 0 lives 
        '0000000000000000000000',
        '0              0      ',
        '0              1      ',
        '0            1   1    ',
        '0  x  x        1      ',
        '0              1      ',
        '0   /|        /1|     ',
        '0            / 1 |    ',
        '0              1      ',
        '0              1      ',
        '0             1 1     ',
        '0            1   1    ',
        '0           V     V   ',
        '0                     ',
        '0                     ',
        '0000000000000000000000',
    ],    
    [ //1    
        '0000000000000000000000',
        '0              0      ',
        '0              1      ',
        '0            1   1    ',
        '0              1      ',
        '0           |  1 /    ',
        '0             |1/     ',
        '0              1      ',
        '0              1      ',
        '0              1      ',
        '0             1 1     ',
        '0            1   1    ',
        '0           V     V   ',
        '0                     ',
        '0                     ',
        '0000000000000000000000',
    ],    
    [ //2
        '0000000000000000000000',
        '0              0      ',
        '0              1      ',
        '0            1   1    ',
        '0              1      ',
        '0              1 /    ',
        '0              1/     ',
        '0              1      ',
        '0              1      ',
        '0              1      ',
        '0             1 1     ',
        '0            1   1    ',
        '0           V     V   ',
        '0                     ',
        '0                     ',
        '0000000000000000000000',
    ],    
    [ //3
        '0000000000000000000000',
        '0              0      ',
        '0              1      ',
        '0            1   1    ',
        '0              1      ',
        '0              1      ',
        '0              1      ',
        '0              1      ',
        '0              1      ',
        '0              1      ',
        '0             1 1     ',
        '0            1   1    ',
        '0           V     V   ',
        '0                     ',
        '0                     ',
        '0000000000000000000000',
    ],    
    [ //4
        '0000000000000000000000',
        '0              0      ',
        '0              1      ',
        '0            1   1    ',
        '0              1      ',
        '0              1      ',
        '0              1      ',
        '0              1      ',
        '0              1      ',
        '0              1      ',
        '0               1     ',
        '0                1    ',
        '0                 V   ',
        '0                     ',
        '0                     ',
        '0000000000000000000000',
    ],    
    [ //5    
        '0000000000000000000000',
        '0              0      ',
        '0              1      ',
        '0            1   1    ',
        '0              1      ',
        '0              1      ',
        '0              1      ',
        '0              1      ',
        '0              1      ',
        '0              1      ',
        '0                     ',
        '0                     ',
        '0                     ',
        '0                     ',
        '0                     ',
        '0000000000000000000000',
    ],    
    [ //6    
        '0000000000000000000000',
        '0              0      ',
        '0              1      ',
        '0            1   1    ',
        '0              1      ',
        '0                     ',
        '0                     ',
        '0                     ',
        '0                     ',
        '0                     ',
        '0                     ',
        '0                     ',
        '0                     ',
        '0                     ',
        '0                     ',
        '0000000000000000000000',
    ],
    [ //7
        '0000000000000000000000',
        '0              0      ',
        '0                     ',
        '0                     ',
        '0                     ',
        '0                     ',
        '0                     ',
        '0                     ',
        '0                     ',
        '0                     ',
        '0                     ',
        '0                     ',
        '0                     ',
        '0                     ',
        '0                     ',
        '0000000000000000000000',
    ],
];
var hangmanWords = ['volcano', 'banana', 'clarinet', 'squirrel', 'decodeMTL', 'butterfly', 'octapus', 'giraffe', 'trapeze', 'lion', 'dylan'];
var randomWord = hangmanWords[Math.floor(Math.random(3) * 10)];
var prompt = require('prompt');
var letter = randomWord.split('');
var lives = 7;
console.log(randomWord);

function getGuess() {
    var correctLetters = [];
    var incorrectLetters = [];
    prompt.get('guessALetter', function(err, answer) {
        if (err) {
            console.log('Oops sorry that\'s an error');
        }
        else if (letter.indexOf(answer.guessALetter) > -1) {
            correctLetters.push(answer.guessALetter);
            console.log('Nice work! These are your correct guesses so far: ' + correctLetters);
            getGuess();
        } else {
            incorrectLetters.push(answer.guessALetter);
            console.log('Ooh.... not here. Your incorrect guesses are: ' + incorrectLetters);
            if(lives > 0) {
                lives--;
                console.log(hangmanArray[lives]);
                console.log('You have ' + lives + ' guesses left');
                getGuess();
            }
        }
    })

}
console.log(hangmanArray[7]);
getGuess();

// Choose a random word from a list of words.
// In a loop, do the following:
// Ask the user to guess a letter
// If the user guessed a wrong letter, then add one step to the hangman "drawing"
// Display the current completion of the word next to a hangman ASCII "drawing". You can get some 
//inspiration from either here or here
// Keep looping until either the word is found or the hangman is hanged!
// Display a message to the user letting them know what happened
// Save/commit/push