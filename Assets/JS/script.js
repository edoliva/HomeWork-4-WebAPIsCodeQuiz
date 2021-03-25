var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("button");
var msgDiv = document.querySelector("#msg");
var userEmailSpan = document.querySelector("#user-email");
var userPasswordSpan = document.querySelector("#user-password");

var startButton = document.querySelector(".start-button");

var score = 0;
var questionNum = 0
var questions = [
    {
        title: "Which of the following is NOT a programming language?",
        choices: ['HTML', 'JavaScript', 'c.Lock', 'CSS'],
        answer: 'c.Lock' 
    },
    {
        title: "Which 'terminal' command prompts will update your GitHub account with your most recent code?",
        choices: ['git add ., git commit -m "blah", git push', 'get-it, got.it, push^it', 'abc, 123, xyz', 'snap ., crackle /, pop ^'],
        answer: 'git add ., git commit -m "blah", git push' 
    },

];

startButton.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("start game");
    // create time to start countdown
    // use .css to change .quiz-box to inline-block
    // use .css to change .info-box to hidden

    nextQuestion();
});

// create eventlistener to find out which button is being clicked by user

function nextQuestion() { 
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
  
  questionNum++;

  // log user selection and creat var userChoice
    // if(userChoice == questions[questionNum].answer){
    //      document.getElementById("result").textContent = "Correct!";
    // } else {
    //      score--;
    //      document.getElementById("result").textContent = "Wrong!";
    // }

    //add if statemtn check that questionNum<=questions.length then continue, if not, return.

}


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
