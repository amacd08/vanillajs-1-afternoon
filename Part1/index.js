game = []
var completed = false;

function play(clickedId) {
  if (!completed) {
    clickedElement = document.getElementById(clickedId)
    playerSpan = document.getElementById('player')
      
      if (playerSpan.innerText === 'X') {
          if (clickedElement.innerText != 'X' && 
            clickedElement.innerText != 'O') {
            playerSpan.innerText = 'O'
            clickedElement.innerText = 'X'
            game[clickedId] = 'X'
          }
      } else {
          if (clickedElement.innerText != 'X' &&
            clickedElement.innerText != 'O') {
            playerSpan.innerText = 'X'
            clickedElement.innerText = 'O'
            game[clickedId] = 'O'
          }
      }
      const topLeft = game[0]
      const topCenter = game[1]
      const topRight = game[2]
      const middleLeft = game[3]
      const middleCenter = game[4]
      const middleRight = game[5]
      const bottomLeft = game[6]
      const bottomCenter = game[7]
      const bottomRight = game[8]   
      
      if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
          alert (`${topLeft} is the winner!`)
          completed = true
      } else if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
          alert (`${middleLeft} is the winner!`)
          completed = true
      } else if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
          alert (`${elseLeft} is the winner!`)
          completed = true
      } else if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
          alert (`${topLeft} is the winner!`)
          completed = true
      } else if (topRight !== undefined && topRight === middleCenter && topRight === bottomLeft) {
          alert (`${topRight} is the winner!`)
          completed = true
      } else if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
          alert (`${topLeft} is the winner!`)
          completed = true
      } else if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
          alert (`${topRight} is the winner!`)
          completed = true
      } else if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
          alert (`${middleLeft} is the winner!`)
          completed = true
      }
      let boardFull = true
      for (var i = 0; i <= 8; i++) {
          console.log(game[i])
          if (game[i] === undefined) {
              boardFull = false
          }
      }
      if (boardFull === true) {
        alert (`Cats Game`)
        completed = true

    }
    console.log(game) 
  } else {
      alert ('Game Completed, Reset!')
  }

}

function reset() {
  for (var i = 0; i <=8; i++){
    document.getElementById([i]).innerText = ''
  }
}
