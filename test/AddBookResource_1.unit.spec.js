var expect = require('chai').expect
var AddBookResource = require('../app/resources/AddBookResource')

describe('Add Book', function () {
  describe('Tests the add book function to see if function validated incoming object', function () {
    // build json book to send to AddBookResource
    var book = {
      'id': '61',
      'title': '',
      'author': '',
      'genre': 'Gothic',
      'price': '10',
      'publishDate': '1794-05-08',
      'description': 'Ann Radcliffe is one of our least known and most important authors, who with this set of novels in particular was instrumental in creating the gotic literary genre as we know it.'
    }

    it('Returns a message indicating that the book not added due to missing fields', function (done) {
      var callback = function (data) {
          // Check if function returns expected error message

        expect(data).to.equal('Book not added due to title missing')
        done()
      }
      AddBookResource(book, callback)
    })
  })
})
