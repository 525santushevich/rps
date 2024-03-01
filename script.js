//Not my js
// Function to generate username
function generateUsername() {
    var input = document.getElementById("username-input").value;
    var output = document.getElementById("username-output");

    if (input.trim() === "") {
        alert("Please enter a username!");
    } else {
        output.textContent = "Ready To Play" + " " + input + " " + "???";
    }
}
//Function to reset username
function resetUsername() {
    var input = document.getElementById("username-input");
    var output = document.getElementById("username-output");

    input.value = "";
    output.textContent = "";
}
//End of "Not my js"

const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  let moves = 0;

  const playGame = () => {
      const rockBtn = document.querySelector('.rock');
      const paperBtn = document.querySelector('.paper');
      const scissorBtn = document.querySelector('.scissor');
      const playerOptions = [rockBtn,paperBtn,scissorBtn];
      const computerOptions = ['rock','paper','scissors']


      playerOptions.forEach(option => {
          option.addEventListener('click',function(){

              const movesLeft = document.querySelector('.movesleft');
              moves++;
              movesLeft.innerText = `Moves Left: ${10-moves}`;


              const choiceNumber = Math.floor(Math.random()*3);
              const computerChoice = computerOptions[choiceNumber];


              winner(this.innerText,computerChoice)


              if(moves == 10){
                  gameOver(playerOptions,movesLeft);
              }
          })
      })

  }

  const winner = (player,computer) => {
      const result = document.querySelector('.result');
      const playerScoreBoard = document.querySelector('.p-count');
      const computerScoreBoard = document.querySelector('.c-count');
      player = player.toLowerCase();
      computer = computer.toLowerCase();
      if(player === computer){
          result.textContent = 'Tie'
      }
      else if(player == 'rock'){
          if(computer == 'paper'){
              result.textContent = 'You Lose';
              computerScore++;
              computerScoreBoard.textContent = computerScore;

          }else{
              result.textContent = 'You Win'
              playerScore++;
              playerScoreBoard.textContent = playerScore;
          }
      }
      else if(player == 'scissors'){
          if(computer == 'rock'){
              result.textContent = 'You Lose';
              computerScore++;
              computerScoreBoard.textContent = computerScore;
          }else{
              result.textContent = 'You Win';
              playerScore++;
              playerScoreBoard.textContent = playerScore;
          }
      }
      else if(player == 'paper'){
          if(computer == 'scissors'){
              result.textContent = 'Computer Won';
              computerScore++;
              computerScoreBoard.textContent = computerScore;
          }else{
              result.textContent = 'You Lose';
              playerScore++;
              playerScoreBoard.textContent = playerScore;
          }
      }
  }

  const gameOver = (playerOptions,movesLeft) => {

      const chooseMove = document.querySelector('.move');
      const result = document.querySelector('.result');
      const reloadBtn = document.querySelector('.reload');

      playerOptions.forEach(option => {
          option.style.display = 'none';
      })

      chooseMove.innerText = 'Game Over!!'
      movesLeft.style.display = 'none';

      if(playerScore > computerScore){

          result.innerText = 'You Won The Game'

      }
      else{
          result.innerText = 'Tie';
          result.style.color = 'grey'
      }
      reloadBtn.innerText = 'Restart';
      reloadBtn.style.display = 'flex'
      reloadBtn.addEventListener('click',() => {
          window.location.reload();
      })
  }

  //Calling playGame function inside game
  playGame();

}

//Calling the game function
game();