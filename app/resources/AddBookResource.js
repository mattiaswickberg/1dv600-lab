(function () {
  'use strict'

  var LibraryDAO = require('../dao/LibraryDAO')

  module.exports = function (data, callback) {
    // Make sure data is valid book
    if (typeof data.title !== 'string') {
      callback('Book not added due to title missing')
    } else {
      if (data.title.length > 0) {
        // fetch book list via LibraryDAO.readXMLFile
        LibraryDAO.readXMLFile(function (books) {
        // Check if id is taken
          var bookid = books.filter(book => book.id === data.id)
          if (bookid.length > 0) {
            callback('Error - ID taken')
          } else {
            data.id = newID(books).toString() // give the new book a unique id
            books.push(data)    // Add new book to book list
            LibraryDAO.writeXMLFile(books)     // Write book list to file via LibraryDAO.writeXMLFile
            callback('Book added to database')
          }
        })
      } else {
        callback('Book not added due to title missing')
      }
    }
  }
}())

// Check book list which id is higher, and return that id + 1
var newID = function (books) {
  var id = 0
  books.forEach(element => {
    if (parseInt(element.id) > id) {
      id = parseInt(element.id)
    }
  })
  return id + 1
}
