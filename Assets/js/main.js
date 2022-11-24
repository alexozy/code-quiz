//remade my .js because the last one was confusing me
//Section: Variables for DOM ref
var timeEL = document.querySelector("#timer")
var highScoreEl = document.querySelector('#high-scores')
var quizLandingEl = document.querySelector('#start-screen')
var questionSectionEl = document.querySelector('#question-section')
var scoreStorageEl = document.querySelector('#storescore')

// Section: starting the quiz

function startQuiz() {
    // when button clicked, run startQuiz
    console.log("Quiz Started");
    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("question-section").classList.remove("hidden");
    showQuestion();
  }

// Timer Code



function showQuestion() {
    // console.log(quizQuestions)
    // use forLoop here
    for (let index = 0; index < quizQuestions.length; index++) {
      const element = quizQuestions[1].answers;
      console.log(element)
      //use createElement to create the ul/li dynamically
    }