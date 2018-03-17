
(function (getBooks) {
  'use strict'

  var LibraryDAO = require('../dao/LibraryDAO')

  module.exports = function (callback, title) { // The title is optional and is only present when searching. (You need to modify the books.js file first)
         // (console.log(title))
        // Fetch book list
    LibraryDAO.readXMLFile(function (books) {
      // Make array for books matching search term
      if (title !== undefined) {
        var matchingBooks = []
        books.forEach(element => { // check each book in array if search term matches either title or author
          if (element.title === title || element.author === title) {
            matchingBooks.push(element) // if so, save in matchingBooks array
          }
        })
        callback(matchingBooks) // Send array back with matching books, if any, otherwise empty array
      } else { callback(books) } // send books with callback function if no search term was provided
    })
  }
}())
