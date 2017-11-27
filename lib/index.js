const extractNumber = nopol => {
  const splitNumber = nopol.split(' ')

  return splitNumber[1]
}

const isEven = num => {
  return num % 2 === 0
}

const isOdd = num => {
  return num % 2 !== 0
}

const numberStatus = num => {
  if (isEven(num)) return 'EVEN'
  else return 'ODD'
}

const dayStatus = (today = new Date()) => {
  if (isEven(today.getDay())) return 'EVEN'
  else return 'ODD'
}

module.exports = {
  extractNumber,
  isEven,
  isOdd,
  numberStatus,
  dayStatus
}
