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
            var books;
            fs.readFile(path.join(__dirname, 'books.xml'), function (err, data) {
                parser.parseString(data, function (err, result) {
                    // console.dir(result);
                    books = JSON.stringify(result)
                })
            })
             console.log("Books: " + books);
            // callback(books);
        },

        // Write the entire file from the file system.
        writeXMLFile: function(data) {

        }
    };

    module.exports = LibraryDAO;
}());
