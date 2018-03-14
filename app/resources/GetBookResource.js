(function () {
  'use strict'

  var LibraryDAO = require('../dao/LibraryDAO')

  module.exports = function (id, callback) {
    // console.log('Get book gets: ' + id)
    LibraryDAO.readXMLFile(function (data) {
      var book
      data.forEach(element => {
        if (element.id === id.toString()) {
          book = element
        }
      })
      /* console.log('Book identified is: ')
      console.log(book) */
      if (book !== undefined) {
        callback(book)
      } else {
        callback('{}')
      }
    })
  }
}())
