/*
  KATA LINK: https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
*/

function findOdd(array) {
  for (var i = 0; i < array.length; i++) {
    const result = array.filter(n => n === array[i]).length
    if (result % 2 === 1) {
      return array[i]
    }
  }
}

//tests
console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]))