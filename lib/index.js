const extractNumber = nopol => {
  const splitNumber = nopol.split(' ')

  return parseInt(splitNumber[1])
}

module.exports = {
  extractNumber
}
