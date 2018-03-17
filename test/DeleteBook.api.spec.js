var request = require('supertest')

var app = require('../app')

describe('DeleteBook API', function () {
  describe('GET /api/books', function () {
    it('respond with empty object', function (done) {
      request(app)
                .delete('/api/books/55')
                .set('Accept', 'application/json')
                .expect('Content-type', /json/)
                .expect(200, {}, done)
    })
  })
})
