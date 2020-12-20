//Global Variables
var timeLeft = 10;
var timerEl = document.getElementById('countdown');

// //display start page
var masterContainer = document.createElement("div");
masterContainer.className = "container";
masterContainer.id = "id-container";

var startPage = document.createElement("div");
startPage.className = "start-page";
startPage.innerHTML="<h1>JavaScript Challenge</h1>";
masterContainer.appendChild(startPage);

var directions = document.createElement("div");
directions.className = "directions";
directions.innerHTML="<h2>Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!</h2>";
masterContainer.appendChild(directions);

var startButton = document.createElement("button");
startButton.className = "container startButton";
startButton.innerHTML = "Start Quiz"
startButton.onclick = function() {startQuiz()}; 
masterContainer.appendChild(startButton);

document.body.appendChild(masterContainer);

//Remove the directions and start the quiz    
function startQuiz() {
    var removeDirections = document.getElementById("id-container");
    removeDirections.remove(); 
    questionProcessing();
}

//Begin the timer 
function questionProcessing() {
    while (timeLeft > 0) 
        for (let j = 0;j<questions.length;j++){
        //show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        };    
        }
    }



// function countdown() {
//     var timeInterval = setInterval(function() {
//         if (timeLeft >=1) {
//             var textOut = "Timer: ".concat(parseInt(timeLeft)); 
//             timerEl.textContent = textOut;
//             timeLeft--;
//         }
//         else if (timeLeft === 0) {
//             timerEl.textContent="0";
//             clearInterval(timeInterval);
//         }
//     }, 1000);
// }

// Quiz Div Section

function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
    //change this to say that if thee quiz is ended, put in high score
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
//change this to show if they got it correct or not 
function questionCorrect() {
    //  if answer is correct,
    element.innerHTML = "Correct"
    //if answer is incorrect, display incorrect and take away time
}
// function showProgress() {
//     var currentQuestionNumber = quiz.questionIndex + 1;
//     var element = document.getElementById("progress");
//     element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
// };

 
//quiz questions
var questions = [
    new Question("Commonly used data types DO NOT include: ", ["A. Strings", "B. Booleans", "C. Alerts", "D.Numbers"], "B. Booleans"),
    new Question("The condition in an if/else statement is enclosed within ___.", ["A. Quotes", "B. Curly Brackets", "C. Parentheses", "D. Square Brackets"], "C. Parentheses"),
    new Question("Arrays in JavaScript can be used to store ___.", ["A. Numbers and Strings", "B. Other Arrays", "C. Booleans", "D. All of the Above"], "D. All of the Above"),
    new Question("String values must be enclosed within ______ when being assigned to variables.", ["A. Commas", "B. Curly Brackets", "C. Quotes", "D. Parantheses"], "C. Quotes"),
    new Question("A very useful tool used during development and debugging for printing content to the debugger is:", ["A. JavaScript", "B. Terminal/Bash", "C. For Loops", "D. Console Log"], "D. Console Log"),
]


//create quiz
var quiz = new Quiz(questions);

//display quiz
populate();



// //on submit, show results
// //function to star ttimer
// //enter high scores
// //high scores page 
