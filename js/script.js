//document.getElementById("bla").innerHTML="labas"

//apsirasome kintamuosius
//var game; // a variable that we will use to create a game object later
var game = new game();
var pointCom=0;
var pointPlay=0;
var userChoice = "";
var computerChoice = "";
var result = "";
var buttons = document.getElementsByClassName("button"); // consists of 3 buttons: rock, paper & scissors
var playerChoiceDisplay = document.getElementById("player_choice"); // an element to display player's choice
var computerChoiceDisplay = document.getElementById("computer_choice"); // an element to display computer's choice
var resultDisplay = document.getElementById("result"); // an element to display the game result
var resultComDisplay = document.getElementById("resultC"); // an element to display the game result
var resultPlayDisplay = document.getElementById("resultP"); // an element to display the game result
var hoveris = document.querySelector('#foo-1');
var close = document.querySelector('.fa-times');






function game(){
    this.computerInput = function(){
        this.computerChoice = Math.random();
        // console.log(this.computerChoice);
        
        if (this.computerChoice < 0.34) {
                return this.computerChoice = "rock";
        } else if(this.computerChoice <= 0.67) {
                return this.computerChoice = "paper";
        } else {paper
                return this.computerChoice = "scissors";
        };
        
    };


    // choice1 is player's choice
    // choice2 is computer's choice
    
    this.compare = function(choice1, choice2){
            if (choice1 === choice2){
                    return "equal";
            } else if(choice1 === "scissors" && choice2 === "rock"){
                pointCom++;
                    return "rock";
            } else if(choice1 === "scissors" && choice2 === "paper"){
                pointPlay++;
                return "scissors";
            }else if(choice1 === "rock" && choice2 === "scissors"){
                pointPlay++;
                return "rock";
            } else if(choice1 === "rock" && choice2 === "paper"){
                pointCom++;
                        return "paper";
            } else if(choice1 === "paper" && choice2 === "scissors"){
                pointCom++;
                return "scissors";
            }else if(choice1 === "paper" && choice2 === "rock"){
                pointPlay++;
                return "paper";
            }
            
            

    };
  
};


function ChoosePic(text) {
            const a ="<img src='./pic/scissors.png'width=\'90px\' height=\'90px\'>" ;
            const b = "<img src='./pic/paper.png'width=\'90px\' height=\'90px\'>" ;
            const c = "<img src='./pic/rock.png'width=\'90px\' height=\'90px\'>";

            if (text === "scissors"){
                    return a;                
            } else if (text === "paper"){
                    return b;
            } else if (text === "rock"){
                    return c;
            }
       
    }

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(e){
        //console.log(e) this.id tai yra is e gautas id;
        // console.log(e);
        // console.log(this.innerHTML);
        // console.log(this.id);
       
        
        
                userChoice = this.id;
                //playerChoiceDisplay.innerHTML = "player: " + userChoice;
                playerChoiceDisplay.innerHTML = ChoosePic( userChoice);
                computerChoice = game.computerInput();   
                //console.log(computerChoice);    
                // computerChoiceDisplay.innerHTML = "computer: " + computerChoice;
                computerChoiceDisplay.innerHTML = ChoosePic(computerChoice);
                
                result = game.compare(userChoice, computerChoice);
 
                resultDisplay.innerHTML = "Result: " + result;
                resultComDisplay.innerHTML = "Compiuter: "+ pointCom;
                resultPlayDisplay.innerHTML = "Player: "+ pointPlay;


                // console.log(pointCom);

        if (pointCom > 3 || pointPlay > 3 ){
                hoveris.classList.add('show');
        }

    

                






                // console.log("Palyer "+pointPlay);
                // console.log("Com "+pointCom);
        }, false);
}
    close.addEventListener('click', function(){
                hoveris.classList.remove('show');
                location.reload();    
                
            });

//      game.computerInput();

