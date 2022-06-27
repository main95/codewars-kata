/*
  KATA LINK: https://www.codewars.com/kata/534e01fbbb17187c7e0000c6/train/javascript
*/

function isInteresting(number, awesomePhrases) {
  const control = (n, numbers, value) => {
    if (n < 100) {
      return 0
    }
    let m = n
    if (n.toString().split('').filter(d => d === m.toString().split('')[0]).length === m.toString().split('').length) {
      return value
    }
    if (JSON.stringify(n.toString().split('').map(e => e === '0' ? 10 : parseInt(e)).sort((a, b) => a - b)) === JSON.stringify(m.toString().split('').map(e => e === '0' ? 10 : parseInt(e)))) {
      let count = 0
      let tmp = n.toString().split('').map(e => e === '0' ? 10 : parseInt(e)).sort((a, b) => a - b)
      for (var i = 0; i < tmp.length - 1; i++) {
        count = count + (tmp[i + 1] - tmp[i])
      }
      if (count === tmp.length - 1 && tmp.length === [...new Set(tmp)].length) {
        return value
      }
    }
    if (JSON.stringify(n.toString().split('').sort((a, b) => b - a)) === JSON.stringify(m.toString().split(''))) {
      let count = 0
      let tmp = n.toString().split('').map(e => parseInt(e)).sort((a, b) => b - a)
      for (var i = 1; i < tmp.length; i++) {
        count = count + (tmp[i - 1] - tmp[i])
      }
      if (count === tmp.length - 1 && tmp.length === [...new Set(tmp)].length) {
        return value
      }
    }
    if (n.toString().toLowerCase().replace(/[\W_]/g, '') === m.toString().toLowerCase().replace(/[\W_]/g, '').split('').reverse().join('')) {
      return value
    }
    if (numbers.filter(num => n === num).length > 0) {
      return value
    }
    if (n.toString().split('').filter(d => d === '0').length === m.toString().split('').length - 1) {
      return value
    }
    return 0
  }

  let result = 0
  result = control(number, awesomePhrases, 2)
  if (result === 0) {
    result = control(number + 1, awesomePhrases, 1)
  }
  if (result === 0) {
    result = control(number + 2, awesomePhrases, 1)
  }

  return result
}

//tests
//console.log(isInteresting(3, [1337, 256]), 0)
//console.log(isInteresting(1336, [1337, 256]), 1)
//console.log(isInteresting(1337, [1337, 256]), 2)
//console.log(isInteresting(11208, [1337, 256]), 0)
//console.log(isInteresting(11209, [1337, 256]), 1)
//console.log(isInteresting(11211, [1337, 256]), 2)
//console.log(isInteresting(100, [1337, 256]), 2)
//console.log(isInteresting(10000, [1337, 256]), 2)
//console.log(isInteresting(11111, [1337, 256]), 2)
//console.log(isInteresting(123456, [1337, 256]), 2)
//console.log(isInteresting(654321, [1337, 256]), 2)
//console.log(isInteresting(654321, [1337, 256]), 2)
/*console.log(isInteresting(3, [1337, 256]), 0)
console.log(isInteresting(11208, [1337, 256]), 0)
console.log(isInteresting(1336, [1337, 256]), 1)
console.log(isInteresting(11209, [1337, 256]), 1)*/
//console.log(isInteresting(123, [1337, 256]), 2)
//console.log(isInteresting(3210, [1337, 256]), 2)
//console.log(isInteresting(67890, [1337, 256]), 2)
console.log(isInteresting(3210, [1337, 256]), 2)