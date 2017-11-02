//////////////////////////////////////Variables

var player1 = true;
var player2 = false;
// var connect3 = (["", "", ""] || ["", "", ""] || ["", "", ""]);

//////////////////////////////////////Game Controller

function changeTurn(){

  var playTurnX = player1
  var playTurnO = player2

  if (player1 === true){
      player2 = false;
      $(function playTurnX(){
        player2 = true;
        player1 = false;
        $('td').on('click', function(){
        $(this).addClass('X').append("X")
        console.log('ivebeen clicked by x');
        })
      })
  } else (player2 === true)
      player1 = false;
      $(function playTurnO(){
        player1 = true;
        player2 = false;
        $('td').on('click', function(){
        $(this).addClass('O').append("O")
        console.log('ive been clicked by o');
    })
  })
}

//////////////////////////////////////Clickable reset
$(function(){
  $('#reset').click(function(){
    $('td').html($(""))
    console.log('ive been clicked');
  })
})

//////////////////////////////////////JUNK

// function Winner(){
//   if (connect3 === false) {
//     changeTurn()
//
//
//   }else{
//
//   }
// }

changeTurn()

// //////X Clicker
// $(function(){
//   $('td').on('click', function(){
//     $(this).addClass('X').append("X")
//     console.log('ivebeen clicked by x');
//   })
// })

////////O Clicker
// $(function(){
//   $('td').on('click', function(){
//     $(this).addClass('O').append("O")
//     console.log('ivebeen clicked by o');
//   })
// })

<!-- Working CLickable reset-->
// $(function(){
//   $('table').on('click', function(){
//     console.log('ivebeen clicked again');
//   })
// })
//////Clickable Table


//have 2 diffferent placable tiles X and O
//be able to alternate which tile is placed in each square (ONLY 1)
//Generate a winning condition that stops the game
//have a button that resets the board.
