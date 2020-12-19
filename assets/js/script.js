function quiz(questions) {
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
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
 

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

//on click, clear the old div and put in the question div

// function clearBox(directions) {
//     document.getElementById(directions).innerHTML = "";


    

 


//display quiz right away


//on submit, show results


//function to star ttimer

//function to build the quiz

//function to checkAnswer

//function of clicking on the button

//function to show results

