/*
  KATA LINK: https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript
*/

function moveZeros(arr) {
  let result = [], count = 0
  arr.forEach((element) => {
    if (element === 0) {
      count = count + 1
    } else {
      result.push(element)
    }
  })
  for (var i = 0; i < count; i++) {
    result.push(0)
  }
  return result
}

//tests
console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]))