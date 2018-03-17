var jsonToXml = function (element) {
  var book
  if (element !== undefined) {
    book = { // Build xml object from json
      '$': {id: element.id},
      author: [checkMissing(element.author)],
      title: [checkMissing(element.title)],
      genre: [checkMissing(element.genre)],
      price: [checkMissing(element.price)],
      publish_date: [checkMissing(element.publish_date)],
      description: [checkMissing(element.description)]
    }
    return book
  }
}

var checkMissing = function (element) { // Check if a field is empty, and return a string to avoid undefined errors
  if (typeof element === 'string') {
    return element
  } else {
    return (' ')
  }
}

module.exports = jsonToXml
