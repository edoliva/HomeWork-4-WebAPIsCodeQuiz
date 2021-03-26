var questions = [
  {
      title: "Which of the following is NOT a programming language?",
      choices: ['HTML', 'JavaScript', 'c.Lock', 'CSS'],
      answer: "c.Lock" 
  },
  {
      title: "Which 'terminal' command prompts will update your GitHub account with your most recent code?",
      choices: ['git add ., git commit -m "blah", git push', 'get-it, got.it, push^it', 'abc, 123, xyz', 'snap, crackle/, pop^'],
      answer: 'git add ., git commit -m "blah", git push' 
  },
  {
      title: "When referencing a CLASS in JS, what symbol charcter should you put before it?",
      choices: ['&&', '#', '.', '-/'],
      answer: "." 
  },
  {
      title: "querySelector will all you to _______ content referenced in an HTML file.",
      choices: ['input', 'change', 'delete', 'All of the above.'],
      answer: "All of the above." 
  },
  {
      title: "querySelector will all you to _______ content referenced in an HTML file.",
      choices: ['input', 'change', 'delete', 'All of the above.'],
      answer: "All of the above." 
  },
  {
      title: "querySelector will all you to _______ content referenced in an HTML file.",
      choices: ['input', 'change', 'delete', 'All of the above.'],
      answer: "All of the above." 
  },
  {
    title: "Placeholder",
    choices: ['A', 'B', 'C', 'D'],
    answer: "Placeholder" 
},
];

var initialsInput = document.querySelector("#initials");

var submitButton = document.querySelector("#submit-button");
var lastUserSpan = document.querySelector("#last-user");
var userScoreSpan = document.querySelector("#user-score");


var infoBox = document.querySelector(".info-box");
var quizBox = document.querySelector(".quiz-box");
var finalScoreBox = document.querySelector(".final-score-box");
var highScoreBox = document.querySelector(".high-score-box");

var startButton = document.querySelector(".start-button");
var submitButton = document.querySelector(".submit-button");

var answerButton1 = document.querySelector("#answer1");
var answerButton2 = document.querySelector("#answer2");
var answerButton3 = document.querySelector("#answer3");
var answerButton4 = document.querySelector("#answer4");
var timerEl = document.getElementById('countdown');

var questionAnswer = "";

var propertyKeeper = {timeLeft: 74};
var yourScore = document.querySelector("#your-score");

var score = 0;
var questionNum = 0

// start button commands
startButton.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("start game");
    // create time to start countdown
    function countdown() {
      // start at 74 because there is a about a 1 sec start lag on click from 75
      propertyKeeper.timeLeft = 74;
      // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
      var timeInterval = setInterval(function () {
        if(propertyKeeper.timeLeft <= 1 || questionNum == 7) {
          timerEl.textContent = 'GAME OVER';
          clearInterval(timeInterval);
          yourScore.textContent = Math.max(propertyKeeper.timeLeft,0);
          // use .css to change .info-box to hidden
          quizBox.setAttribute("style", "display: none;");
          // use .css to change .quiz-box to inline-block
          finalScoreBox.setAttribute("style", "display: inline-block;");
        };
        // As long as the `timeLeft` is greater than 1
        if (propertyKeeper.timeLeft > 1) {
          // Set the `textContent` of `timerEl` to show the remaining seconds
          timerEl.textContent = propertyKeeper.timeLeft + ' sec';
          // Decrement `timeLeft` by 1
          propertyKeeper.timeLeft--;
        }
      
    //     if(questionNum == 7) {
    //       clearInterval(timeInterval);
    //       // use .css to change .info-box to hidden
    //       quizBox.setAttribute("style", "display: none;");
    //       // use .css to change .quiz-box to inline-block
    //       finalScoreBox.setAttribute("style", "display: inline-block;");
    //       yourScore.textContent = propertyKeeper.timeLeft;
    //      };

      }, 1000);
    }
    countdown();

    // use .css to change .info-box to hidden
    infoBox.setAttribute("style", "display: none;");
    // use .css to change .quiz-box to inline-block
    quizBox.setAttribute("style", "display: inline-block;");

    nextQuestion();
});

  // answer check
  answerButton1.addEventListener("click", function(event) {
    var answerPicked = document.getElementById("choice1").textContent
    console.log(answerPicked);
    result = (answerPicked === questionAnswer);
    if (!result) {
      propertyKeeper.timeLeft = propertyKeeper.timeLeft-10; 
    } else {console.log("right");}
  });
  answerButton2.addEventListener("click", function(event) {
    var answerPicked = document.getElementById("choice2").textContent
    console.log(answerPicked);
    result = (answerPicked === questionAnswer);
    if (!result) {
      propertyKeeper.timeLeft = propertyKeeper.timeLeft-10; 
    } else {console.log("right");}
  });
  answerButton3.addEventListener("click", function(event) {
    var answerPicked = document.getElementById("choice3").textContent
    console.log(answerPicked);
    result = (answerPicked === questionAnswer);
    if (!result) {
      propertyKeeper.timeLeft = propertyKeeper.timeLeft-10; 
    } else {console.log("right");}
  });
  answerButton4.addEventListener("click", function(event) {
    var answerPicked = document.getElementById("choice4").textContent
    console.log(answerPicked);
    result = (answerPicked === questionAnswer);
    if (!result) {
      propertyKeeper.timeLeft = propertyKeeper.timeLeft-10; 
    } else {console.log("right");}
  });

// next question button commands
function nextQuestion() { 
  var result = "";
  
  var questionTitle = document.getElementById("questionTitle").textContent = "";  
  var choice1 = document.getElementById("choice1").textContent = "";
  var choice2 = document.getElementById("choice2").textContent = "";
  var choice3 = document.getElementById("choice3").textContent = "";
  var choice4 = document.getElementById("choice4").textContent = "";

  questionTitle = document.getElementById("questionTitle").textContent = questions[questionNum].title;  
  choice1 = document.getElementById("choice1").textContent = questions[questionNum].choices[0];
  choice2 = document.getElementById("choice2").textContent = questions[questionNum].choices[1];
  choice3 = document.getElementById("choice3").textContent = questions[questionNum].choices[2];
  choice4 = document.getElementById("choice4").textContent = questions[questionNum].choices[3];
  var currentQuestionNum = questionNum;
  questionNum++;

  questionAnswer = questions[currentQuestionNum].answer;
  console.log(questionAnswer);

  console.log(result);

  if(questionNum == 7) {
        // use .css to change .info-box to hidden
        quizBox.setAttribute("style", "display: none;");
        // use .css to change .quiz-box to inline-block
        finalScoreBox.setAttribute("style", "display: inline-block;");
        yourScore.textContent = propertyKeeper.timeLeft;
  };
};
  
  // submitButton.addEventListener("click", function(event) {
  // finalScoreBox.setAttribute("style", "display: none;");
  // // use .css to change .quiz-box to inline-block
  // highScoreBox.setAttribute("style", "display: inline-block;");
// }
// );







// questionAnswer = document.getElementById("questionTitle").textContent = questions[questionNum].answer;



  // log user selection and creat var userChoice
    // if(userChoice == questions[questionNum].answer){
    //      document.getElementById("result").textContent = "Correct!";
    // } else {
    //      score--;
    //      document.getElementById("result").textContent = "Wrong!";
    // }

    //add if statemtn check that questionNum<=questions.length then continue, if not, return.


// document.getElementById("questionTitle").textContent = questions[0].title;
// questions[i].title
// questions[i].choices[0]
// questions[i].choices[1]
// questions[i].choices[2]
// questions[i].choices[3]
// questions[i].answer

// function() {

// }



// for(var i = 0; i < questions.length; i++){
//     var response = window.prompt(questions[i].title);
//     if(response == questions[i].answer){
//          score++;
//          alert("Correct!");
//     } else {
//          alert("WRONG!");
//     }
// }


renderLastRegistered();

function renderLastRegistered() {
  var initials = localStorage.getItem("initials");
  var userScore = localStorage.getItem("userScore");

 

  // if (!initials || !password) {
  //   return;
  // }

  lastUserSpan.textContent = initials;
  userScoreSpan.textContent = userScore;
  // userPasswordSpan.textContent = password;
}

submitButton.addEventListener("click", function(event) {
  event.preventDefault();

  finalScoreBox.setAttribute("style", "display: none;");
  // use .css to change .quiz-box to inline-block
  highScoreBox.setAttribute("style", "display: inline-block;");

  var initials = document.querySelector("#initials").value;
  // var password = document.querySelector("#password").value;

  if (initials === "") {
    alert("Enter SOMETHING!");
  } 
  // else if (password === "") {
  //   displayMessage("error", "Password cannot be blank");
  // } 
  else {
    // displayMessage("success", "Registered successfully");

    localStorage.setItem("initials", initials);
    // +1 because there is ONE LAST final tick in the countdown function
    localStorage.setItem("userScore", propertyKeeper.timeLeft+1);
    // localStorage.setItem("password", password);
    renderLastRegistered();
  }
}
);


