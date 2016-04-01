var counter = 0;
var turn = 0;
var a1, a2, a3, b1, b2, b3, c1, c2, c3;
var a;
var newGame = document.querySelector(".game");
var xWins = false;
var oWins = false;
var tie = false;
var player1Wins = 0;
var player2Wins = 0;

if(!localStorage.getItem('board')) {
  populateStorage();
} else {
  setBoard();
  renderBoard();
}
function renderBoard(){
  // gets values from javascript and inserts them into the DOM.
  document.querySelector('#r00').innerHTML = a1;
  document.querySelector('#r01').innerHTML = a2;
  document.querySelector('#r02').innerHTML = a3;
  document.querySelector('#r10').innerHTML = b1;
  document.querySelector('#r11').innerHTML = b2;
  document.querySelector('#r12').innerHTML = b3;
  document.querySelector('#r20').innerHTML = c1;
  document.querySelector('#r21').innerHTML = c2;
  document.querySelector('#r22').innerHTML = c3;

  var boxesArr = document.querySelectorAll('.boxes');
  for (var i = 0; i < boxesArr.length; i++) {
    if(boxesArr[i].innerHTML === "X"){
      boxesArr[i].style.backgroundColor = '#fdef64';
    } else if (boxesArr[i].innerHTML === "O"){
      boxesArr[i].style.backgroundColor = '#b4f666';
    } else {
    boxesArr[i].style.backgroundColor = 'white';
    }
  }

  document.querySelector('#score1').innerHTML = player1Wins;
  document.querySelector('#score2').innerHTML = player2Wins;
}
function setBoard() {
  var array = JSON.parse(localStorage.getItem('board'));
  a1 = array[0];
  a2 = array[1];
  a3 = array[2];
  b1 = array[3];
  b2 = array[4];
  b3 = array[5];
  c1 = array[6];
  c2 = array[7];
  c3 = array[8];
  counter = Number(array[9]);
  player1Wins = Number(array[10]);
  player2Wins = Number(array[11]);
}

newGame.addEventListener('click',function(event){
  if(event.target.className === "boxes"){
    if(turn === 0 && event.target.innerHTML === "" && xWins === false && oWins === false){
      to1 = document.getElementById("token1").value;
      if (to1 === ""){tok1 = "X";} else {tok1 = to1;}
      event.target.innerHTML = tok1;
      event.target.style.backgroundColor = '#fdef64';
      turn = 1;
      counter += 1;
      checkBoard();
      populateStorage();
      checkWin();
      getWinner();
    } else if(turn === 1 && event.target.innerHTML === "" && xWins === false && oWins === false){
      to2 = document.getElementById("token2").value;
      if (to2 === ""){tok2 = "O";} else {tok2 = to2;}
      event.target.innerHTML = tok2;
      event.target.style.backgroundColor = '#b4f666';
      turn = 0;
      counter += 1;
      checkBoard();
      populateStorage();
      checkWin();
      getWinner();
    }
  }
});

var checkBoard = function(){
   a1 = document.querySelector('#r00').innerHTML;
   a2 = document.querySelector('#r01').innerHTML;
   a3 = document.querySelector('#r02').innerHTML;
   b1 = document.querySelector('#r10').innerHTML;
   b2 = document.querySelector('#r11').innerHTML;
   b3 = document.querySelector('#r12').innerHTML;
   c1 = document.querySelector('#r20').innerHTML;
   c2 = document.querySelector('#r21').innerHTML;
   c3 = document.querySelector('#r22').innerHTML;
}

function populateStorage() {
  var arr = [a1, a2, a3, b1, b2, b3, c1, c2, c3, counter, player1Wins, player2Wins];
  var arrStr = JSON.stringify(arr);
  localStorage.setItem('board', arrStr);
}

var checkWin = function(){
  to1 = document.getElementById("token1").value;
  if (to1 === ""){tok1 = "X";} else {tok1 = to1;}
  to2 = document.getElementById("token2").value;
  if (to2 === ""){tok2 = "O";} else {tok2 = to2;}

  if ((a1 == a2 && a1 == a3 && (a1 == tok1)) || //first row
      (b1 == b2 && b1 == b3 && (b1 == tok1)) || //second row
      (c1 == c2 && c1 == c3 && (c1 == tok1)) || //third row
      (a1 == b1 && a1 == c1 && (a1 == tok1)) || //first column
      (a2 == b2 && a2 == c2 && (a2 == tok1)) || //second column
      (a3 == b3 && a3 == c3 && (a3 == tok1)) || //third column
      (a1 == b2 && a1 == c3 && (a1 == tok1)) || //diagonal 1
      (a3 == b2 && a3 == c1 && (a3 == tok1))    //diagonal 2
    ) {
        xWins = true;
        player1Wins += 1;
      }
  else if ((a1 == a2 && a1 == a3 && (a1 == tok2)) || //first row
      (b1 == b2 && b1 == b3 && (b1 == tok2)) || //second row
      (c1 == c2 && c1 == c3 && (c1 == tok2)) || //third row
      (a1 == b1 && a1 == c1 && (a1 == tok2)) || //first column
      (a2 == b2 && a2 == c2 && (a2 == tok2)) || //second column
      (a3 == b3 && a3 == c3 && (a3 == tok2)) || //third column
      (a1 == b2 && a1 == c3 && (a1 == tok2)) || //diagonal 1
      (a3 == b2 && a3 == c1 && (a3 == tok2))    //diagonal 2
      ) {
          oWins = true;
          player2Wins += 1;
        }
    else if(counter == 9){
        tie = true;
      }
}

var resetFunc = function(){

  var boxesArr = document.querySelectorAll('.boxes');
  for (var i = 0; i < boxesArr.length; i++) {
    boxesArr[i].textContent = "";
    boxesArr[i].style.backgroundColor = 'white';
  }

  document.querySelector("#winner").innerHTML = "";
  xWins = false;
  oWins = false;
  tie = false;
  turn = 0;
  counter = 0;
  document.getElementById("player1").value = "";
  document.getElementById("player2").value = "";
  document.getElementById("token1").value = "";
  document.getElementById("token2").value = "";
  localStorage.clear();
};

var getWinner = function(){
  if(xWins === true){
    play1 = document.getElementById("player1").value;
    if (play1 === ""){play1 = "Player 1";}
    document.querySelector("#winner").innerHTML = play1 + " wins!";
    document.querySelector("#score1").innerHTML = player1Wins;
    localStorage.clear();
  } else if (oWins === true){
    play2 = document.getElementById("player2").value;
    if (play2 === ""){play2 = "Player 2";}
    document.querySelector("#winner").innerHTML = play2 + " wins!";
    document.querySelector("#score2").innerHTML = player2Wins;
    localStorage.clear();
  } else if (tie === true){
    document.querySelector("#winner").innerHTML = "Tie!";
    localStorage.clear();
  }
}

var reset = document.querySelector('#resetBtn');
reset.addEventListener('click',resetFunc);
