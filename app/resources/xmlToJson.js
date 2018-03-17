var xmlToJson = function (element) {
  if (element !== undefined) {
    var book = { //build json object from xml
      'id': element.$.id,
      'author': element.author[0],
      'title': element.title[0],
      'genre': element.genre[0],
      'price': element.price[0],
      'publishDate': element.publish_date[0],
      'description': element.description[0]
    }
    // console.log(book)
    return book
  }
}

module.exports = xmlToJson
