var player1 = true;
var player2 = false;

function playTurnX(){
  if (player1 === true){
    $(function(){
      $('td').on('click', function(){
        $(this).addClass('X').append("X")
        console.log('ivebeen clicked by x');
        player2 = true;
        player1 = false;
    })
  })
}


function playTurnO(){
  (player2 === true)
  $(function(){
    $('td').on('click', function(){
      $(this).addClass('O').append("O")
      console.log('ivebeen clicked by o');
      player1 = true;
      player2 = false;
    })
  })
}

// function changeTurn(){
//   playTurnX()
//   playTurnO()
//
// }



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

<!-- Working CLickable table-->
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


// $(function(){
//   $('#reset').click(function(){
//     console.log('ive been clicked');
//   })
// })
///////Clickable reset
