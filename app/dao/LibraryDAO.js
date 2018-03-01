(function () {
  'use strict'

  let XmlToJson = require('../resources/XmlToJson')
  let JsonToXml = require('../resources/JsonToXml')
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
        if (err) {
          console.log(err)
        } else {
                // Parse XML file and convert into JSON objects, which are save into variable books
          parser.parseString(data, function (err, result) {
                    // console.log(result.catalog.book)
            var books = []
          // Convert each book to JSON and store in array
            result.catalog.book.forEach(function (element) {
              var book = XmlToJson(element)
              books.push(book)
            })
                    // send array with book objects with callback function
            callback(books)
          })
        }
      })
    },

        // Write the entire file to the file system.
    writeXMLFile: function (data) {
        // Create container for books
      var catalog = {catalog: {book: []}}
      // Covert each book into XML-format and store in container
      data.forEach(function (element) {
        var book = JsonToXml(element)
        catalog.catalog.book.push(book)
      })
            // Build XML from container object
      var builder = new xml2js.Builder()
      var xml = builder.buildObject(catalog)
            // console.log(xml)

            // Write xml to books.xml
      fs.writeFile(path.join(__dirname, 'books.xml'), xml)
    }
  }

  module.exports = LibraryDAO
}())
