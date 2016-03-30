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


newGame.addEventListener('click',function(event){
  //console.log(event);
  //console.log(event.target);
  if(event.target.className === "boxes"){
    if(turn === 0 && event.target.innerHTML === "" && xWins === false && oWins === false){
      //event.target.innerHTML = 'X';
      to1 = document.getElementById("token1").value;
      if (to1 === ""){tok1 = "X";} else {tok1 = to1;}
      event.target.innerHTML = tok1;
      turn = 1;
      counter += 1;
      checkBoard();
      checkWin();
      getWinner();
    } else if(turn === 1 && event.target.innerHTML === "" && xWins === false && oWins === false){
      //event.target.innerHTML = 'O';
      to2 = document.getElementById("token2").value;
      if (to2 === ""){tok2 = "O";} else {tok2 = to2;}
      event.target.innerHTML = tok2;
      turn = 0;
      counter += 1;
      checkBoard();
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
        //console.log("X wins");
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
          //console.log("O wins");
          oWins = true;
          player2Wins += 1;
        }
    else if(counter == 9){
        tie = true;
      }
}

var resetFunc = function(){
  document.querySelector('#r00').textContent = "";
  document.querySelector('#r01').textContent = "";
  document.querySelector('#r02').textContent = "";
  document.querySelector('#r10').textContent = "";
  document.querySelector('#r11').textContent = "";
  document.querySelector('#r12').textContent = "";
  document.querySelector('#r20').textContent = "";
  document.querySelector('#r21').textContent = "";
  document.querySelector('#r22').textContent = "";
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
};

var getWinner = function(){
  if(xWins === true){
    play1 = document.getElementById("player1").value;
    if (play1 === ""){play1 = "Player 1";}
    document.querySelector("#winner").innerHTML = play1 + " wins!";
  } else if (oWins === true){
    play2 = document.getElementById("player2").value;
    if (play2 === ""){play2 = "Player 2";}
    document.querySelector("#winner").innerHTML = play2 + " wins!";
  } else if (tie === true){
    document.querySelector("#winner").innerHTML = "Tie!";
  }
}

var reset = document.querySelector('#resetBtn');
reset.addEventListener('click',resetFunc);
