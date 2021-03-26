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

var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("button");
var msgDiv = document.querySelector("#msg");
var userEmailSpan = document.querySelector("#user-email");
var userPasswordSpan = document.querySelector("#user-password");

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
var score = 0;
var questionNum = 0

// start button commands
startButton.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("start game");
    // create time to start countdown
    function countdown() {
      propertyKeeper.timeLeft = 74;
      // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
      var timeInterval = setInterval(function () {
        if(propertyKeeper.timeLeft == 1) {
          timerEl.textContent = 'GAME OVER';
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
        } else {
          // Once `timeLeft` gets to 0, set `timerEl` to an empty string
          timerEl.textContent = 'GAME OVER';
          // Use `clearInterval()` to stop the timer
          clearInterval(timeInterval);
        }
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
  };
};
  
  submitButton.addEventListener("click", function(event) {
  finalScoreBox.setAttribute("style", "display: none;");
  // use .css to change .quiz-box to inline-block
  highScoreBox.setAttribute("style", "display: inline-block;");
});





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

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
  var email = localStorage.getItem("email");
  var password = localStorage.getItem("password");

  if (!email || !password) {
    return;
  }

  userEmailSpan.textContent = email;
  userPasswordSpan.textContent = password;
}

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();

  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;

  if (email === "") {
    displayMessage("error", "Email cannot be blank");
  } else if (password === "") {
    displayMessage("error", "Password cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    renderLastRegistered();
  }
});
