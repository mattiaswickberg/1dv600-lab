var expect    = require("chai").expect;
var GetBooksResource = require("../app/resources/GetBooksResource");

describe("Get Books", function () {

    describe("Tests the get books function to see if it returns an array object", function () {

        it("Returns an array object", function () {

            var callback = function(data) {
               expect(Object.prototype.toString.call(data)).to.equal('[object Array]')
            }

            GetBooksResource(callback)
        });
    });
});