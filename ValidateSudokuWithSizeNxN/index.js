/*
  KATA LINK: https://www.codewars.com/kata/540afbe2dc9f615d5e000425/train/javascript
*/

var Sudoku = function (data) {
  const isValidRow = (array, validSolution) => {
    const sortedArray = array.sort((a, b) => a - b)
    return JSON.stringify(sortedArray) === JSON.stringify(validSolution)
  }

  const getValidSolution = (size) => {
    let a = []
    for (var i = 0; i < size; i++) {
      a.push(i + 1)
    }
    return a
  }

  return {
    isValid: function () {
      let result = true
      let size = data.length
      const sqrtSize = Math.sqrt(size)
      let validSolution = getValidSolution(size)

      // row control
      const normalData = JSON.parse(JSON.stringify(data))
      for (var i = 0; i < size; i++) {
        result = result && isValidRow(normalData[i], validSolution)
      }

      // column control
      const transposeData = data[0].map((col, i) => data.map(row => row[i]))
      for (var i = 0; i < size; i++) {
        result = result && isValidRow(transposeData[i], validSolution)
      }

      // NxN boxes control
      let boxesRowData = []
      for (var h = 0; h < sqrtSize; h++) {
        for (var k = 0; k < sqrtSize; k++) {
          let a = []
          for (var i = 0; i < size; i++) {
            for (var j = 0; j < size; j++) {
              if (i < (h * sqrtSize) + sqrtSize && i > (h * sqrtSize) - 1 && j < (k * sqrtSize) + sqrtSize && j > (k * sqrtSize) - 1) {
                a.push(data[i][j])
              }
            }
          }
          boxesRowData.push(a)
        }
      }
      for (var i = 0; i < size; i++) {
        result = result && isValidRow(boxesRowData[i], validSolution)
      }

      return result
    }
  }
}

//tests
var goodSudoku1 = new Sudoku([
  [7, 8, 4, 1, 5, 9, 3, 2, 6],
  [5, 3, 9, 6, 7, 2, 8, 4, 1],
  [6, 1, 2, 4, 3, 8, 7, 5, 9],
  [9, 2, 8, 7, 1, 5, 4, 6, 3],
  [3, 5, 7, 8, 4, 6, 1, 9, 2],
  [4, 6, 1, 9, 2, 3, 5, 8, 7],
  [8, 7, 6, 3, 9, 4, 2, 1, 5],
  [2, 4, 3, 5, 6, 1, 9, 7, 8],
  [1, 9, 5, 2, 8, 7, 6, 3, 4]
])

var goodSudoku2 = new Sudoku([
  [1, 4, 2, 3],
  [3, 2, 4, 1],
  [4, 1, 3, 2],
  [2, 3, 1, 4]
])

var badSudoku1 = new Sudoku([
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9]
])

var badSudoku3 = new Sudoku([
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [2, 3, 1, 5, 6, 4, 8, 9, 7],
  [3, 1, 2, 6, 4, 5, 9, 7, 8],
  [4, 5, 6, 7, 8, 9, 1, 2, 3],
  [5, 6, 4, 8, 9, 7, 2, 3, 1],
  [6, 4, 5, 9, 7, 8, 3, 1, 2],
  [7, 8, 9, 1, 2, 3, 4, 5, 6],
  [8, 9, 7, 2, 3, 1, 5, 6, 4],
  [9, 7, 8, 3, 1, 2, 6, 4, 5]
])

var badSudoku2 = new Sudoku([
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1]
])


//console.log(goodSudoku1.isValid())
console.log(goodSudoku2.isValid())

//console.log(badSudoku1.isValid())
//console.log(badSudoku2.isValid())
//console.log(badSudoku3.isValid())

/*console.log(validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2],
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
[3, 0, 0, 4, 8, 1, 1, 7, 9]]))*/