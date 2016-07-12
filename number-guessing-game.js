//In this file, re-write your number guessing game (from the basic javascript workshop) for the 
//command line!
//Instead of using prompt and alert, you will have to use capabilities from NodeJS and any 
//external module. HINT: there is an npm library called prompt that can help you with that :)
//Save/commit/push

//The Penniless Gambler

// Challenge: create a simple HTML file that will only be used for the purposes of running 
//JavaScript in the browser. Create a guess.js file and add it to a <script> tag of your HTML file. 
//This is simply so you can load your HTML file in the browser and do the challenge: creating a 
//number guessing game.

// Generate a random number between 1 and 100. Using the browser functions prompt and alert, ask 
//the user to guess the number. You should give them 4 tries to guess the number. If they guess 
//wrong, tell them if it's higher or lower. If they guess right, congratulate them. Otherwise, give 
//them a message saying what the correct number was, as well as their list of guesses.

var prompt = require('prompt');
var randomNumber = Math.floor(Math.random() * 100);
// console.log(randomNumber);//uncomment if you want to know the number before you guess!
var counter = 3//since I'm not putting the answer first, I would put this to 6 otherwise

function guessNumber(){
prompt.get('guess', function(err, answer){
    if (err){
        console.log('sorry, there was an error');
    }
    else if (Number(answer.guess) === randomNumber){//Number() turns the string into a number
            return console.log('Congratulations, you guessed the number!');
        }
    else if (Number(answer.guess) > randomNumber){
            console.log('Oops, your guess is too high');
    }
    else {
            console.log('Oops, your guess is too low!');
    }
    if(counter > 0){
        counter--;
        guessNumber();
    }
    else {
        console.log('Oops, no more guesses!');
    }
});
}


guessNumber()