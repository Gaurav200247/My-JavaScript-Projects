// *************************** ARRAY ***************************************
var movesList=['rock','paper','scissor'];

// *************************** VARIABLES ***********************************
var moves = document.querySelector('.moves');

var rockBtn = document.querySelector('.rock');
var paperBtn = document.querySelector('.paper');
var scissorBtn = document.querySelector('.scissors');

var alert = document.querySelector('.alert');

var userScore = document.querySelector('.user-score');
var compScore = document.querySelector('.comp-score');

var u=0,c=0;

var rock = 'rock';
var paper = 'paper';
var scissor = 'scissor';
// ************************ EVENT LISTENERS *********************************
    
    // ROCK BUTTON
rockBtn.addEventListener('click',function () {

    var rand = Math.floor((Math.random()*3));

    console.log(movesList[rand]);
    
    if (movesList[rand]===rock) {

        displayAlert('Its a Tie !','yellow');

    }else if(movesList[rand]===paper){

        displayAlert('You Lose! Paper covered rock','red');
        c++;
        updateCOMPscore(c);

    }else if(movesList[rand]===scissor){

        displayAlert('You WIN!','green');
        u++;
        updateUSERscore(u);
    }
});

    
    // Paper BUTTON
paperBtn.addEventListener('click',function () {
    
    var rand = Math.floor((Math.random()*3));

    console.log(movesList[rand]);
    
    if (movesList[rand]===rock) {

        displayAlert('You WIN!','green');
        u++;
        updateUSERscore(u);

    }else if(movesList[rand]===paper){
        
        displayAlert('Its a Tie !','yellow');

    }else if(movesList[rand]===scissor){
        
        displayAlert('You Lose! Paper covered rock','red');
        c++;
        updateCOMPscore(c);

    }
});

    
    // SCISSORS BUTTON
scissorBtn.addEventListener('click',function () {
    
    var rand = Math.floor((Math.random()*3));

    console.log(movesList[rand]);
    
    if (movesList[rand]===rock) {

        displayAlert('You Lose! Paper covered rock','red')
        c++;
        updateCOMPscore(c);


    }else if(movesList[rand]===paper){

        displayAlert('You WIN!','green')
        u++;
        updateUSERscore(u);

    }else if(movesList[rand]===scissor){


        displayAlert('Its a Tie !','yellow')

    }
});

// ************************ FUNCTIONS ***************************************
  
// UPDATE USER SCORE
function updateUSERscore(score) {
    if (score<10) {
        userScore.innerText="0"+score;
    }else{    
        userScore.innerText=score;
    }
}

// UPDATE COMPUTER SCORE
function updateCOMPscore(score) {
    if (score<10) {
        compScore.innerText="0"+score;
    }else{    
        compScore.innerText=score;
    }
}

// DISPLAY ALERT
function displayAlert(sentence,action) {
    if(action==='yellow')
    {
        alert.innerText = sentence;
        alert.classList.add(`alert-${action}`);
        moves.classList.add("noClick"); 

        setTimeout(function () {   
            alert.innerText = "Coincidence, One More Play!";
            alert.classList.remove(`alert-${action}`);
            moves.classList.remove("noClick");           
        },1500);
    }

    if(action==='red')
    {
        alert.innerText = sentence;
        alert.classList.add(`alert-${action}`);
        moves.classList.add("noClick"); 

        setTimeout(function () {   
            alert.innerText = "Better Luck Next Time, LOSER";
            alert.classList.remove(`alert-${action}`);
            moves.classList.remove("noClick");           
        },1500);
    }

    if(action==='green')
    {
        alert.innerText = sentence;
        alert.classList.add(`alert-${action}`);
        moves.classList.add("noClick"); 

        setTimeout(function () {   
            alert.innerText = "Wanna Play One More, WINNER";
            alert.classList.remove(`alert-${action}`);
            moves.classList.remove("noClick");           
        },1500);
    }
}
