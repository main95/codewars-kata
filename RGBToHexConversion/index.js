/*
  KATA LINK: https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript
*/

function rgb(r, g, b) {
  const colorHex = (n) => {
    nNorm = n < 0 ? '00' : (n > 255 ? 'FF' : n.toString(16).toUpperCase())
    if (nNorm.length === 1) {
      nNorm = '0' + nNorm
    }
    return nNorm
  }
  return colorHex(r) + colorHex(g) + colorHex(b)
}

//tests
console.log(rgb(166, 1, 31))
