const app = require('fastify')()
const { extractNumber, numberStatus, dayStatus } = require('./lib')

app.get('/', (req, res) => {
  res.json({
    status: 'OK'
  })
})

app.get('/api/:nopol', (req, res) => {
  const { nopol } = req.params
  const number = extractNumber(nopol)
  const text = `Your nopol is ${numberStatus(
    number
  )}. And today is ${dayStatus()} day.`
  res.code(200).send({
    status: 'OK',
    nopol,
    number,
    text
  })
})

module.exports = app
