var request = require('supertest')
var assert = require('assert')

var app = require('../app')

describe('AddBook API', function () {
  describe('GET /api/books', function () {
    it('respond with empty object', function (done) {
      request(app)
                .put('/api/books/')
                .set('Accept', 'application/json')
                .expect('Content-type', /json/)
                .expect(200, {}, done)
    })
  })
})
