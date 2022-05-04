const no0 = arr => {
  return arr.every(x => x !== 0)
}

const checkWinner = (board) => {
  let isWinner = false

  board.forEach((row, i) => {
    // If a row has all the same elements then win
    if (row.every(square => square !== 0 && square === row[0])) {
      isWinner = true
    }
  })
  
  // If column values in every row match then win
  if (
    (no0([board[0][0], board[1][0], board[2][0]]) && (board[0][0] === board[1][0] && board[0][0] === board[2][0])) // left column
    || (no0([board[0][1], board[1][1], board[2][1]]) && (board[0][1] === board[1][1] && board[0][1] === board[2][1])) // middle column
    || (no0([board[0][2], board[1][2], board[2][2]]) && (board[0][2] === board[1][2] && board[2][2] === board[0][2])) // right column
  ) {
    isWinner = true
  }

  // If 3 in a row diagonal then win
  if (
    (no0([board[0][0], board[1][1], board[2][2]]) && (board[0][0] === board[1][1] && board[1][1] === board[2][2])) // top-left to bottom-right
    || (no0([board[0][2], board[1][1], board[2][0]]) && (board[0][2] === board[1][1] && board[1][1] === board[2][0])) // top-right to bottom-left
  ) {
    isWinner = true
  }
  
  return isWinner
}

export default checkWinner