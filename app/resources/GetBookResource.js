(function () {
  'use strict'

  var LibraryDAO = require('../dao/LibraryDAO')

  module.exports = function (id, callback) {
    LibraryDAO.readXMLFile(function (data) {
      var book
      data.forEach(element => {
        if (element.id === id.toString()) {
          book = element
        }
      })
      if (book !== undefined) {
        callback(book)
      } else {
        callback('{}')
      }
    })
  }
}())
