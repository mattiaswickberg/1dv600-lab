
(function (getBooks) {
  'use strict'

  var LibraryDAO = require('../dao/LibraryDAO')

  module.exports = function (callback, title) { // The title is optional and is only present when searching. (You need to modify the books.js file first)
        // (console.log(books))
    LibraryDAO.readXMLFile(callback)
        // send books with callback function
        // callback(books)
  }
}())
