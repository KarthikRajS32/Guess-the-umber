var guessNum = document.getElementById("guess");
var result = document.getElementById("result");
var score = document.getElementById("score");
var random = Math.floor(Math.random() * 10) + 1;
var totalScore = 10;
function guess() {
    var guessNumber = guessNum.value;
    
  if (guessNumber == "") {
    alert("Please enter a number between 1 and 10.");
  } else if (guessNumber < random) {
    totalScore = totalScore - 1;
    score.innerHTML = "Score: " + totalScore;
    result.innerHTML = "My number is greater than " + guessNumber;
    guessNumber++;
  } else if (guessNumber > random) {
    totalScore = totalScore - 1;
    score.innerHTML = "Score: " + totalScore;
    result.innerHTML = "My number is less than " + guessNumber;
    guessNumber++;
  } else if (guessNumber == random) {
    result.innerHTML = "Well Done! You guessed my number."+"<br>"+"Your score is : "+totalScore;
    guessNumber = "";
    score.innerHTML = "";
  }
}
