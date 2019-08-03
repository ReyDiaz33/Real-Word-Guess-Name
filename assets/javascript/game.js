// all the possible chices the computer can make
var computerPokemonChoices = ["Mewtwo", "Pikachu", "Squirtle", "Evee", "Snorlax"];

// wins losses guesses left and computer guesses
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];

function getRandomPokemon() {
    var length = computerPokemonChoices.length;
    var random = Math.floor((Math.random() * length));
    return computerPokemonChoices[random];
}

var chosenPokemon = getRandomPokemon();


console.log('Initialized...');
console.log('wins: ', wins);
console.log('losses:', losses);
console.log('guessesLeft:', guessesLeft);
console.log('lettersGuessed',lettersGuessed);
console.log('chosenLetter',chosenLetter);


document.onkeypress = function(event) {
    // Keypress event sent from browser.
    event = event || window.event;

    // Get the character code from the event. 
    var charCode = event.which || event.keyCode;

    // Convert it to a character string.
    var letterTyped = String.fromCharCode(charCode);
    
    // Do something with it, yo!
    console.info('user chose:', letterTyped);

    if (letterTyped === chosenLetter){
        // you won
        wins++;
        lettersGuessed = [];
        chosenLetter = getRandomLetter();
        guessesLeft = 9;
        
        console.info('You won!!!');
        console.log('wins: ', wins);
        console.log('losses:', losses);
        console.log('guessesLeft:', guessesLeft);
        console.log('lettersGuessed',lettersGuessed);
        console.log('chosenLetter',chosenLetter);

        document.getElementById("wins").innerText = wins;

    }
    else{
        // you did not win

        guessesLeft--;

        if (guessesLeft === 0) {
            // reset the game
            losses++;
            lettersGuessed = [];
            chosenLetter = getRandomLetter();
            guessesLeft = 9;
        }
        else {
            // keep going.
            lettersGuessed.push(letterTyped);
        }

        document.getElementById('losses').innerText = losses;


        console.info('you did not win...');
        console.log('wins: ', wins);
        console.log('losses:', losses);
        console.log('guessesLeft:', guessesLeft);
        console.log('lettersGuessed',lettersGuessed);
        console.log('chosenLetter',chosenLetter);

        document.getElementById('guessesSoFar').innerText = lettersGuessed;
    }
     
    /*
        -> Did the user win? 
        has the user used make choices?
            -> yes: what do we need to do?
                -> add a win to the win var
                -> reset user choices
                -> reset computerPokemonChoice

            -> no: what do we need to do?
               -> decrement (-1) choices left 
               -> has the user guesses max times?
                 -> yes
                    -> increment loss
                    -> reset guesses left
                    -> reset guesses so far
                    -> reset computerChoice
                 -> no 
                   -> add to gueses so far
    */
  };

  

/*
computer picks a random letter (X) 
person guesses letter 
if right then wins
if wrong has 9 more chances 
if wrong 9 times losses

*/
