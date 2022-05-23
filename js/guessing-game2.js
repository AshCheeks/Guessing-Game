let playerInput =  document.querySelector('#player-input');
const submitButton = document.getElementById('submit');
const resetButton = document.getElementsByClassName('reset');
let hintButton = document.getElementsByClassName('hint');
let feed_back = document.getElementById('feedback');
let hintMsg = document.getElementById('hint-msg');
// let ulList = document.getElementById('guess-list');
let guessedList = document.getElementsByClassName('guess')  // li
    // guessedList = Array.from(guessedList); // convert li HTMLCOLLECTION to array

    let guessedNumbers = []; // user inputted numbers 
let guessCount = 1;

// console.log(guessedList);
function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

// Create an alert when user inputs number below 1 or above 100
// that is not allowed.
// Input hints for user if they are close
// input Winning answer if user answers correctly 
// Let user input number and submit answer through Guess button and Enter key.


let answer = getRandomNumber();
console.log(answer);
function play() {
    let user_guess = playerInput.value;
        if (user_guess < 1 || user_guess > 100) {
            alert("Please enter a number between 1 and 100");
            
        } else { //(Double check if user_guess is closer or not to the designated number)
           if(user_guess < answer) {
               feed_back.innerHTML = "Not Close. Try a Higher Number";
           } else if (user_guess > answer) {
               feed_back.innerHTML = "Way Off! Try a Lower number";
           } else { //(user_guess === answer)
               feed_back.innerHTML = `Oh Cool, You Guessed Correct! The # was ${answer}`;
           }
        }
        guessedNumbers.push(user_guess);
        showGuessedNumbers();
    };

// apply guessed numbers into li boxes/rows 
// numbers must not duplicate 
// guesses must not exceed 5

function showGuessedNumbers() {
    let guessedNum = guessedNumbers;
    let numGuesses = 0;
        for (let i = 0; i < guessedNum.length; i++) {
          // debugger
            return guessedList[i].innerHTML = guessedNum[i];
        }
        // console.log(guessedList[0])








}


console.log(showGuessedNumbers());
// console.log(guessedNumbers);







// playerInput.addEventListener("keypress", function(e) {
//     if(e.key === "Enter") {
//         e.preventDefault();
//         submitButton.click();

//     }
// });

