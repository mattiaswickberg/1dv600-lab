var request = require('supertest')
var assert = require('assert')

var app = require('../app')

describe('EditBook API', function () {
  describe('GET /api/books', function () {
    it('respond with empty object', function (done) {
      request(app)
                .post('/api/books/5')
                .set('Accept', 'application/json')
                .expect('Content-type', /json/)
                .expect(200, {}, done)
    })
  })
})
