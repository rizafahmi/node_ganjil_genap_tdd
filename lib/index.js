const extractNumber = nopol => {
  const splitNumber = nopol.split(' ')

  return parseInt(splitNumber[1])
}

const isEven = num => {
  return num % 2 === 0
}

const isOdd = num => {
  return num % 2 !== 0
}

module.exports = {
  extractNumber,
  isEven,
  isOdd
}
