//document.getElementById("bla").innerHTML="labas"

//apsirasome kintamuosius
//var game; // a variable that we will use to create a game object later
var game = new game();
var userChoice = "";
var computerChoice = "";
var result = "";
var buttons = document.getElementsByClassName("button"); // consists of 3 buttons: rock, paper & scissors
var playerChoiceDisplay = document.getElementById("player_choice"); // an element to display player's choice
var computerChoiceDisplay = document.getElementById("computer_choice"); // an element to display computer's choice
var resultDisplay = document.getElementById("result"); // an element to display the game result


function game(){
    this.computerInput = function(){
        this.computerChoice = Math.random();
        console.log(this.computerChoice);
        
        if (this.computerChoice < 0.34) {
                return this.computerChoice = "rock";
        } else if(this.computerChoice <= 0.67) {
                return this.computerChoice = "paper";
        } else {
                return this.computerChoice = "scissors";
        };
        

 
    };


    // choice1 is player's choice
    // choice2 is computer's choice
    
    this.compare = function(choice1, choice2){

    };
};
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(){
        console.log("hello");
        
                userChoice = this.id;
                playerChoiceDisplay.innerHTML = "player: " + userChoice;
 
                computerChoice = game.computerInput();
                computerChoiceDisplay.innerHTML = "computer: " + computerChoice;
 
                result = game.compare(userChoice, computerChoice);
 
                resultDisplay.innerHTML = "Result: " + result;
        }, false);
}
game.computerInput();

