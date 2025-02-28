function guess(){
    var guess = document.getElementById("guess");
    var result = document.getElementById("result")

    var guessNumber = guess.value;

    var random = Math.floor(Math.random() * 10) + 1;
    
    if(guessNumber == "")
    {
       alert("Please enter a number between 1 and 10.");
    }
    else if(guessNumber < random)
    {
        result.innerHTML = "My number is greater than "+guessNumber ;
        guessNumber++;
    }else if(guessNumber > random)
    {
        result.innerHTML = "My number is less than "+guessNumber ;
        guessNumber++;
    }else if(guessNumber == random)
    {
        result.innerHTML = "Well Done! You guessed my number.";
        guessNumber = "" ;
    }
}