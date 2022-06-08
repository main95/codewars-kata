/*
  KATA LINK: https://www.codewars.com/kata/523a86aa4230ebb5420001e1/train/javascript
*/

function anagrams(word, words) {
  const wordArray = word.split('')
  const wordDictionary = {}
  let result = []
  wordArray.forEach((c) => {
    wordDictionary[c] = word.split(c).length - 1
  })
  words.forEach((w) => {
    wArray = w.split('')
    var control = true
    wArray.forEach((c) => {
      if (!wordDictionary[c] || w.split(c).length - 1 !== wordDictionary[c]) {
        control = false
      }
    })
    if (control) {
      result.push(w)
    }
  })
  return result
}

//tests
console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))