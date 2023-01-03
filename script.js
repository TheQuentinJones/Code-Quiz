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
    firstQuestion()

}

);


// Selecting the proper queries in the HTML

var questionS = document.querySelector("#questions")

var answerA = document.querySelector("#answer-a");

var answerB = document.querySelector("#answer-b");

var answerC = document.querySelector("#answer-c");

var answerD = document.querySelector("#answer-d");

var correctNess = document.querySelector("#correctness");

var numbers = [1, 2, 3]




// Questions and answer Arrays

var questionsNumber = ["Question " + numbers]

var questionArray = ["What does HTML stand for?", "What do we use CSS for?", "Is Java the same as Javascript?"]

var answerAarray = ["HyperLink Text Message Lingo", "Learning to ride a bicycle", "No"]

var answerBarray = ["HyperSleep Tenacious Messaging Link", "Cleaning the house", "Yes"]

var answerCarray = ["Hypertext Markup Language", "Styling our website", "Maybe"]

var answerDarray = ["All of the above", "All of the above", "I am still not sure"]


function firstQuestion() {

 


    questionS.textContent = ["Question " + numbers[0] + ". " + questionArray[0]]
    answerA.textContent = [answerAarray[0]]
    answerB.textContent = [answerBarray[0]]
    answerC.textContent = [answerCarray[0]]
    answerD.textContent = [answerDarray[0]]

    console.log()

    
    // answerA.addEventListener("click", )

    // answerB.addEventListener("click",)

    answerC.addEventListener("click", function() {

        correctNess.textContent = "Correct!"

        secondQuestion()
    })

    // answerD.addEventListener("click",)

    

}

function secondQuestion() {


   
       questionS.textContent = ["Question " + numbers[1] + ". " + questionArray[1]]
       answerA.textContent = [answerAarray[1]]
       answerB.textContent = [answerBarray[1]]
       answerC.textContent = [answerCarray[1]]
       answerD.textContent = [answerDarray[1]]
   
       console.log()
   
       
    //    answerA.addEventListener("click", )
   
    //    answerB.addEventListener("click",)
   
       answerC.addEventListener("click", function() {
   
           
           correctNess.textContent = "Correct!"
   
           thirdQuestion()
       })
   
    //    answerD.addEventListener("click",)
   
       
   
}


function thirdQuestion() {


   
    questionS.textContent = ["Question " + numbers[2] + ". " + questionArray[2]]
    answerA.textContent = [answerAarray[2]]
    answerB.textContent = [answerBarray[2]]
    answerC.textContent = [answerCarray[2]]
    answerD.textContent = [answerDarray[2]]

    console.log()

    
    // answerA.addEventListener("click", )

    // answerB.addEventListener("click",)

    answerC.addEventListener("click", function() {

        
        correctNess.textContent = "Correct!"

        var quizEl = document.getElementsByClassName("quiz")

         })

    // answerD.addEventListener("click",)

    

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

