/*
  KATA LINK: https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript
*/

var uniqueInOrder = function (iterable) {
  const array = typeof iterable === 'string' ? iterable.split('') : iterable
  let result = []
  for (var i = 0; i < array.length - 1; i++) {
    if (array[i] !== array[i + 1]) {
      result.push(array[i])
    }
  }
  if (array.length) {
    result.push(array[array.length - 1])
  }
  return result
}

//tests
console.log(uniqueInOrder('AAAABBBCCDAABBB'))