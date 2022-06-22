/*
  KATA LINK: https://www.codewars.com/kata/55c6126177c9441a570000cc/train/javascript
*/

function orderWeight(string) {
  stringWeight = (s) => {
    let count = 0
    s.split('').map(c => count = count + parseInt(c))
    return count
  }

  return string.split(' ').sort((a, b) => {
    return stringWeight(a) === stringWeight(b) ? a.localeCompare(b) : stringWeight(a) - stringWeight(b)
  }).join(' ')
}

//tests
console.log(orderWeight("103 123 4444 99 2000"),
  JSON.stringify(orderWeight("103 123 4444 99 2000")) === JSON.stringify("2000 103 123 4444 99"))
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"),
  JSON.stringify(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123")) === JSON.stringify("11 11 2000 10003 22 123 1234000 44444444 9999"))