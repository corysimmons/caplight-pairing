import { useState, Fragment, useEffect } from 'react'

import './global.css'
import Square from './components/Square'
import checkWinner from './utils/checkWinner'

const defaultBoard = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
]

function App() {
  const [isXTurn, setIsXTurn] = useState(true)
  const [board, setBoard] = useState(defaultBoard)

  useEffect(() => {
    if (checkWinner(board)) {
      alert(!isXTurn ? 'x wins' : 'o wins')
    }
  }, [board, isXTurn])

  const handleClick = (row, column) => {
    const _board = board.map(x => x.slice())
    _board[row][column] = isXTurn ? 1 : 2
    setIsXTurn(!isXTurn)
    setBoard(_board)
  }

  return (
    <div className='app'>
      <div className='board'>
        {board.map((row, i) => {
          return (
            <Fragment key={i}>
              {row.map((_, i2) => (
                <Square key={i2} onClick={() => handleClick(i, i2)}>{board[i][i2] === 1 ? 'x' : board[i][i2] === 2 ? 'o' : null}</Square>
              ))}
            </Fragment>
          )
        })}
      </div>
      <button className='reset-btn' onClick={() => {
        setBoard(defaultBoard)
        setIsXTurn(true)
      }}>Reset game</button>
    </div>
  );
}

export default App;
