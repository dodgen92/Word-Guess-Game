// color list
var words = ["CADMIUM YELLOW", "PHTHALO GREEN", "PHTHALO BLUE", "VAN DYKE BROWN", "PRUSSIAN BLUE", "TITANIUM WHITE", "YELLOW OCHRE", "ALIZIRIN CRIMSON"];

var maxNumGuesses = 8; 
var guessedLetters = []; 
var ansWordArr = []; 
var numGuessesRemaining = 0; 
var numWins = 0; 
var numLosses = 0; 
var isFinished = false; 
var ansWord; // word being played


function setup() {
    //random word from words list
    ansWord = words[Math.floor(Math.random() * words.length)];

    ansWordArr = [];

   
    for (var i = 0; i < ansWord.length; i++) {
        ansWordArr[i] = "_";
    }

    
    numGuessesRemaining = maxNumGuesses;
    guessedLetters = [];

    
    document.getElementById("giphy-embed").src = "";
    
    document.getElementById("numGuesses").style.color = "";

    updateScreen();
};

function playAudio() {
    var audio = new Audio("./assets/media/lose.mp3");
    audio.play();
}
function playAudio1() {
    var audio = new Audio("./assets/media/win.mp3");
    audio.play();
}
//updates the HTML from the functions
function updateScreen() {
    document.getElementById("numWins").innerText = numWins;
    document.getElementById("numLosses").innerText = numLosses;
    document.getElementById("numGuesses").innerText = numGuessesRemaining;
    document.getElementById("answerWord").innerText = ansWordArr.join("");
    document.getElementById("guessedLetters").innerText = guessedLetters;

};

//function to check the key that's pressed
function checkGuess(letter) {
    //if letter is not in guessedLetters array then push the letter to the array
    if (guessedLetters.indexOf(letter) === -1) {
        guessedLetters.push(letter);
        //if the letter isn't in the answer word then -1 the numGuessesRemaining
        if (ansWord.indexOf(letter) === -1) {
            numGuessesRemaining--;
            //if numGuessesRemaining is 3 or less then change the color
            if (numGuessesRemaining <=3) {
                document.getElementById("numGuesses").style.color = "#e12d2e";
            }
            //if letter is in answer then replace the positioned "_" with the letter
        } else { 
            for (var i = 0; i < ansWord.length; i++) {
                if (letter === ansWord[i]) {
                    ansWordArr[i] = letter;
                } 
            }                
        }
    }

}; 

//function to check if the player is a winner
function isWinner() {
    //if there are no more "_" in the ansWordArr then +1 to Wins and switch isFinished to true
    if (ansWordArr.indexOf("_") === -1) {
        numWins++;
        isFinished = true;
        //if the answer is guessed then play assigned gif
        if(ansWord === "CADMIUM YELLOW") {
            document.getElementById("giphy-embed").src = "https://giphy.com/embed/xAXjhpZshopW0"; playAudio1();
        } else if (ansWord === "PHTHALO GREEN") {
            document.getElementById("giphy-embed").src = "https://giphy.com/embed/xAXjhpZshopW0"; playAudio1();
        } else if (ansWord === "PHTHALO BLUE") {
            document.getElementById("giphy-embed").src = "https://giphy.com/embed/xAXjhpZshopW0"; playAudio1();
        } else if (ansWord === "VAN DYKE BROWN") {
            document.getElementById("giphy-embed").src = "https://giphy.com/embed/xAXjhpZshopW0"; playAudio1();
        } else if (ansWord === "PRUSSIAN BLUE") {
            document.getElementById("giphy-embed").src = "https://giphy.com/embed/xAXjhpZshopW0"; playAudio1();
        } else if (ansWord === "TITANIUM WHITE") {
            document.getElementById("giphy-embed").src = "https://giphy.com/embed/xAXjhpZshopW0"; playAudio1();
        } else if (ansWord === "YELLOW OCHRE") {
            document.getElementById("giphy-embed").src = "https://giphy.com/embed/xAXjhpZshopW0"; playAudio1();
        } else if (ansWord === "ALIZIRIN CRIMSON") {
            document.getElementById("giphy-embed").src = "https://giphy.com/embed/xAXjhpZshopW0"; playAudio1();
        }
            
    }
};
//function to check if player is a loser
function isLoser() {
    // if the numGuessesRemaining is 0 then -1 numLosses and switch isFinished to true
    if(numGuessesRemaining <= 0) {
        numLosses++;
        isFinished = true;
        //play the loser gif
        document.getElementById("giphy-embed").src = "https://giphy.com/embed/bBPKIt6h9yCcw";
        document.getElementById("numLosses").style.color = "#e12d2e";
        playAudio();
    }
    

};


//event listener for key pressed
document.onkeyup = function(event) {
    //if isFinished is true then restart the game to the initial setup 
    //and switch isFinished back to false
    if (isFinished) {
        setup();
        isFinished = false;
    } else {
        //check to see if only letters A-Z are pressed
        //functions are executed when user presses A-Z key
        if(event.keyCode >= 46 && event.keyCode <= 90) {
            checkGuess(event.key.toUpperCase()); 
            updateScreen();
            isWinner();
            isLoser();
        }
    //this part handles spaces
    else if(event.keyCode == 32) {
        checkGuess(event.key);
        updateScreen();
        isWinner();
        isLoser();
}
    
    }
};


setup();
updateScreen();

console.log(ansWord);