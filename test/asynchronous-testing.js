var expect = require("chai").expect;
var request = require("request");


describe("TESTS FOR ASYNCHRONOUS CODE OF SERVER", function() {

  // test 1       -------------------------------------------------------------------
  describe("Sever Connection Checker", function() {

    var url = "http://localhost:3000/testConnection";

    it("Returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

  });

});
