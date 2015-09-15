# node-workshop
## NodeJS basic workshop

### Base instructions
  * Fork this repository and clone it in a new Cloud9 workspace.
  * As you open the project in Cloud9, open a new terminal and go into the `workspace` directory inside your home folder.
  * Do a file listing that shows hidden files, and notice there is a file called `.gitignore`. Open this file with `nano` to check its contents.
  * Notice that the `.gitignore` file contains one line that says "`node_modules`". What this is doing is telling Git that it should ignore the contents of the `node_modules` directory. Since the code in there comes from the outside world, we don't need to save it in our repo.

### First program
  * Create a branch called `hello-world` off of `master`. In it, write a simple node program that outputs "`Hello World!`" to the console.
  * Add an instruction to your program that will output "`Hello World Again!!`" 10 seconds after the program was run.
  * Create a pull request so we can look at your code.
  
### Getting some data
  * Create a branch called `iss` off of `master`. In it, write a simple node program that will output the latitude and longitude of the International Space Station.
  * Notice that the values provided by the API are very precise. Round off the values to two decimal digits for a nicer display.
  * Create a pull request so we can look at your code.
  
### Augmenting our application
  * Create a branch called `iss-augmented` **off of `iss`** (NOT `master`).
  * Augment your ISS application to tell the user how "far" the ISS is from them. Here is how you will do it:
  * Using the `prompt` module, ask the user to enter their location (e.g. "montreal")
  * Using Google's Geolocation API, find out the latitude and longitude of the provided location. Here is how:
    * This URL: https://maps.googleapis.com/maps/api/geocode/json?address=montreal will show the lat/long for montreal
    * Explore this URL in your web browser to figure out where the lat/lng is located. Try to pass different values for "address" for educational purposes :)
  * When you are comfortable with finding the location based on an input address, you can then calculate the distance between the ISS and the user:
    * Look at this URL: http://www.movable-type.co.uk/scripts/latlong.html
    * It specifies a formula for calculating the distance. Scroll the page to the JavaScript portion, and create a function that uses the provided code. You don't need to understand what is going on in there, it is **very** mathy!
  * Finally, display a message to the user telling them what their "distance" to the ISS is.
  * Create a pull request so we can look at your code.
  
### Number guessing game!
  * Create a branch called `number-guessing-game` off of `master`.
  * In this branch, re-write your number guessing game (from the basic javascript workshop) for the command line!
  * Instead of using `prompt` and `alert`, you will have to use capabilities from NodeJS and any external module.
  * Create a pull request so we can look at your code.
  
### Challenge: Hangman!
  * Create a branch called `hangman` off of `master`.
  * In this branch, write a program that will let the user play hangman. The program should work as follows:
    * Choose a random word from a list of words.
    * In a loop, do the following:
      * Ask the user to guess a letter
      * If the user guessed a wrong letter, then add one step to the hangman "drawing"
      * Display the current completion of the word next to a hangman ASCII "drawing". You can get some inspiration from either [here](http://www.berkeleyinternet.com/perl/node30.html) or [here](http://ascii.co.uk/art/hangman)
      * Keep looping until either the word is found or the hangman is hanged!
    * Display a message to the user letting them know what happened
  * Create a pull request so we can look at your code.
