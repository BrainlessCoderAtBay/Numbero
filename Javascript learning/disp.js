//for repetetive use

const GameState = {
    NumG: "",
    CurrentGameNo: 1,
    OverallGuess: 0,
    CurrentGuessNo: 1,
    Gapping: "-----",
}

//For all the results

class Results{
    constructor(){
        this.Win = document.getElementById("Win");
        this.Quit = document.getElementById("Quit");
        this.Answer = document.getElementById("Answer");
        this.Attempts = document.getElementById("Attempts");
        this.Re = document.getElementById("Re");
        this.GameStats = document.getElementById("GameStats");
        this.AverageStat = document.getElementById("AverageStat");
        this.Game = document.getElementById("Game");
        this.turnOn = "block";
        this.turnOff = "none";
    }

   //Shows the game screen and turn off all

    ClearResults(){
        this.Win.style.display = this.turnOff;
        this.Quit.style.display = this.turnOff;
        this.Answer.style.display = this.turnOff;
        this.Re.style.display = this.turnOff;
        this.Attempts.style.display = this.turnOff;
        this.GameStats.style.display = this.turnOff;
        this.AverageStat.style.display = this.turnOff;
        this.Game.style.display = this.turnOn;
    }
   //Show only Quit screen
    Quits(){
        this.Game.style.display = this.turnOff;
        this.Quit.style.display = this.turnOn;
        this.Answer.style.display = this.turnOn;
        this.Re.style.display = this.turnOn;
    }

   //Show only Win screen 

    Winner(answer){
        if (answer){
            this.Game.style.display = this.turnOff;
            this.Win.style.display = this.turnOn;
            this.Answer.style.display = this.turnOn;
            this.Re.style.display = this.turnOn;
        }
    }

   //Shows the average stats

    GameOver(){
        this.ClearResults();
        this.GameStats.style.display = this.turnOn;
        this.AverageStat.style.display = this.turnOn;
        this.Game.style.display = this.turnOff;
        let AverageMove = GameState.OverallGuess / GameState.CurrentGameNo;
        this.GameStats.innerHTML = "You played " + GameState.CurrentGameNo + " game(s)"
        this.AverageStat.innerHTML = "You averaged " + AverageMove + " move(s)"
    }
}

//set it to a variable

const Time = new Results();