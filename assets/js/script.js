var bodyHTML = document.querySelector(".start-page-div")

//variables
    //quizcontainer
    //startSection
    //questionsection
    //resultssection
    //counter
    //timer
    //time
    //index
    //score

//array to hold the questions and answers
var quizQuestions = [
    {
        question: "Commonly used data types DO NOT include: ",
        answers: ["A. Strings", "B. Booleans", "C. Alerts", "D.Numbers"],
        correctAnswer: "B. Booleans",
        
    },
    {
        question: "The condition in an if/else statement is enclosed within ___.",
        answers: ["A. Quotes", "B. Curly Brackets", "C. Parentheses", "D. Square Brackets"],
        correctAnswer: "C. Parentheses",
    },
    {
        question: "Arrays in JavaScript can be used to store ___.",
        answers: ["A. Numbers and Strings", "B. Other Arrays", "C. Booleans", "D. All of the Above"],
        correctAnswer: "D. All of the Above",
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        answer: ["A. Commas", "B. Curly Brackets", "C. Quotes", "D. Parantheses"],
        correctAnswer: "C. Quotes",
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["A. JavaScript", "B. Terminal/Bash", "C. For Loops", "D. Console Log"],
        correctAnswer: "D. Console Log",
    }
    
]

//startup page with directions
//innerhtml deletes what was in the section, textContent adds to section 
var startPage = function() {
    var title= document.createElement("div");
    title.className = "start-page";
    title.innerHTML="<h1 class='title'>Javascript Challenge</h1>";
    bodyHTML.appendChild(title);

    var directions = document.createElement("div");
    directions.className = "directions";
    directions.innerHTML = "<h2 class='directions'>Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!</h2";
    bodyHTML.appendChild(directions);

    var startButton = document.createElement("button");
    startButton.className= "";
    startButton.innerHTML = "<button class='button'>Start</button>";
    bodyHTML.appendChild(startButton);
}


startPage();

// function to start quiz
function startQuiz () {}
//function to star ttimer

//function to build the quiz

//function to checkAnswer

//function of clicking on the button

//function to show results
