
(function (getBooks) {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO')

    // import json from file
    // var books = require('../dao/books.json')

    module.exports = function (callback, title) { // The title is optional and is only present when searching. (You need yo modify the books.js file first)
        // (console.log(books))
       LibraryDAO.readXMLFile(callback)
        // send books with callback function
        // callback(books)
    };

}());
