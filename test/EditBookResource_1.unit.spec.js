var expect = require('chai').expect
var EditBookResource = require('../app/resources/EditBookResource')

describe('Edit Book', function () {
  describe('Tests the Edit book function for non-existing id', function () {
    it('Returns message that book was not found', function (done) {
      var id = '61'
      var book = {
        'title': 'The Mysteries of Udolpho',
        'author': 'Ann Radcliffe',
        'genre': 'Gothic',
        'price': '10',
        'publishDate': '1794-05-08',
        'description': 'Ann Radcliffe is one of our least known and most important authors, who with this set of novels in particular was instrumental in creating the gotic literary genre as we know it.'
      }
      var callback = function (data) {
        expect(data).to.equal('Book not found')
        done()
      }
      EditBookResource(id, book, callback)
    })
  })
})
