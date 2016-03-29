var counter;
var turn = 0;
var a1, a2, a3, b1, b2, b3, c1, c2, c3;
var a;
var newGame = document.querySelector(".game");
var xWins = false;
var oWins = false;
var tie = false;

newGame.addEventListener('click',function(event){
  //console.log(event);
  //console.log(event.target);
  if(event.target.className === "boxes"){
    if(turn === 0 && event.target.innerHTML === "" && xWins === false && oWins === false){
      event.target.innerHTML = 'X';
      turn = 1;
      checkBoard();
      checkWin();
      getWinner();
      counter += 1;
    } else if(turn === 1 && event.target.innerHTML === "" && xWins === false && oWins === false){
      event.target.innerHTML = 'O';
      turn = 0;
      checkBoard();
      checkWin();
      getWinner();
      counter += 1;
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

  if ((a1 == a2 && a1 == a3 && (a1 == "X")) || //first row
      (b1 == b2 && b1 == b3 && (b1 == "X")) || //second row
      (c1 == c2 && c1 == c3 && (c1 == "X")) || //third row
      (a1 == b1 && a1 == c1 && (a1 == "X")) || //first column
      (a2 == b2 && a2 == c2 && (a2 == "X")) || //second column
      (a3 == b3 && a3 == c3 && (a3 == "X")) || //third column
      (a1 == b2 && a1 == c3 && (a1 == "X")) || //diagonal 1
      (a3 == b2 && a3 == c1 && (a3 == "X"))    //diagonal 2
    ) {
        //console.log("X wins");
        xWins = true;
      }

  else if ((a1 == a2 && a1 == a3 && (a1 == "O")) || //first row
      (b1 == b2 && b1 == b3 && (b1 == "O")) || //second row
      (c1 == c2 && c1 == c3 && (c1 == "O")) || //third row
      (a1 == b1 && a1 == c1 && (a1 == "O")) || //first column
      (a2 == b2 && a2 == c2 && (a2 == "O")) || //second column
      (a3 == b3 && a3 == c3 && (a3 == "O")) || //third column
      (a1 == b2 && a1 == c3 && (a1 == "O")) || //diagonal 1
      (a3 == b2 && a3 == c1 && (a3 == "O"))    //diagonal 2
      ) {
          //console.log("O wins");
          oWins = true;
        }
        else if(counter === 9){
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
  counter = 0;
};

var getWinner = function(){
  if(xWins === true){
    document.querySelector("#winner").innerHTML = "X wins!";
  } else if (oWins === true){
    document.querySelector("#winner").innerHTML = "O wins!";
  } else if (tie === true){
    document.querySelector("#winner").innerHTML = "Tie!";
  }
}

var reset = document.querySelector('#resetBtn');
reset.addEventListener('click',resetFunc);
