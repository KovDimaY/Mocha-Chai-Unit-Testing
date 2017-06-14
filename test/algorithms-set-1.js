var expect = require("chai").expect;
var beginner = require("../app/algorithms-set-1");


describe("SIMPLE ALGORITHMS FOR BEGGINERS", function() {
  describe("Prime Numbers Checker", function() {
  	it("2 is a prime number", function() {
  		var result = beginner.isPrime(2);
      	expect(result).to.equal(true);
    });
    it("2003.0 is a prime number", function() {
  		var result = beginner.isPrime(2003.0);
      	expect(result).to.equal(true);
    });
    it("100003 is a prime number", function() {
  		var result = beginner.isPrime(100003);
      	expect(result).to.equal(true);
    });
    it("0 is not a prime number", function() {
  		var result = beginner.isPrime(0);
      	expect(result).to.equal(false);
    });
    it("1 is not a prime number", function() {
  		var result = beginner.isPrime(1);
      	expect(result).to.equal(false);
    });
    it("1127843 is not a prime number", function() {
  		var result = beginner.isPrime(1127843);
      	expect(result).to.equal(false);
    });
    it("Negative numbers (-7) are not prime", function() {
  		var result = beginner.isPrime(-7);
      	expect(result).to.equal(false);
    });
    it("Not integers (4.3) are not prime", function() {
  		var result = beginner.isPrime(4.3);
      	expect(result).to.equal(false);
    });
  });

  describe("Prime Factors Finder", function() {
  	it("Prime divisors of 1", function() {
  		var result = beginner.primeFactors(1);
      	expect(result).to.deep.equal([]);
    });
    it("Prime divisors of 5", function() {
  		var result = beginner.primeFactors(5);
      	expect(result).to.deep.equal([5]);
    });
    it("Prime divisors of 2310", function() {
  		var result = beginner.primeFactors(2310);
      	expect(result).to.deep.equal([2, 3, 5, 7, 11]);
    });
    it("Prime divisors of 32", function() {
  		var result = beginner.primeFactors(32);
      	expect(result).to.deep.equal([2, 2, 2, 2, 2]);
    });
    it("Prime divisors of 10.0", function() {
  		var result = beginner.primeFactors(10.0);
      	expect(result).to.deep.equal([2, 5]);
    });
    it("Prime divisors of 15.4", function() {
  		var result = beginner.primeFactors(15.4);
      	expect(result).to.deep.equal([]);
    });
    it("Prime divisors of 0", function() {
  		var result = beginner.primeFactors(0);
      	expect(result).to.deep.equal([-1]);
    });
    it("Prime divisors of -60", function() {
  		var result = beginner.primeFactors(-60);
      	expect(result).to.deep.equal([2, 2, 3, 5]);
    });
  });
});




























