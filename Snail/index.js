/*
  KATA LINK: https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript
*/

snail = function (array) {
  if (array.length === 0 || array[0].length === 0) {
    return []
  }
  let result = []
  let size = array.length
  let sizeResult = array.length * array.length
  let direction = 'right'
  let minRow = 0, maxRow = size, minCol = 0, maxCol = size
  for (; result.length < sizeResult;) {
    if (direction === 'right') {
      for (var i = minCol; i < maxCol; i++) {
        result.push(array[minRow][i])
      }
      direction = 'down'
      minRow = minRow + 1
    } else if (direction === 'left') {
      for (var i = maxCol - 1; i > minCol - 1; i--) {
        result.push(array[maxRow - 1][i])
      }
      direction = 'up'
      maxRow = maxRow - 1
    } else if (direction === 'up') {
      for (var i = maxRow - 1; i > minRow - 1; i--) {
        result.push(array[i][minCol])
      }
      direction = 'right'
      minCol = minCol + 1
    } else if (direction === 'down') {
      for (var i = minRow; i < maxRow; i++) {
        result.push(array[i][maxCol - 1])
      }
      direction = 'left'
      maxCol = maxCol - 1
    }
  }
  return result
}

//tests
//console.log(snail([[]]), [])
//console.log(snail([[1]]), [1])
console.log(snail([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]),
  '\n**********************\n',
  JSON.stringify(snail([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])) === JSON.stringify([1, 2, 3, 6, 9, 8, 7, 4, 5]))
console.log(snail([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
]), JSON.stringify(snail([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
])) === JSON.stringify([1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]))
//console.log(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);