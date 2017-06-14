var expect = require("chai").expect;
var beginner = require("../app/algorithms-set-1");


describe("Simple Algorithms for Begginers", function() {
  describe("Prime Numbers Checker", function() {
  	it("2 is a prime number", function() {
  		var result = beginner.isPrime(2);
      	expect(result).to.equal(true);
    });
  });

  describe("Other algorithm", function() {
  });
});