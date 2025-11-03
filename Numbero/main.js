//Does the minimum for the game to work
function Test(){
    randomNumber = Math.round(Math.random() * 100);
    EAnswer.textContent = "The answer is "+ randomNumber;
    console.log(randomNumber)
    Game.style.display = "inline";
    GameOver.style.display = "none";
    Win.style.display = "none";
    GameOver.style.display = "none";
    FinalAnswer.style.display = "none";
    Re.style.display = "none";
    Counter.style.display = "none";
    Guesses.innerHTML = `
<tr>
    <td>Guess</td>
    <td>-------</td>
    <td>Number</td>
    <td>-------</td>
    <td>Difference</td>
</tr>
`;  

}

//Checks guess
function getGuess(){
    
    const newRow = document.createElement("tr");
    const newGuessNo = document.createElement("td");
    const Gapping = document.createElement("td");
    const Gapping2 = document.createElement("td");
    const CurrentGuess = document.createElement("td");
    const Difference = document.createElement("td");
    let guess = Number(Input.value);
    let guessDifference = randomNumber - guess;
    let guessDifferenceW = null;

    if (guessDifference == 0){
        guessDifferenceW = "Exact";
    }else if (guessDifference > 0){
        guessDifferenceW = "Higher";
    }else{
        guessDifferenceW = "Lower";
    }

   //Appends and shows it to the screen

    newGuessNo.textContent = CurrentGuessNo;
    CurrentGuess.textContent = guess;
    Gapping.textContent = "-------";
    Gapping2.textContent = "-------";
    Difference.textContent = guessDifferenceW;

    newRow.appendChild(newGuessNo);
    newRow.appendChild(Gapping);
    newRow.appendChild(CurrentGuess);
    newRow.appendChild(Gapping2);
    newRow.appendChild(Difference);
    Guesses.appendChild(newRow);
    CurrentGuessNo++
    OverallGuessNo++
    Input.value = "";
    
   //Ends if the answer is right

    if (guessDifferenceW == "Exact"){
        Win.style.display = "flex";
        Counter.style.display = "flex"
        FinalAnswer.style.display = "flex";
        Re.style.display = "flex";
        Game.style.display = "none";
        Attempts.textContent = "It took "+ (CurrentGuessNo) + " to get the right answer"
    }
}

//Loser function
function QuitGame(){
    GameOver.style.display = "flex";
    FinalAnswer.style.display = "flex";
    Re.style.display = "flex";
    Game.style.display = "none";
}

//Play again
function Restart(){
    CurrentGameNo++
    Test();
}

//Quit entirely after session.Shows overall stats
function GameStats(){
    let AverageStats = OverallGuessNo / CurrentGameNo;
    Overall.style.display = "flex";
    AverageSt.style.display = "flex";
    Win.style.display = "none";
    FinalAnswer.style.display = "none";
    GameOver.style.display = "none";
    Attempts.style.display = "none";
    Re.style.display = "none";
    Stats.textContent ="You played "+ CurrentGameNo+" game(s)";
    AvgStats.textContent = "You averaged "+AverageStats+" move(s)";
}

//Runs once to initialize
Test();

