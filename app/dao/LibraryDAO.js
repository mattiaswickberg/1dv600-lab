(function () {
    "use strict";

    var fs = require('fs');
    var path = require('path');
    

    // Instructions how to use the xml2js
    // https://github.com/Leonidas-from-XIV/node-xml2js
    var xml2js = require('xml2js');


    // Use this file to write and read the xml file.
    var LibraryDAO = {

        // Get the entire file from the file system.
        readXMLFile: function(callback) {
            var parser = new xml2js.Parser();
            fs.readFile(path.join(__dirname, 'books.xml'), function (err, data) {
                parser.parseString(data, function (err, result) {
                    var books = []
                    var jsonBooks;
                    result.catalog.book.forEach( function(element) {
                        var book = {
                            "id": element.$.id,
                            "author": element.author[0],
                            "title": element.title[0],
                            "genre": element.genre[0],
                            "price": element.price[0],
                            "publish_date": element.publish_date[0],
                            "description": element.description[0],                            
                        }
                        books.push(book)
                        jsonBooks = {books};                        
                    })
                     console.log(jsonBooks)
                  
                    callback(jsonBooks);
                })
            })
        },

        // Write the entire file from the file system.
        writeXMLFile: function(data) {

        }
    };

    module.exports = LibraryDAO;
}());
