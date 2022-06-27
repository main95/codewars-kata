/*
  KATA LINK: https://www.codewars.com/kata/5324945e2ece5e1f32000370/train/javascript
*/

function sumStrings(a, b) {
  return ((a === '' ? BigInt(0) : BigInt(a)) + (b === '' ? BigInt(0) : BigInt(b))).toString()
}

//tests
/*var expectations = {
  "8": ["5", "7", "8", "9", "0"],
  "11": ["11", "22", "44", "12", "21", "14", "41", "24", "42"],
  "369": ["339", "366", "399", "658", "636", "258", "268", "669", "668", "266", "369", "398", "256", "296", "259", "368", "638", "396", "238", "356", "659", "639", "666", "359", "336", "299", "338", "696", "269", "358", "656", "698", "699", "298", "236", "239"]
}

for (var pin in expectations) {
  getPINs(pin).sort(), expectations[pin].sort(), 'PIN: ' + pin
}*/

//console.log(getPINs("8").sort())
console.log(sumStrings('123', '456'), sumStrings('123', '456') === '579')