///////////////////////////////////////Variables

var i = 0; i < 10;
// var connect3 = (["", "", ""] || ["", "", ""] || ["", "", ""]);

///////////////////////////////////////Game Controller

function turnAlternator(){
  changeTurn[i] = document.addEventListener('click', function(event){
    i++

  })
}

// $(function({
//   $('td').on('click', function(){
//     i++
//   })
//   })
// })

function changeTurn(){

    if (i % 2 === 0){
      $('td').on('click', function(){
      $(this).addClass('X').html("X")

      console.log('ivebeen clicked by x');
    })
    } else {
      $('td').on('click', function(){
      $(this).addClass('O').html("O")

      console.log('ive been clicked by o');
    })
  }
}



///////////////////////////////////////Clickable reset

$(function(){
  $('#reset').on('click', function(){
    $('td').removeClass("X")
    $('td').empty("")
    console.log('ive been clicked to reset');
  })
})

///////////////////////////////////////Calling Functions

turnAlternator()
changeTurn()


///////////////////////////////////////JUNK

// function Winner(){
//   if (connect3 === false) {
//     changeTurn()
//
//
//   }else{
//      alert("The Winner is: ")
//   }
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
