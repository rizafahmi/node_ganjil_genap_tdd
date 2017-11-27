const { extractNumber, isEven, isOdd, numberStatus, dayStatus } = require('.')

test('extract nopol', () => {
  expect(extractNumber('B 123 CDE')).toEqual(123)
})

test('27 is odd number', () => {
  expect(isEven(27)).toBeFalsy()
  expect(isOdd(27)).toBeTruthy()
})

test('28 is even number', () => {
  expect(isEven(28)).toBeTruthy()
  expect(isOdd(28)).toBeFalsy()
})

test('check todays date is odd or even', () => {
  const today = new Date('2017-11-28')
  expect(isEven(today.getDay())).toBeTruthy()
})

test('numberStatus', () => {
  expect(numberStatus(234)).toEqual('EVEN')
  expect(numberStatus(235)).toEqual('ODD')
})

test('dayStatus', () => {
  const today = new Date('2017-11-28')
  expect(dayStatus(today)).toEqual('EVEN')
  const yesterday = new Date('2017-11-27')
  expect(dayStatus(yesterday)).toEqual('ODD')
})
