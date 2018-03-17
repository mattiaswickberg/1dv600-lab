var request = require('supertest')

var app = require('../app')

describe('GetBooks API', function () {
  describe('GET /api/books', function () {
    it('respond with json', function (done) {
      request(app)
                .get('/api/books')
                .set('Accept', 'application/json')
                .expect('Content-type', /json/)
                .expect(200, done)
    })
  })
})
