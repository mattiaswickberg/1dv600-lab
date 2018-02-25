
var jsonToXml = function (element) {
  var book
  if (element !== undefined) {
    book = {
      '$': { id: element.id},
      author: [element.author],
      title: [element.title],
      genre: [element.title],
      price: [element.price],
      publish_date: [element.publish_date],
      description: [element.description]
    }
    return book
  }
}

module.exports = jsonToXml
