const { extractNumber } = require('.')

test('extract nopol', () => {
  expect(extractNumber('B 123 CDE')).toEqual(123)
})
