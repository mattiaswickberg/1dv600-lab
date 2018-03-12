 var expect = require('chai').expect
 var GetBookResource = require('../app/resources/GetBookResource')

 describe('GetBookById', function () {
   describe('Tests the function to see that book id matches input id', function () {
     it('Returns book with correct id', function (done) {
       GetBookResource(9, function (data) {
         expect(data.id).to.equal('9')
       })
       done()
     })
   })
 })
