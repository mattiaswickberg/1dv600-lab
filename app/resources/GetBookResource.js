(function () {
  'use strict'

  var LibraryDAO = require('../dao/LibraryDAO')

  module.exports = function (id, callback) {
    console.log('Get book gets: ' + id)
    callback()
  }
}())
