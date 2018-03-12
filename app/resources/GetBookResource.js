(function () {
  'use strict'

  var LibraryDAO = require('../dao/LibraryDAO')

  module.exports = function (id, callback) {
    console.log('Get book gets: ' + id)
    LibraryDAO.readXMLFile(function (data) {
      var book = data.filter(element => element.id === id)
      if (book.length < 0) {
        callback(book[0])
      } else {
        callback('{}')
      }
    })
  }
}())
