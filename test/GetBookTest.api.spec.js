var request = require('supertest')
var assert = require('assert')

var app = require('../app')

describe('GetBook API', function () {
  describe('GET /api/books', function () {
    it('respond with json with correct id', function (done) {
      request(app)
                .get('/api/books/5')
                .set('Accept', 'application/json')
                .expect('Content-type', /json/)
                .expect(function (res) { assert.equal(res.body.id, '5') })
                .expect(200, done)
    })
  })
})
