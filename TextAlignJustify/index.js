/*
  KATA LINK: https://www.codewars.com/kata/537e18b6147aa838f600001b/train/javascript
*/

function justify(text, width) {
  const addSpaces = (row) => {
    let result = []
    let currentWidth = 0
    if (row.length === 1) {
      return row
    }
    for (var i = 0; i < row.length; i++) {
      currentWidth = currentWidth + row[i].length
    }
    while (true) {
      if (currentWidth > width) {
        return result
      } else {
        for (var i = 0; i < row.length - 1; i++) {
          currentWidth = currentWidth + 1
          if (currentWidth > width) {
            return result
          }
          row[i] = row[i] + ' '
        }
      }
    }
  }

  const textArray = text.split(' ')
  const justifyTextArray = []
  let a = []
  let count = 0
  for (var i = 0; i < textArray.length; i++) {
    if (count + textArray[i].length + a.length > width) {
      justifyTextArray.push(a)
      a = []
      count = 0
    }
    a.push(textArray[i])
    count = count + textArray[i].length
  }
  if (a.length > 0) {
    justifyTextArray.push(a)
  }
  for (var i = 0; i < justifyTextArray.length - 1; i++) {
    addSpaces(justifyTextArray[i])
  }
  for (var i = 0; i < justifyTextArray.length; i++) {
    if (i === justifyTextArray.length - 1) {
      justifyTextArray[i] = justifyTextArray[i].join(' ')
    } else {
      justifyTextArray[i] = justifyTextArray[i].join('')
    }
  }
  return justifyTextArray.join('\n')
}

//tests
console.log(justify('123 45 6', 7)/*, justify('123 45 6', 7) === '123  45\n6'*/)
//console.log(justify('123', 7), justify('123', 7) === '123')
//console.log(justify('', 10), justify('', 10) === '')

const LIPSUM = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.`

const LIPSUM_SOLUTION = `Lorem  ipsum  dolor  sit amet,
consectetur  adipiscing  elit.
Vestibulum    sagittis   dolor
mauris,  at  elementum  ligula
tempor  eget.  In quis rhoncus
nunc,  at  aliquet orci. Fusce
at   dolor   sit   amet  felis
suscipit   tristique.   Nam  a
imperdiet   tellus.  Nulla  eu
vestibulum    urna.    Vivamus
tincidunt  suscipit  enim, nec
ultrices   nisi  volutpat  ac.
Maecenas   sit   amet  lacinia
arcu,  non dictum justo. Donec
sed  quam  vel  risus faucibus
euismod.  Suspendisse  rhoncus
rhoncus  felis  at  fermentum.
Donec lorem magna, ultricies a
nunc    sit    amet,   blandit
fringilla  nunc. In vestibulum
velit    ac    felis   rhoncus
pellentesque. Mauris at tellus
enim.  Aliquam eleifend tempus
dapibus. Pellentesque commodo,
nisi    sit   amet   hendrerit
fringilla,   ante  odio  porta
lacus,   ut   elementum  justo
nulla et dolor.`

console.log(justify(LIPSUM, 30), '\n\n*****************\n\n', LIPSUM_SOLUTION, justify(LIPSUM, 30) === LIPSUM_SOLUTION)