$(document).ready(function(){

    var correct = 0;

   $("#questions-display").hide();
   $("#submit-button").hide();
  
   function submitAnswers(){
  
 
    var question1 = document.forms["question-form"]["question1"].value;
    var question2 = document.forms["question-form"]["question2"].value;
    var question3 = document.forms["question-form"]["question3"].value;
    var question4 = document.forms["question-form"]["question4"].value;
    var question5 = document.forms["question-form"]["question5"].value;
  
  var correctAnswer = ["b", "a", "c", "b", "d"];
  

  if ( question1 == correctAnswer[0]){
  correct++;
  }
  if ( question2 == correctAnswer[1]){
  correct++;
  }
  if ( question3 == correctAnswer[2]){
  correct++;
  }
  if ( question4 == correctAnswer[3]){
  correct++;
  }
  if ( question5 == correctAnswer[4]){
  correct++;
  
  } 
  
  }
  
  
  
  
  
  
  var seconds = 30;
  var intervalId;
  
      function runTimer() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
       
      }
  

      function decrement() {
        seconds--;
        $("#count-down").html("<h2>" + seconds + " seconds left </h2>");
        if (seconds === 0) {
          $("#questions-display").hide();
          $("#submit-button").hide();
          stop();
          submitAnswers();
          displayResults();
        }
      }
  
  
$("#start").on("click", start);  

  function start(){

   $("#questions-display").show();
   $("#submit-button").show();
    runTimer();

    document.getElementById("questions-display").reset();
  }
  

      function stop() {
        clearInterval(intervalId);
        $("#questions-display").hide();
        $("#submit-button").hide();
  
      }    
  

  $("#submit-button").on("click", submit);  

  function submit(){

   $("#questions-display").hide();
   $("#submit-button").hide();
   submitAnswers();
   displayResults();
  stop();
  }
  
 
  function displayResults(){
  $("#results").text("You answered " + correct + " questions correctly out of 5.");
  }


  function reset(){
    var correct = 0;
    $("#questions-display").hide();
    $("#submit-button").hide();
    $("#results").hide();
  }

  });