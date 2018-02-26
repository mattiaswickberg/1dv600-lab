var expect    = require("chai").expect;
var GetBookResource = require("../app/resources/GetBookResource");

describe("Get Book", function () {

    describe("Tests the get book function returns an object with an ID", function () {

        it("Returns an object with an ID", function (done) {

            GetBookResource('345', function(data) {
                expect(data.id).to.equal(true)
                done()
             })
        });
    });
});
