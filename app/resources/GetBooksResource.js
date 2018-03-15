
(function (getBooks) {
  'use strict'

  var LibraryDAO = require('../dao/LibraryDAO')

  module.exports = function (callback, title) { // The title is optional and is only present when searching. (You need to modify the books.js file first)
         // (console.log(title))
        // Fetch book list
    LibraryDAO.readXMLFile(function (books) {
      // Make array for books matching search term
      if(title !== undefined) {
        var matchingBooks = []
      books.forEach(element => {
        if (element.title === title || element.author === title) {
          matchingBooks.push(element)
        }
      })
      callback(matchingBooks)
      } else {callback(books)} // send books with callback function
    })
  }
}())
