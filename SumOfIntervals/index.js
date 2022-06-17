/*
  KATA LINK: https://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/javascript
*/

function sumIntervals(intervals) {
  let result = 0

  const isOverlappingIntervals = (x, y) => {
    let condition = { isOverlapping: false, up: 0, down: 0, isContained: false }
    if ((y[0] < x[0] && y[1] > x[1])) {
      return { ...condition, isContained: true }
    }
    if ((x[0] < y[0] && x[1] > y[1])) {
      return { ...condition, isOverlapping: true, up: Math.max(x[1], y[1]), down: Math.min(x[0], y[0]) }
    }
    if ((x[0] > y[1]) || (y[0] > x[1])) {
      return condition
    }
    return { ...condition, isOverlapping: true, up: Math.max(x[1], y[1]), down: Math.min(x[0], y[0]) }
  }

  const reduceArray = (array) => {
    let finalArray = []
    for (var i = 0; i < array.length; i++) {

      let control = true
      for (var j = 0; j < finalArray.length; j++) {
        const overlappingCondition = isOverlappingIntervals(array[i], finalArray[j])
        if (overlappingCondition.isOverlapping || overlappingCondition.isContained) {
          control = false
          if (!overlappingCondition.isContained) {
            finalArray[j][1] = overlappingCondition.up
            finalArray[j][0] = overlappingCondition.down
          }
        }
      }
      if (control) {
        finalArray.push(array[i])
      }
    }
    return finalArray
  }

  let intermediateIntervals = reduceArray(intervals)
  let finalIntervals = reduceArray(intermediateIntervals)

  for (var i = 0; i < finalIntervals.length; i++) {
    result = result + (finalIntervals[i][1] - finalIntervals[i][0])
  }

  return result
}

//tests
console.log('*******************')
console.log('*******************')
console.log(sumIntervals([[1, 5]]), 'result: ', sumIntervals([[1, 5]]) === 4)
/*console.log('*******************')
console.log('*******************')
console.log(sumIntervals([[1, 5], [6, 10]]), 'result: ', sumIntervals([[1, 5], [6, 10]]) === 8)
console.log('*******************')
console.log('*******************')*/
//console.log(sumIntervals([[1, 5], [1, 5]]), 'result: ', sumIntervals([[1, 5], [1, 5]]) === 4)
//console.log(sumIntervals([[1, 4], [7, 10], [3, 5]]), 'result: ', sumIntervals([[1, 4], [7, 10], [3, 5]]) === 7)
//console.log(sumIntervals([[1, 5], [2, 4]]))
//console.log(sumIntervals([[1, 5], [7, 10]]))
//console.log(sumIntervals([[1, 5], [6, 10]]))
//console.log(sumIntervals([[1, 4], [7, 10], [3, 5]]))
/*console.log('*******************')
console.log('*******************')*/
console.log('//////////////////')
console.log('//////////////////')
//console.log(sumIntervals([[1, 5], [5, 10]]), 'result: ', sumIntervals([[1, 5], [5, 10]]) === 9)
//console.log(sumIntervals([[1, 4], [3, 6], [5, 8], [7, 10], [9, 12]]), 'result: ', sumIntervals([[1, 4], [3, 6], [5, 8], [7, 10], [9, 12]]) === 11)
//console.log(sumIntervals([[1, 4], [7, 10], [3, 5]]), 'result: ', sumIntervals([[1, 4], [7, 10], [3, 5]]) === 7)
//console.log(sumIntervals([[1, 20], [2, 19], [5, 15], [8, 12]]), 'result: ', sumIntervals([[1, 20], [2, 19], [5, 15], [8, 12]]) === 19)
//console.log(sumIntervals([[1, 5], [10, 20], [1, 6], [16, 19], [5, 11]]), 'result: ', sumIntervals([[1, 5], [10, 20], [1, 6], [16, 19], [5, 11]]) === 19)
//console.log(sumIntervals([[2, 3], [2, 6], [2, 4], [2, 9], [2, 5]]), 'result: ', sumIntervals([[2, 3], [2, 6], [2, 4], [2, 9], [2, 5]]) === 7)
//console.log(sumIntervals([[-12, 15], [-12, -8], [-18, 4]]), 'result: ', sumIntervals([[-12, 15], [-12, -8], [-18, 4]]) === 33)
//console.log(sumIntervals([[6, 12], [-5, 17], [-19, -6], [5, 10], [-18, -4], [-3, 4]]), 'result: ', sumIntervals([[6, 12], [-5, 17], [-19, -6], [5, 10], [-18, -4], [-3, 4]]) === 36)
console.log(sumIntervals([[-2, 3], [-10, 0], [-13, -7], [-18, 10], [15, 19], [-3, 1]]), 'result: ', sumIntervals([[-2, 3], [-10, 0], [-13, -7], [-18, 10], [15, 19], [-3, 1]]) === 32)
console.log('//////////////////')
console.log('//////////////////')