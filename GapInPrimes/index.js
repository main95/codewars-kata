/*
  KATA LINK: https://www.codewars.com/kata/561e9c843a2ef5a40c0000a4/train/javascript
*/

function gap(g, m, n) {
  let result = []

  const isPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
      if (num % i === 0) return false;
    return num > 1;
  }

  for (var i = m; i < n; i++) {
    if (isPrime(i)) {
      if (result.length === 0) {
        result.push(i)
      } else {
        if (i - result[0] === g) {
          result.push(i)
          break
        } else {
          result[0] = i
        }
      }
    }
  }

  return result.length === 2 && result[1] - result[0] === g ? result : null
}

//tests
//console.log(gap(2, 100, 110), JSON.stringify(gap(2, 100, 110)) === JSON.stringify([101, 103]))
//console.log(gap(4, 100, 110), JSON.stringify(gap(4, 100, 110)) === JSON.stringify([103, 107]))
//console.log(gap(6, 100, 110), gap(6, 100, 110) === null)
console.log(gap(8, 300, 400), JSON.stringify(gap(8, 300, 400)) === JSON.stringify([359, 367]))
//console.log(gap(10, 300, 400), JSON.stringify(gap(10, 300, 400)) === JSON.stringify([337, 347]))