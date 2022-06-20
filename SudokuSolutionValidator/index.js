/*
  KATA LINK: https://www.codewars.com/kata/529bf0e9bdf7657179000008/train/javascript
*/

function validSolution(board) {
  let result = true

  const isValid = (array) => {
    const validSort = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const sortedArray = array.sort((a, b) => a - b)
    return JSON.stringify(sortedArray) === JSON.stringify(validSort)
  }

  // row control
  const normalBoard = JSON.parse(JSON.stringify(board))
  for (var i = 0; i < normalBoard.length; i++) {
    result = result && isValid(normalBoard[i])
  }

  // column control
  const transposeBoard = board[0].map((col, i) => board.map(row => row[i]))
  for (var i = 0; i < transposeBoard.length; i++) {
    result = result && isValid(transposeBoard[i])
  }

  // 3x3 boxes control
  let boxesRowBoard = []
  for (var h = 0; h < 3; h++) {
    for (var k = 0; k < 3; k++) {
      let a = []
      for (var i = 0; i < normalBoard.length; i++) {
        for (var j = 0; j < normalBoard.length; j++) {
          if (i < (h * 3) + 3 && i > (h * 3) - 1 && j < (k * 3) + 3 && j > (k * 3) - 1) {
            a.push(board[i][j])
          }
        }
      }
      boxesRowBoard.push(a)
    }
  }

  for (var i = 0; i < boxesRowBoard.length; i++) {
    result = result && isValid(boxesRowBoard[i])
  }

  return result
}

//tests
console.log(validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2],
[6, 7, 2, 1, 9, 5, 3, 4, 8],
[1, 9, 8, 3, 4, 2, 5, 6, 7],
[8, 5, 9, 7, 6, 1, 4, 2, 3],
[4, 2, 6, 8, 5, 3, 7, 9, 1],
[7, 1, 3, 9, 2, 4, 8, 5, 6],
[9, 6, 1, 5, 3, 7, 2, 8, 4],
[2, 8, 7, 4, 1, 9, 6, 3, 5],
[3, 4, 5, 2, 8, 6, 1, 7, 9]]))
console.log(validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2],
[6, 7, 2, 1, 9, 0, 3, 4, 8],
[1, 0, 0, 3, 4, 2, 5, 6, 0],
[8, 5, 9, 7, 6, 1, 0, 2, 0],
[4, 2, 6, 8, 5, 3, 7, 9, 1],
[7, 1, 3, 9, 2, 4, 8, 5, 6],
[9, 0, 1, 5, 3, 7, 2, 1, 4],
[2, 8, 7, 4, 1, 9, 6, 3, 5],
[3, 0, 0, 4, 8, 1, 1, 7, 9]]))