var expect = require('chai').expect
var GetBooksResource = require('../app/resources/GetBooksResource')

describe('Get Books', function () {
  describe('Tests the get books function to see if it returns an array', function () {
    it('Returns an array', function (done) {
      GetBooksResource(function (data) {
        expect(data instanceof Array).to.equal(true)
        done()
      })
    })
  })
})
