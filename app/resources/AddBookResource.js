(function () {
  'use strict'

  var LibraryDAO = require('../dao/LibraryDAO')

  module.exports = function (data, callback) {
    console.log('Add books gets: ')
    console.log(data)
    var message = ''

    // Make sure data is valid book
    if (data.title.length === 0) {
      callback('Book not added due to title missing')
    } else {
      // fetch book list via LibraryDAO.readXMLFile
      LibraryDAO.readXMLFile(function (books) {
        // Check if id is taken
        var bookid = books.filter(book => book.id === data.id)
        if (bookid.length > 0) {
          callback('Error - ID taken')
        } else {
          books.push(data)    // Add new book to book list
          LibraryDAO.writeXMLFile(books)     // Write book list to file via LibraryDAO.writeXMLFile
          callback('Book added to database')
        }
      })


    }    
  }
}())
