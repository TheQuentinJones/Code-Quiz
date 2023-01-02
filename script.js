// Time Interval

var timeLeft = document.querySelector("#time-left");

var secondsLeft = 60;

function setTime() {

    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeLeft.textContent = secondsLeft;

        if(secondsLeft <= 0) {


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

startGame.addEventListener("click", function () {

    secondsLeft = 60
    
    setTime()
    setQuestions()

}

);


// Selecting the proper queries in the HTML

var questionS = document.querySelector("#questions")

var answerA = document.querySelector("#answer-a");

var answerB = document.querySelector("#answer-b");

var answerC = document.querySelector("#answer-c");

var answerD = document.querySelector("#answer-d");

var numbers = [1, 2, 3]




// Questions and answer Arrays

var questionsNumber = ["Question " + numbers]

var questionArray = ["What does HTML stand for?", "What do we use CSS for?", "Is Java the same as Javascript?"]

var answerAarray = ["HyperLink Text Message Lingo", "Learning to ride a bicycle", "No"]

var answerBarray = ["HyperSleep Tenacious Messaging Link", "Cleaning the house", "Yes"]

var answerCarray = ["Hypertext Markup Language", "Styling our website", "Maybe"]

var answerDarray = ["All of the above", "All of the above", "I am still not sure"]


function setQuestions() {

 var setNav = document.getElementById("answers")

    if (setNav.style.display === "none") {

        setNav.setAttribute("display", "block")
    };

    questionS.textContent = [questionArray]
    answerA.textContent = [answerAarray]
    answerB.textContent = [answerBarray]
    answerC.textContent = [answerCarray]
    answerD.textContent = [answerDarray]

    console.log()

    

}
















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

