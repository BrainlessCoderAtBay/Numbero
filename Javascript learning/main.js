//Gets the elements from HTML

const Guess = document.getElementById("Guess");
const GuessTable = document.getElementById("GuessTable");
const RightNow = document.getElementById("CurrentGuess");

//Class for game

class NumberGame{
    constructor(){
        this.answer = this.GameAnswer();
        Time.Answer.innerHTML = "The answer is " + this.answer
        console.log(this.answer);
    }
    GameAnswer(){
        return Math.round(Math.random() * 100) + 1;
    }
    Reset(){
        this.answer = this.GameAnswer();
        Time.Answer.innerHTML = "The answer is " + this.answer
    }
    CheckAnswer(guess){
        let answer = guess - this.answer;
        if (answer < 0){
            GameState.NumG = "Higher";
            return false;
        }else if (answer > 0){
            GameState.NumG = "Lower";
            return false;
        }else{
            GameState.NumG = "Exact";
            return true;
        }
    }
}

const Numbero = new NumberGame();

Guess.addEventListener("keypress", e => {
    if (e.key === "Enter") CheckGuess();
});

function createCell(content){
    const td = document.createElement("td");
    td.innerHTML = content;
    return td;
}

//Checks guess

function CheckGuess(){
    const newRow = document.createElement("tr");

    let CurrentGuess = Number(Guess.value);

    
    if (!isNaN(CurrentGuess)|| CurrentGuess < 0 || CurrentGuess > 100){
        alert("Enter a number between 1 - 100");
        return
    }

    let isCorrect = Numbero.CheckAnswer(CurrentGuess);
    Time.Winner(isCorrect);
    
    newRow.appendChild(createCell(GameState.CurrentGuessNo));
    newRow.appendChild(createCell(GameState.Gapping));
    newRow.appendChild(createCell(CurrentGuess));
    newRow.appendChild(createCell(GameState.Gapping));
    newRow.appendChild(createCell(GameState.NumG));
    GuessTable.appendChild(newRow);
    
    

    Guess.value = "";

    if (!isCorrect){
        GameState.CurrentGuessNo++;
    }
    
    GameState.OverallGuess++
}

function Rerun(){
    Numbero.Reset();
    console.log(Numbero.answer);
    Guess.value = "";
    GameState.CurrentGuessNo = 1;
    GameState.CurrentGameNo++;
    Time.ClearResults()
    GuessTable.innerHTML = `
<tr>
    <td>Guess</td>
    <td>-------</td>
    <td>Number</td>
    <td>-------</td>
    <td>Difference</td>
</tr>`
}