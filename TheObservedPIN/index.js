/*
  KATA LINK: https://www.codewars.com/kata/5263c6999e0f40dee200059d/train/javascript
*/



function getPINs(observed) {
  const mapDigit = (d) => {
    if (d === '1') {
      return ['1', '2', '4']
    } else if (d === '2') {
      return ['2', '1', '3', '5']
    } else if (d === '3') {
      return ['3', '2', '6']
    } else if (d === '4') {
      return ['4', '1', '5', '7']
    } else if (d === '5') {
      return ['5', '2', '4', '6', '8']
    } else if (d === '6') {
      return ['6', '3', '5', '9']
    } else if (d === '7') {
      return ['7', '4', '8']
    } else if (d === '8') {
      return ['8', '5', '7', '9', '0']
    } else if (d === '9') {
      return ['9', '6', '8']
    } else if (d === '0') {
      return ['0', '8']
    }
  }

  let result = []
  if (observed.length === 1) {
    return mapDigit(observed)
  }
  observed.split('').map(d => {
    result.push(mapDigit(d))
  })
  let pins = result.reduce((a, b) => a.reduce((r, v) => r.concat(b.map(w => [].concat(v, w))), []))
  return pins.map(p => p.join(''))
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
console.log(
  getPINs("369").sort(),
  ["339", "366", "399", "658", "636", "258", "268", "669", "668", "266", "369", "398", "256", "296", "259", "368", "638", "396", "238", "356", "659", "639", "666", "359", "336", "299", "338", "696", "269", "358", "656", "698", "699", "298", "236", "239"].sort(),
  JSON.stringify(getPINs("369").sort()) === JSON.stringify(["339", "366", "399", "658", "636", "258", "268", "669", "668", "266", "369", "398", "256", "296", "259", "368", "638", "396", "238", "356", "659", "639", "666", "359", "336", "299", "338", "696", "269", "358", "656", "698", "699", "298", "236", "239"])
)