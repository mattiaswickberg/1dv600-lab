(function () {
  'use strict'
// Load library
  var LibraryDAO = require('../dao/LibraryDAO')

  module.exports = function (id, callback) {
    if (id !== undefined) {
          var newBooks // initialize variable to save all books that is not the one with incoming id
    LibraryDAO.readXMLFile(function (data) {
      newBooks = data.filter(book => book.id !== id) // Filter books array to remove book with id
            // console.log(newBooks)
      LibraryDAO.writeXMLFile(newBooks) // Write new books list to file
    })
    callback()
    }
  }
}())
