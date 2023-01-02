// Time Interval

var timeLeft = document.querySelector("#time-left");

var secondsLeft = 60;

function setTime() {

    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeLeft.textContent = secondsLeft;

        if(secondsLeft === 0) {


            clearInterval(timerInterval);

            sendMessage();
        }
    }, 1000);


}

function sendMessage() {

    timeLeft.textContent = "Game Over! Try again? ";
}

// setTime()

var startGame = document.querySelector("#start-game")

startGame.addEventListener("click", setTime())














// Add event listeners for each button "click"

// Event "click" will trigger next questions

// Hide previous question once answered (event listener)

// add display: none or display: block (for correct or incorrect responses)

// i.e class selector to modify for display none



// maybe write questions in JavaScript?



// if function for subtraction of time if incorrect answer selected + to incorrect answer tally

// correct answer -->  no time penalty + correct answer tally


// code for input in html to save score and input initials

// change styling using JS when switching questions

