(function () {
  'use strict'

  var LibraryDAO = require('../dao/LibraryDAO')

  module.exports = function (id, data, callback) {

    LibraryDAO.readXMLFile(function (books) {
      // initialize variable to signal if book was found or not
      var bookFound
      // Go through array and check for book with matching id
      books.forEach(element => {
        if (element.id === id.toString()) {
          bookFound = element // save book to variable for later return
          if (typeof data.title !== 'string') { // check if incoming data has title
          } else if (data.title.length < 1) {
          } else { //  If title exists, update fields with incoming info
            element.author = data.author
            element.title = data.title
            element.genre = data.genre
            element.price = data.price
            element.publish_date = data.publish_date
            element.description = data.description
          }
        }
      })
      if (bookFound === undefined) { // if no book was found, return message
        console.log('Book not found')
        callback('Book not found')
      } else {
        LibraryDAO.writeXMLFile(books) // Write changed book list to file
        callback(bookFound) // return updated book
      }
    })
  }
}())
