(function () {
  'use strict'

  var LibraryDAO = require('../dao/LibraryDAO')

  module.exports = function (id, data, callback) {
/*     console.log('Edit book gets:')
    console.log('id: ' + id)
    console.log('data: ')
    console.log(data) */

    LibraryDAO.readXMLFile(function (books) {
      var bookFound
      books.forEach(element => {
        if (element.id === id.toString()) {
          bookFound = element
          if (typeof data.title !== 'string') {
          } else if (data.title.length < 1) {
          } else {
            element.author = data.author
            element.title = data.title
            element.genre = data.genre
            element.price = data.price
            element.publish_date = data.publish_date
            element.description = data.description
          }
        }
      })
      if (bookFound === undefined) {
        console.log('Book not found')
        callback('Book not found')
      } else {
        LibraryDAO.writeXMLFile(books)
        callback(bookFound)
      }
    })
  }
}())
