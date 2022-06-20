/*
  KATA LINK: https://www.codewars.com/kata/5550d638a99ddb113e0000a2/train/javascript
*/

function josephus(items, k) {
  const result = []
  let array = JSON.parse(JSON.stringify(items))
  for (var h = 0; result.length < items.length; h++) {
    for (var i = 1; i < array.length + 1; i++) {
      if (i % k === 0) {
        result.push(array[i - 1 + h])
      } else {
        array.push(array[i - 1 + h])
      }
    }
  }
  return result
}

//tests
console.log(josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1),
  JSON.stringify(josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1)) === JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2),
  JSON.stringify(josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)) === JSON.stringify(([2, 4, 6, 8, 10, 3, 7, 1, 9, 5])))