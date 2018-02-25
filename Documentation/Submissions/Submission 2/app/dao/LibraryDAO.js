(function () {
  'use strict'

  var fs = require('fs')
  var path = require('path')

    // Instructions how to use the xml2js
    // https://github.com/Leonidas-from-XIV/node-xml2js
  var xml2js = require('xml2js')

    // Use this file to write and read the xml file.
  var LibraryDAO = {

        // Get the entire file from the file system.
    readXMLFile: function (callback) {
            // Create instance of xml parser
      var parser = new xml2js.Parser()
            // Read file from system
      fs.readFile(path.join(__dirname, 'books.xml'), function (err, data) {
                // Parse XML file and convert into JSON objects, which are save into variable books
        parser.parseString(data, function (err, result) {
                    // console.log(result.catalog.book)
          var books = []
          result.catalog.book.forEach(function (element) {
            var book = {
              'id': element.$.id,
              'author': element.author[0],
              'title': element.title[0],
              'genre': element.genre[0],
              'price': element.price[0],
              'publish_date': element.publish_date[0],
              'description': element.description[0]
            }
            books.push(book)
          })
                    // send array with book objects with callback function
          callback(books)
        })
      })
    },

        // Write the entire file to the file system.
    writeXMLFile: function (data) {
      var catalog = {catalog: {book: []}}
      var books =
            data.forEach(function (element) {
              var book = {
                '$': { id: element.id},
                author: [element.author],
                title: [element.title],
                genre: [element.title],
                price: [element.price],
                publish_date: [element.publish_date],
                description: [element.description]
              }
              catalog.catalog.book.push(book)
            })
      var builder = new xml2js.Builder()
      var xml = builder.buildObject(catalog)
      console.log(xml)

            // Write xml to books.xml
      fs.writeFile(path.join(__dirname, 'books.xml'), xml)
    }
  }

  module.exports = LibraryDAO
}())
