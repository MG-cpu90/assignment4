var dataTypesQ1 = ["strings", "booleans", "alerts", "numbers"];
var correctAnswer1 = dataTypesQ1[2];

var conditionQ2 = ["quotes", "curly brackets", "parentheses", "square brackets"];
var correctAnswer2 = conditionQ2[2];

var arraysQ3 = ["numbers and strings", "other arrays", "booleans", "all of the above"];
var correctAnswer3 = arraysQ3[3];

var stringValuesQ4 = ["commas", "curly brackets", "quotes", "parantheses"];
var correctAnswer4 = stringValuesQ4[2];

var debuggingQ5 = ["JavaScript", "terminal/bash", "for loops", "console.log"];
var correctAnswer5 = debuggingQ5[3];

var timeContainer = document.querySelector(".time");
var timer = document.querySelector(".timer");
var scoreContainer = document.querySelector(".score");
var headingsContainer = document.querySelector(".main headings container");
var quizContainer = document.querySelector(".quiz-container");
var startButton = document.querySelector("#start-button");
var correctButton1 = document.querySelector("#correct-button1");
var correctButton2 = document.querySelector("#correct-button2");
var correctButton3 = document.querySelector("#correct-button3");
var correctButton4 = document.querySelector("#correct-button4");
var correctButton5 = document.querySelector("#correct-button5");
var wrongButton = document.querySelectorAll("#button");
var button = document.querySelector(".button");
var backButton = document.querySelector("#Go-back-button");
var clearButton = document.querySelector("#Clear-Highscore-button");

var assessment1 = document.querySelector(".assessment1");
var assessment2 = document.querySelector(".assessment2");
var assessment3 = document.querySelector(".assessment3");
var assessment4 = document.querySelector(".assessment4");
var assessment5 = document.querySelector(".assessment5");

var secondsLeft = 75;

var slide1 = document.querySelector("#slide1");
var slide2 = document.querySelector("#slide2");
var slide3 = document.querySelector("#slide3");
var slide4 = document.querySelector("#slide4");
var slide5 = document.querySelector("#slide5");
var slide6 = document.querySelector("#slide6");
var slide7 = document.querySelector("#slide7");
var slide8 = document.querySelector("#slide8");

var slide = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8];

// slide[0] = document.getElementById("slide1");
// slide[1] = document.getElementById("slide2");
// slide[2] = document.getElementById("slide3");
// slide[3] = document.getElementById("slide4");
// slide[4] = document.getElementById("slide5");
// slide[5] = document.getElementById("slide6");
// slide[6] = document.getElementById("slide7");
// slide[7] = document.getElementById("slide8");


startButton.addEventListener("click", function changePage() {
  document.querySelector("#slide1").style.display = "none";
  document.querySelector("#slide2").style.display = "block";
    
  function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeContainer.textContent = "Time: " + secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        // sendMessage();
      }
  
    }, 1000);
  }
  setTime();
});

if (document.querySelector("#correct-button1").addEventListener) {

    document.querySelector("#correct-button1").addEventListener("click", function changePage1() {

      document.querySelector("#slide2").style.display = "none";
      document.querySelector("#slide3").style.display = "block";

    });

  document.querySelector("#correct-button1").addEventListener("click", function correct1() {

    // Create a <p> node
    var node = document.createElement("P"); 
    // Create a text node                
    var textnodeWrong = document.createTextNode("Correct!");         

    // Append the text to <li>
    node.appendChild(textnodeWrong);                              
    document.querySelector(".assessment1").appendChild(node);
 
    });


  }

else if (wrongButton.addEventListener) {
  wrongButton.addEventListener("click", function wrong1() {

// Create a <p> node
var node = document.createElement("P"); 
// Create a text node                
var textnodeWrong = document.createTextNode("Wrong!");         

// Append the text to <li>
node.appendChild(textnodeWrong);                              
document.querySelector(".assessment1").appendChild(node);

  secondsLeft -=10;
  timeContainer.textContent = "Time: " + secondsLeft;

  if(secondsLeft === 0) {
    clearInterval(timerInterval);
    // sendMessage();
  }

});

}


if (wrongButton.addEventListener) {

  for (i = 0; i < slide.length; i++) {

  }

}

scoreContainer.addEventListener("click", function changePage1() {

  document.querySelector("#slide1").style.display = "none";
  document.querySelector("#slide2").style.display = "none";
  document.querySelector("#slide3").style.display = "none";
  document.querySelector("#slide4").style.display = "none";
  document.querySelector("#slide5").style.display = "none";
  document.querySelector("#slide6").style.display = "none";
  document.querySelector("#slide7").style.display = "none";
  document.querySelector("#slide8").style.display = "block";

});

backButton.addEventListener("click", function homePage() {

  document.querySelector("#slide1").style.display = "block";
  document.querySelector("#slide2").style.display = "none";
  document.querySelector("#slide3").style.display = "none";
  document.querySelector("#slide4").style.display = "none";
  document.querySelector("#slide5").style.display = "none";
  document.querySelector("#slide6").style.display = "none";
  document.querySelector("#slide7").style.display = "none";
  document.querySelector("#slide8").style.display = "none";

});

// function on() {
//     slide2.style.display = "block";
//   }
  
//   function off() {
//     slide1.style.display = "none";
//   }

  // function on();