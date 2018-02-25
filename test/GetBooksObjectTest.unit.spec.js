var expect    = require("chai").expect;
var GetBooksResource = require("../app/resources/GetBooksResource");

describe("Get Books", function () {

    describe("Tests the get books function to see the array consists only of objects with an ID", function () {

        it("Returns only objects with an ID", function () {

            var callback = function(data) {
                var obj = true
                data.array.forEach(element => {
                    if (element.id === undefined) {
                        obj = false
                    }
                });

               expect(obj).to.equal(true)
            }

            GetBooksResource(callback)
        });
    });
});