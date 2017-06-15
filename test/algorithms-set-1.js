var expect = require("chai").expect;
var beginner = require("../app/algorithms-set-1");


describe("SIMPLE ALGORITHMS FOR BEGGINERS", function() {
  // test 1       -------------------------------------------------------------------
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


  // test 2       -------------------------------------------------------------------
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


  // test 3       -------------------------------------------------------------------
  describe("Fibonacci Series", function() {
  	it("Element number 0", function() {
  		var result = beginner.fibonacci(0);
      	expect(result).to.equal(0);
    });
    it("Element number 1", function() {
  		var result = beginner.fibonacci(1);
      	expect(result).to.equal(1);
    });
    it("Element number 2", function() {
  		var result = beginner.fibonacci(2);
      	expect(result).to.equal(1);
    });
    it("Element number 3", function() {
  		var result = beginner.fibonacci(3);
      	expect(result).to.equal(2);
    });
    it("Element number 7", function() {
  		var result = beginner.fibonacci(7);
      	expect(result).to.equal(13);
    });
    it("Element number 20", function() {
  		var result = beginner.fibonacci(20);
      	expect(result).to.equal(6765);
    });
    it("Element number 50.0", function() {
  		var result = beginner.fibonacci(50.0);
      	expect(result).to.equal(12586269025);
    });
    it("Element number 10.5", function() {
  		var result = beginner.fibonacci(10.5);
      	expect(result).to.equal(null);
    });
    it("Element number -3", function() {
  		var result = beginner.fibonacci(-3);
      	expect(result).to.equal(null);
    });    
  });


  // test 4       -------------------------------------------------------------------
  describe("The Greates Common Divisor", function() {
  	it("GCD(a, b) = GCD(b, a)", function() {
  		for (var i = 0; i < 20; i++) {
  			var number1 = Math.floor(Math.random() * 1000);
  			var number2 = Math.floor(Math.random() * 1000);
  			var direct = beginner.greatestCommonDivisor(number1, number2);
			var revers = beginner.greatestCommonDivisor(number2, number1);
      		expect(direct).to.equal(revers);
  		}  		
    });
    it("GCD(a, a) = a", function() {
    	for (var i = 0; i < 20; i++) {
    		var number = Math.floor(Math.random() * 1000);
	  		var result = beginner.greatestCommonDivisor(number, number);
	      	expect(result).to.equal(number);
      	}
    });
    it("GCD(a, 0) = a", function() {
    	for (var i = 0; i < 20; i++) {
    		var number = Math.floor(Math.random() * 1000);
	  		var result = beginner.greatestCommonDivisor(number, 0);
	      	expect(result).to.equal(number);
      	}
    });
    it("GCD(a, 1) = 1", function() {
    	for (var i = 0; i < 20; i++) {
    		var number = Math.floor(Math.random() * 1000);
	  		var result = beginner.greatestCommonDivisor(number, 1);
	      	expect(result).to.equal(1);
      	}
    });
    it("GCD(n, n+1) = 1", function() {
    	for (var i = 0; i < 20; i++) {
    		var number = Math.floor(Math.random() * 1000);
	  		var result = beginner.greatestCommonDivisor(number, number + 1);
	      	expect(result).to.equal(1);
      	}
    });
    it("GCD(not integer, not integer) = null", function() {
    	for (var i = 0; i < 20; i++) {
    		var number1 = Math.random() * 1000;
    		var number2 = Math.random() * 1000;
	  		var result = beginner.greatestCommonDivisor(number1, number2);
	      	expect(result).to.equal(null);
      	}
    });
    it("GCD(not integer, integer) = null", function() {
    	for (var i = 0; i < 20; i++) {
    		var number1 = Math.random() * 1000;
    		var number2 = Math.floor(Math.random() * 1000);
	  		var result = beginner.greatestCommonDivisor(number1, number2);
	      	expect(result).to.equal(null);
      	}
    });
    it("GCD(12, 30) = 6", function() {
  		var result = beginner.greatestCommonDivisor(12, 30);
	    expect(result).to.equal(6);
    });
    it("GCD(-84, 184) = 4", function() {
  		var result = beginner.greatestCommonDivisor(-84, 184);
	    expect(result).to.equal(4);
    });
    it("GCD(4553, 8164) = 157", function() {
  		var result = beginner.greatestCommonDivisor(4553, 8164);
	    expect(result).to.equal(157);
    });
    it("GCD(-1000, -20) = 20", function() {
  		var result = beginner.greatestCommonDivisor(-1000, -20);
	    expect(result).to.equal(20);
    });
    it("GCD(223, 331) = 1", function() {
  		var result = beginner.greatestCommonDivisor(223, 331);
	    expect(result).to.equal(1);
    });
  });


  // test 5       -------------------------------------------------------------------
  describe("Removing Duplicates", function() {
  	it("[] => []", function() {
  		var result = beginner.removeDuplicate([]);
	    expect(result).to.deep.equal([]);
    });
  	it("[1, 1, 1, 1] => [1]", function() {
  		var result = beginner.removeDuplicate([1, 1, 1, 1]);
	    expect(result).to.deep.equal([1]); 		
    });
    it("[1, 1, 1, 1, 2, 2, 2, 2] => [1, 2]", function() {
  		var result = beginner.removeDuplicate([1, 1, 1, 1, 2, 2, 2, 2]);
	    expect(result).to.deep.equal([1, 2]); 		
    });
    it("20 randomized tests", function() {
    	for (var i = 0; i < 20; i++) {
    		var length = Math.floor(Math.random() * 10);
    		var checker = [];
    		var testCase = [];
    		for (var j = 0; j < length; j++) {
				checker.push(j);
				testCase.push(j);
    		}

    		for (var j = 0; j < length; j++) {
    			var randomIndex = Math.floor(Math.random() * length);
				testCase.push(checker[randomIndex]);
    		}

	  		var result = beginner.removeDuplicate(testCase);
	      	expect(result).to.deep.equal(checker);
      	}
    });
  });


  // test 6       -------------------------------------------------------------------
  describe("Merge Sorted Arrays", function() {
    it("A + B => B + A", function() {
      for (var i = 0; i < 20; i++) {
        var arrayA = [];
        var arrayB = [];
        var lengthA = Math.floor(Math.random() * 10);
        var lengthB = Math.floor(Math.random() * 10);

        for (var j = 0; j < lengthA; j++) {
          arrayA.push(Math.random() * lengthA);
        }

        for (var j = 0; j < lengthB; j++) {
          arrayB.push(Math.random() * lengthB);
        }

        var direct = beginner.mergeSortedArrays(arrayA, arrayB);
        var revers = beginner.mergeSortedArrays(arrayB, arrayA);

        expect(direct).to.deep.equal(revers);
      }
    });
    it("A + [] => A", function() {
      for (var i = 0; i < 20; i++) {
        var array = [];
        var length = Math.floor(Math.random() * 10);

        for (var j = 0; j < length; j++) {
          array.push(Math.random() * length);
        }

        var result = beginner.mergeSortedArrays(array, []);
        expect(result).to.deep.equal(array);
      }
    });
    it("[] + [] => []", function() {
      var result = beginner.mergeSortedArrays([], []);
      expect(result).to.deep.equal([]);
    });
    it("[1, 2] + [3, 4] => [1, 2, 3, 4]", function() {
      var result = beginner.mergeSortedArrays([1, 2], [3, 4]);
      expect(result).to.deep.equal([1, 2, 3, 4]);
    });
    it("[1, 3, 5] + [2, 4] => [1, 2, 3, 4, 5]", function() {
      var result = beginner.mergeSortedArrays([1, 3, 5], [2, 4]);
      expect(result).to.deep.equal([1, 2, 3, 4, 5]);
    });
    it("[1, 2, 4, 5] + [3] => [1, 2, 3, 4, 5]", function() {
      var result = beginner.mergeSortedArrays([1, 2, 4, 5], [3]);
      expect(result).to.deep.equal([1, 2, 3, 4, 5]);
    });
    it("[1, 2, 3, 4, 5] + [1, 2, 3, 4, 5] => [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]", function() {
      var result = beginner.mergeSortedArrays([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]);
      expect(result).to.deep.equal([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);
    });
    it("[-3] + [-11, -2, 13.4, 13.5] => [-11, -3, -2, 13.4, 13.5]", function() {
      var result = beginner.mergeSortedArrays([-3], [-11, -2, 13.4, 13.5]);
      expect(result).to.deep.equal([-11, -3, -2, 13.4, 13.5]);
    });
  });


  // test 7       -------------------------------------------------------------------
  describe("String Reverse Algorithm", function() {
    it("'' => ''", function() {
      var result = beginner.stringReverse("");
      expect(result).to.deep.equal("");
    });
    it("'a' => 'a'", function() {
      var result = beginner.stringReverse("a");
      expect(result).to.deep.equal("a");
    });
    it("'ab' => 'ba'", function() {
      var result = beginner.stringReverse("ab");
      expect(result).to.deep.equal("ba");
    });
    it("'1234,56789' => '98765,4321'", function() {
      var result = beginner.stringReverse("1234,56789");
      expect(result).to.deep.equal("98765,4321");
    });
    it(" 12345 (integer) => 54321 (String) ", function() {
      var result = beginner.stringReverse(12345);
      expect(result).to.deep.equal("54321");
    });
  });


  // test 8       -------------------------------------------------------------------
  describe("Words Counter", function() {
    it(" numbers  => 0 ", function() {
      var result = beginner.wordsCounter(2);
      expect(result).to.deep.equal(0);
    });
    it(" array  => 0 ", function() {
      var result = beginner.wordsCounter([1, 2, 3]);
      expect(result).to.deep.equal(0);
    });
    it(" object  => 0 ", function() {
      var result = beginner.wordsCounter({"a": "value of a", "b": "value of b"});
      expect(result).to.deep.equal(0);
    });
    it(" ''  => 0 ", function() {
      var result = beginner.wordsCounter("");
      expect(result).to.deep.equal(0);
    });
    it(" ' , '  => 0 ", function() {
      var result = beginner.wordsCounter(" , ");
      expect(result).to.deep.equal(0);
    });
    it(" 'Hello'  => 1 ", function() {
      var result = beginner.wordsCounter("Hello");
      expect(result).to.deep.equal(1);
    });
    it(" '   Hello'  => 1 ", function() {
      var result = beginner.wordsCounter("   Hello");
      expect(result).to.deep.equal(1);
    });
    it(" 'Hello   '  => 1 ", function() {
      var result = beginner.wordsCounter("Hello   ");
      expect(result).to.deep.equal(1);
    });
    it(" '   Hello   '  => 1 ", function() {
      var result = beginner.wordsCounter("   Hello   ");
      expect(result).to.deep.equal(1);
    });
    it(" ' !   Hello   '  => 1 ", function() {
      var result = beginner.wordsCounter(" !   Hello   ");
      expect(result).to.deep.equal(1);
    });
    it(" '   Hello   !'  => 1 ", function() {
      var result = beginner.wordsCounter("   Hello   !");
      expect(result).to.deep.equal(1);
    });
    it(" ' !  Hello  ! '  => 1 ", function() {
      var result = beginner.wordsCounter(" !  Hello  ! ");
      expect(result).to.deep.equal(1);
    });
    it(" 'Hello, world!'  => 2 ", function() {
      var result = beginner.wordsCounter("Hello, world!");
      expect(result).to.deep.equal(2);
    });
    it(" 'Hello,world'  => 2 ", function() {
      var result = beginner.wordsCounter("Hello,world");
      expect(result).to.deep.equal(2);
    });
    it(" 'Hello world...'  => 2 ", function() {
      var result = beginner.wordsCounter("Hello world...");
      expect(result).to.deep.equal(2);
    });
    it(" 'Hello this big and wanderful world!'  => 6 ", function() {
      var result = beginner.wordsCounter("  Hello   this big,and wanderful    world !");
      expect(result).to.deep.equal(6);
    });
    it(" '  Hello   this big,and wanderful    world !'  => 6 ", function() {
      var result = beginner.wordsCounter("  Hello   this big,and wanderful    world !");
      expect(result).to.deep.equal(6);
    });
    it(" 'Цей символ з'явився в Юнікоді: \u2602'  => 6 ", function() {
      var result = beginner.wordsCounter("Цей символ з'явився в Юнікоді: \u2602");
      expect(result).to.deep.equal(6);
    });
  });


  // test 9       -------------------------------------------------------------------
  describe("Tags Collector", function() {
    it(" numbers  => [] ", function() {
      var result = beginner.tagsCollector(2);
      expect(result).to.deep.equal([]);
    });
    it(" array  => [] ", function() {
      var result = beginner.tagsCollector([1, 2, 3]);
      expect(result).to.deep.equal([]);
    });
    it(" object  => [] ", function() {
      var result = beginner.tagsCollector({"a": "value of a", "b": "value of b"});
      expect(result).to.deep.equal([]);
    });
    it(" ''  => [] ", function() {
      var result = beginner.tagsCollector("");
      expect(result).to.deep.equal([]);
    });
    it(" '  ,  '  => [] ", function() {
      var result = beginner.tagsCollector("");
      expect(result).to.deep.equal([]);
    });
    it(" 'Hello'  => ['Hello'] ", function() {
      var result = beginner.tagsCollector("Hello");
      expect(result).to.deep.equal(["Hello"]);
    });
    it(" '   Hello'  => ['Hello'] ", function() {
      var result = beginner.tagsCollector("   Hello");
      expect(result).to.deep.equal(['Hello']);
    });
    it(" 'Hello   '  => ['Hello'] ", function() {
      var result = beginner.tagsCollector("Hello   ");
      expect(result).to.deep.equal(['Hello']);
    });
    it(" '   Hello   '  => ['Hello'] ", function() {
      var result = beginner.tagsCollector("   Hello   ");
      expect(result).to.deep.equal(['Hello']);
    });
    it(" ' !   Hello   '  => ['Hello'] ", function() {
      var result = beginner.tagsCollector(" !   Hello   ");
      expect(result).to.deep.equal(['Hello']);
    });
    it(" '   Hello   !'  => ['Hello'] ", function() {
      var result = beginner.tagsCollector("   Hello   !");
      expect(result).to.deep.equal(['Hello']);
    });
    it(" ' !  Hello  ! '  => ['Hello'] ", function() {
      var result = beginner.tagsCollector(" !  Hello  ! ");
      expect(result).to.deep.equal(['Hello']);
    });
    it(" 'Hello, world!'  => ['Hello', 'world'] ", function() {
      var result = beginner.tagsCollector("Hello, world!");
      expect(result).to.deep.equal(['Hello', 'world']);
    });
    it(" 'Hello,world'  => ['Hello', 'world'] ", function() {
      var result = beginner.tagsCollector("Hello,world");
      expect(result).to.deep.equal(['Hello', 'world']);
    });
    it(" 'Hello world...'  => ['Hello', 'world'] ", function() {
      var result = beginner.tagsCollector("Hello world...");
      expect(result).to.deep.equal(['Hello', 'world']);
    });
    it(" 'Hello this big and wanderful world!'  => ['Hello', 'this', 'big', 'and', 'wanderful', 'world'] ", function() {
      var result = beginner.tagsCollector("  Hello   this big,and wanderful    world !");
      expect(result).to.deep.equal(['Hello', 'this', 'big', 'and', 'wanderful', 'world']);
    });
    it(" '  Hello   this big,and wanderful    world !'  => ['Hello', 'this', 'big', 'and', 'wanderful', 'world'] ", function() {
      var result = beginner.tagsCollector("  Hello   this big,and wanderful    world !");
      expect(result).to.deep.equal(['Hello', 'this', 'big', 'and', 'wanderful', 'world']);
    });
    it(" 'Hello, hello, Hello, Hello, hello, hello, hello'  => ['Hello', 'hello'] ", function() {
      var result = beginner.tagsCollector("Hello, hello, Hello, Hello, hello, hello, hello");
      expect(result).to.deep.equal(['Hello', 'hello']);
    });
  });
});




























