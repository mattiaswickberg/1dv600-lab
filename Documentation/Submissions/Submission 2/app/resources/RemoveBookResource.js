(function () {
  'use strict'

  var LibraryDAO = require('../dao/LibraryDAO')

  module.exports = function (id, callback) {
    var newBooks
    LibraryDAO.readXMLFile(function (data) {
      newBooks = data.filter(book => book.id !== id)
      console.log(newBooks)
      LibraryDAO.writeXMLFile(newBooks)
    })
    callback()
  }
}())
