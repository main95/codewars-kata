function count(string) {
  if (string.length === 0) {
    return {}
  }
  let result = {}
  string.split('').map((c) => {
    result[c] = string.split(c).length - 1
  })
  return result
}

//tests
console.log(count('ciao'))