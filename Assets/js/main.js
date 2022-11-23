//remade my .js because the last one was confusing me
//Section: Variables for DOM ref
var timeEL = document.querySelector("#timer")

// Section: starting the quiz

// Timer Code


// Question Section
var quizQuestions = [
    {
        question: "What does CSS stand for?",
        answers: [ "constant style sheets", "cascading style shots", "cascading style sheets", "cascading style strings",]
        correct: "cascading style sheets"
    },
    {
        questions: "What is the acronym for HyperText Markup Language",
        answers: ["HYTM", "HTML", "HHML", "HTTY"],
        correct: "HTML"
    },
    {
        questions: "How do you declare variables?",
        answers: [ "var", "let", "const", "all of the above",
        correct: "all of the above"
    },
    {
        questions: "Will you make it through this bootcamp?",
        answers: [ "yes", "no", "maybe", "I hope so!",
        correct: "yes"
    },
]

// High-Score Section

//psuedo coding | syntax 