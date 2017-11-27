const request = require('supertest')
const app = require('./app')

test('`/api/B 123 CDE` to return status 200', async done => {
  try {
    const response = await request(app).get('/api/B 123 CDE')
    expect(response.statusCode).toEqual(200)
    done()
  } catch (err) {
    console.log(err)
  }
})

test('`/api/B 234 TFX` to have some properties', async () => {
  try {
    const { body } = await request(app).get('/api/B 234 TFX')
    expect(body.status).toEqual('OK')
    expect(body.nopol).toEqual('B 234 TFX')
    expect(body.number).toEqual(234)
    expect(body.text).toEqual(`Your nopol is EVEN. And today is ODD day.`)
  } catch (err) {
    console.log(err)
  }
})

test('`/api/B 237 TFX` to have some properties', async () => {
  try {
    const { body } = await request(app).get('/api/B 237 TFX')
    expect(body.status).toEqual('OK')
    expect(body.nopol).toEqual('B 237 TFX')
    expect(body.number).toEqual(237)
    expect(body.text).toEqual(`Your nopol is ODD. And today is ODD day.`)
  } catch (err) {
    console.log(err)
  }
})
