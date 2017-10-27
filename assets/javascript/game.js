var letters = "qwertyuiopasdfghjklzxcvbnm";
var computer_guess = "";
var guessTotal = 9;
var wins = 0;
var losses = 0;
var counter = 0;


printUserGuess();

function setComputerGuess(){
    var index = Math.floor(Math.random() * letters.length);
    computer_guess = letters[index];
}

function getComputerGuess(){
    return computer_guess;
}


function printResult() {

    var text = document.getElementById("test");
    var newText = document.createTextNode(getComputerGuess());
    text.appendChild(newText);
    
}

function printLeft(){
    var text = document.getElementById("guesses_left");
    text.innerHTML = guessTotal;
    
}

function printWins(){
    var text = document.getElementById("wins");
    text.innerHTML = wins;
}

function printLosses(){
    var text = document.getElementById("losses");
    text.innerHTML = losses;
}

function printUserGuess() {
    document.onkeyup = function (event) {
        // get user pressed letter 
        var keyPress = event.key.toLowerCase();

        // make computer generate a random letter
        setComputerGuess();

        counter++; // increment the number of user key pressing 
        guessTotal--;// decrease the number of user guess left
        printLeft();// print the guess left 

        // print the user pressed key on the document 
        var guessList = document.getElementById("user_guesses");
        var keyName = document.createTextNode(keyPress + ", ");
        guessList.appendChild(keyName);

        if(counter < 9){
            if(keyPress === getComputerGuess()) {
                wins++;
                printWins();
                counter = 0;
                guessTotal = 9;
                clearGuess();
            }
        }else if(counter = 9){
            counter = 0;
            losses++;
            printLosses();
            guessTotal = 9;
            keyName = "";
            clearGuess();
           
        }
        printLeft();
        
        function clearGuess(){
            guessList.innerHTML="";
        }

    }
}


printUserGuess();

// console.log(letters[0]);
// console.log(letters.length);




// document.onkeyup = function(event){
//     var input = event.key.toLowerCase();


// }