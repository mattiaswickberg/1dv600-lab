var expect = require('chai').expect
var GetBooksResource = require('../app/resources/AddBookResource')

describe('Add Book', function () {
  describe('Tests the add book function to see a book with correct ID exists', function () {
    var book = {}
    // build json book to send to AddBookResource

    it('Returns only objects with an ID', function (done) {
      var callback = function (data) {
          // Check if book with correct id is in book list
       

        expect(obj).to.equal(true)
        done()
      }
      GetBooksResource(book, callback)
    })
  })
})