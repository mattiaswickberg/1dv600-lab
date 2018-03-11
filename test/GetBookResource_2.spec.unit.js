var expect = require('chai').expect
var GetBookResource = require('../app/resources/GetBookResource')

describe('GetBookById', function () {
  describe('Tests the function to see that it returns empty object', function () {
    it('Returns an empty object', function (done) {
      GetBookResource(616, function (data) {         
        expect(data).to.equal('{}')
      done()
    })
  })
})
})
