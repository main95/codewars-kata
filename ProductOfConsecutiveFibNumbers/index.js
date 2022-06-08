/*
  KATA LINK: https://www.codewars.com/kata/5541f58a944b85ce6d00006a/train/javascript
*/

function productFib(prod) {
  FIB_LENGTH = 40
  let result = []
  const fibNumbers = () => {
    let n1 = 0, n2 = 1, numbers = [n1, n2]
    for (var i = 0; i <= FIB_LENGTH; i++) {
      const nextNum = n1 + n2
      numbers.push(nextNum)
      n1 = n2
      n2 = nextNum
    }
    return numbers
  }
  fibNums = fibNumbers()
  for (var i = 0; i < FIB_LENGTH - 1; i++) {
    if (fibNums[i] * fibNums[i + 1] === prod) {
      result = [fibNums[i], fibNums[i + 1], true]
      break
    }
    else if (fibNums[i] * fibNums[i + 1] < prod) {
      result = [fibNums[i + 1], fibNums[i + 2], false]
    }
  }
  return result
}

//tests
console.log(productFib(4895))
console.log(productFib(5895))