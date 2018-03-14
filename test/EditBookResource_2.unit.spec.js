var expect = require('chai').expect
var EditBookResource = require('../app/resources/EditBookResource')

describe('Edit Book', function () {
  describe('Tests the Edit book function with bad input data', function () {
    it('Returns book unchanged', function (done) {
      var id = '12'
      var book = {
        'title': undefined,
        'author': 'Ann Radcliffe',
        'genre': 'Gothic',
        'price': '10',
        'publishDate': '1794-05-08',
        'description': 'Ann Radcliffe is one of our least known and most important authors, who with this set of novels in particular was instrumental in creating the gotic literary genre as we know it.'
      }
      var callback = function (data) {
        expect(data.title).to.equal('The Mysteries of Udolpho')
        done()
      }
      EditBookResource(id, book, callback)
    })
  })
})
