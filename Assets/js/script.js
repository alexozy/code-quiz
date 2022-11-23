
var timeEL = document.querySelector("#timer");

//add start button (timer has to start when you hit the button)
function startQuiz() {
  // when button clicked, run startQuiz
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

var btn = document.getElementById("btn");
//dom modify text
btn.textContent = "startQuiz";
//dom eventListener
btn.addEventListener("click", startQuiz); //you could call firstQuestion inside of startQuiz
//have a single eventListener that has a function that runs multiple functions
// btn.addEventListener('click', function(){
//     start
// })

// array for questions & answers
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
}
  //this will display the specific question
//   var questionDiv = document.getElementById("question");
//   console.log(question)
//   questionDiv.textContent = q.question;
//   var ans = document.querySelectorAll("answer");
  
//   console.log(ans)
//   ans.forEach(function (element, index) {
//     element.textContent = q.question[index];

//     element.addEventListener("click", function () {
//       if (q.yesAnswer == index) {
//         console.log("correct!");
//       } else {
//         return false;
//       }
//     });
//   });

//   q.textContent = quizQuestions[num].question;
// }

// timer needs to deduct time for wrong answer
// timer


// high scores code