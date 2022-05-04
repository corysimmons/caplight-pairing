import checkWinner from './checkWinner'

describe('check winner', () => {
  test('row winners', () => {
    const board = [
      [1, 1, 1],
      [0, 0, 0],
      [0, 0, 0]
    ]
    expect(checkWinner(board)).toBeTruthy()

    const board2 = [
      [0, 0, 0],
      [1, 1, 1],
      [0, 0, 0]
    ]
    expect(checkWinner(board2)).toBeTruthy()

    const board3 = [
      [0, 0, 0],
      [0, 0, 0],
      [1, 1, 1],
    ]
    expect(checkWinner(board3)).toBeTruthy()

    const board4 = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]
    expect(checkWinner(board4)).toBeFalsy()

    const board5 = [
      [1, 0, 0],
      [0, 1, 0],
      [0, 1, 0],
    ]
    expect(checkWinner(board5)).toBeFalsy()
  })

  test('column winners', () => {
    const board = [
      [1, 0, 0],
      [1, 0, 0],
      [1, 0, 0]
    ]
    expect(checkWinner(board)).toBeTruthy()

    const board2 = [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 0]
    ]
    expect(checkWinner(board2)).toBeTruthy()

    const board3 = [
      [0, 0, 1],
      [0, 0, 1],
      [0, 0, 1]
    ]
    expect(checkWinner(board3)).toBeTruthy()

    const board4 = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]
    expect(checkWinner(board4)).toBeFalsy()

    const board5 = [
      [1, 0, 0],
      [0, 1, 0],
      [0, 1, 0]
    ]
    expect(checkWinner(board5)).toBeFalsy()
  })

  test('diagonal winners', () => {
    const board = [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1]
    ]
    expect(checkWinner(board)).toBeTruthy()

    const board2 = [
      [0, 0, 1],
      [0, 1, 0],
      [1, 0, 0]
    ]
    expect(checkWinner(board2)).toBeTruthy()

    const board3 = [
      [1, 0, 0],
      [0, 1, 0],
      [0, 1, 0]
    ]
    expect(checkWinner(board3)).toBeFalsy()

    const board4 = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]
    expect(checkWinner(board4)).toBeFalsy()
  })
})