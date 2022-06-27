/*
  KATA LINK: https://www.codewars.com/kata/534e01fbbb17187c7e0000c6/train/javascript
*/

function spiralize(n) {
  let result = []
  for (var i = 0; i < n; i++) {
    let a = []
    for (var j = 0; j < n; j++) {
      a.push(0)
    }
    result.push(a)
  }
  let direction = 'right'
  let minRow = 0, maxRow = n, minCol = 0, maxCol = n
  for (var count = 0; count < n; count++) {
    if (direction === 'right' && count === 0) {
      for (var i = minCol; i < maxCol; i++) {
        result[minRow][i] = 1
      }
      direction = 'down'
      minRow = minRow + 2
    } else if (direction === 'right' && count !== 0) {
      for (var i = minCol - 1; i < maxCol; i++) {
        result[minRow][i] = 1
      }
      direction = 'down'
      minRow = minRow + 2
    } else if (direction === 'left') {
      for (var i = maxCol; i > minCol - 1; i--) {
        result[maxRow - 1][i] = 1
      }
      direction = 'up'
      maxRow = maxRow - 2
    } else if (direction === 'up') {
      for (var i = maxRow; i > minRow - 1; i--) {
        result[i][minCol] = 1
      }
      direction = 'right'
      minCol = minCol + 2
    } else if (direction === 'down') {
      for (var i = minRow - 1; i < maxRow; i++) {
        result[i][maxCol - 1] = 1
      }
      direction = 'left'
      maxCol = maxCol - 2
    }
  }
  return result
}

//tests
console.log(spiralize(5), [
  [1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1],
  [1, 1, 1, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1]]
)
/*console.log(spiralize(8), [
  [1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1]
])*/