// Two tests: test object with ID, and test empty input

var expect = require('chai').expect
var XmlToJson = require('../app/resources/XmlToJson')

describe('XmlToJson', function () {
  describe('Tests the XmlToJson function to see if it returns an object corresponding ID', function () {
    it('Returns an object with an ID', function (done) {
        var data =   { '$': { id: '101' },
        author: [ 'Stephen Hawking' ],
        title: [ 'A Brief History of Time' ],
        genre: [ 'Science' ],
        price: [ '199' ],
        publish_date: [ '1988-09-01' ],
        description: [ 'Hawking attempts to explain a range of subjects in cosmology, including the big bang, black holes and light cones, to the nonspecialist reader. His main goal is to give an overview of the subject, but he also attempts to explain some complex mathematics. In the 1996 edition of the book and subsequent editions, Hawking discusses the possibility of time travel and wormholes and explores the possibility of having a universe without a quantum singularity at the beginning of time.' ] }
        var book = XmlToJson(data) 
        expect(book.id).to.equal('101')
        done()
    })
  })
})