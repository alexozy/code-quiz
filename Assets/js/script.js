
var timeEL = document.querySelector("#timer");


function startQuiz() {
  console.log("Quiz Started");
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("question-section").classList.remove("hidden");
  showQuestion();
}

// timer function
var secondsleft = 90;
function startTime() {
  var timerInterval = setInterval(function () {
    secondsleft--;
    timeEl.textContent = secondsleft + "remaining!";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

// cycle to next question

var btn = document.getElementById("btn-begin");
//dom modify text
btn.textContent = "startQuiz";
//dom eventListener
btn.addEventListener("click", startQuiz); //you could call firstQuestion inside of startQuiz
//have a single eventListener that has a function that runs multiple functions
// btn.addEventListener('click', function(){
//     start
// })


// when you click on one of the answers, it needs to show num increasing by 1
var quizQuestions = [
  {
    question: "What does CSS stand for?",
    answers: [
      "constant style sheets",
      "cascading style shots",
      "cascading style sheets",
      "cascading style strings",
    ],
    yesAnswer: function () {
      return this.answers[3];
    },
  },
  {
    questions: "What is the acronym for HyperText Markup Language",
    answers: ["HYTM", "HTML", "HHML", "HTTY"],
    yesAnswer: function () {
      return this.answers[2];
    },
  },
  {
    questions: "What do var, let and const all have in common?",
    answers: [
      "the create variables",
      "they make permanent variables",
      "nothing",
      "none of the above",
    ],
    yesAnswer: function () {
      return this.answers[0];
    },
  },
  {
    questions: "What is the acronym for HyperText Markup Language",
    answers: ["HYTM", "HTML", "HHML", "HTTY"],
    yesAnswer: function () {
      return this.answers[2];
    },
  },
  {
    questions: "Will you make it through this bootcamp?",
    answers: [ "yes", "no", "maybe", "I hope so!",
    correct: "yes"
},
];
var num = 0;
function showQuestion() {
  // console.log(quizQuestions)
  // use forLoop here
  for (let index = 0; index < quizQuestions.length; index++) {
    const element = quizQuestions[1].answers;
    console.log(element)
    //use createElement to create the ul/li dynamically
    
  }