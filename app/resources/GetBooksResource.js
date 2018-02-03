(function (getBooks) {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');


    module.exports = function (callback, title) { // The title is optional and is only present when searching. (You need yo modify the books.js file first)
        var books = [
            {
                'id':'',
                'title': 'The Graveyard Book',
                'author': 'Neil Gaiman',
                'genre': '',
                'price': '',
                'publishDate': '',
                'decription': ''
            }, 
            {
                'id':'',
                'title': 'Left Hand of Darkness',
                'author': 'Ursula K LeGuin',
                'genre': '',
                'price': '',
                'publishDate': '',
                'decription': ''
            },
            {
                'id':'',
                'title': 'The Tale of Genji',
                'author': 'Murasaki Shikibu',
                'genre': '',
                'price': '',
                'publishDate': '',
                'decription': ''
            },
            {
                'id':'',
                'title': 'The Mysteries of Udolpho',
                'author': 'Ann Radcliffe',
                'genre': '',
                'price': '',
                'publishDate': '',
                'decription': ''
            }
        ]
        console.log(books)

    };

}());
