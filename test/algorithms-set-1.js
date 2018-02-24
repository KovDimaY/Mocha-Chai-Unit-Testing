var expect = require("chai").expect;
var beginner = require("../app/algorithms-set-1");


describe("SIMPLE ALGORITHMS FOR BEGGINERS", () => {
  // test 1       -------------------------------------------------------------------
  describe("Prime Numbers Checker", () => {
  	it("2 is a prime number", () => {
      // Setup
      const input = 2;
      const expected = true;
      // Exercise
  		const result = beginner.isPrime(input);
      // Verify
      expect(result).to.equal(expected);
    });
    it("2003.0 is a prime number", () => {
      // Setup
      const input = 2003.0;
      const expected = true;
      // Exercise
  		const result = beginner.isPrime(input);
      // Verify
      expect(result).to.equal(expected);
    });
    it("100003 is a prime number", () => {
      // Setup
      const input = 100003;
      const expected = true;
      // Exercise
  		const result = beginner.isPrime(input);
      // Verify
      expect(result).to.equal(expected);
    });
    it("0 is not a prime number", () => {
      // Setup
      const input = 0;
      const expected = false;
      // Exercise
  		const result = beginner.isPrime(input);
      // Verify
      expect(result).to.equal(expected);
    });
    it("1 is not a prime number", () => {
      // Setup
      const input = 1;
      const expected = false;
      // Exercise
  		const result = beginner.isPrime(input);
      // Verify
      expect(result).to.equal(expected);
    });
    it("1127843 is not a prime number", () => {
      // Setup
      const input = 1127843;
      const expected = false;
      // Exercise
  		const result = beginner.isPrime(input);
      // Verify
      expect(result).to.equal(expected);
    });
    it("Negative numbers (-7) are not prime", () => {
      // Setup
      const input = -7;
      const expected = false;
      // Exercise
  		const result = beginner.isPrime(input);
      // Verify
      expect(result).to.equal(expected);
    });
    it("Not integers (4.3) are not prime", () => {
      // Setup
      const input = 4.3;
      const expected = false;
      // Exercise
  		const result = beginner.isPrime(input);
      // Verify
      expect(result).to.equal(expected);
    });
  });


  // test 2       -------------------------------------------------------------------
  describe("Prime Factors Finder", () => {
  	it("Prime divisors of 1", () => {
      // Setup
      const input = 1;
      const expected = [];
      // Exercise
  		const result = beginner.primeFactors(input);
      // Verify
      expect(result).to.deep.equal(expected);
    });
    it("Prime divisors of 5", () => {
      // Setup
      const input = 5;
      const expected = [5];
      // Exercise
  		const result = beginner.primeFactors(input);
      // Verify
      expect(result).to.deep.equal(expected);
    });
    it("Prime divisors of 2310", () => {
      // Setup
      const input = 2310;
      const expected = [2, 3, 5, 7, 11];
      // Exercise
  		const result = beginner.primeFactors(input);
      // Verify
      expect(result).to.deep.equal(expected);
    });
    it("Prime divisors of 32", () => {
      // Setup
      const input = 32;
      const expected = [2, 2, 2, 2, 2];
      // Exercise
  		const result = beginner.primeFactors(input);
      // Verify
      expect(result).to.deep.equal(expected);
    });
    it("Prime divisors of 10.0", () => {
      // Setup
      const input = 10.0;
      const expected = [2, 5];
      // Exercise
  		const result = beginner.primeFactors(input);
      // Verify
      expect(result).to.deep.equal(expected);
    });
    it("Prime divisors of 15.4", () => {
      // Setup
      const input = 15.4;
      const expected = [];
      // Exercise
  		const result = beginner.primeFactors(input);
      // Verify
      expect(result).to.deep.equal(expected);
    });
    it("Prime divisors of 0", () => {
      // Setup
      const input = 0;
      const expected = [-1];
      // Exercise
  		const result = beginner.primeFactors(input);
      // Verify
      expect(result).to.deep.equal(expected);
    });
    it("Prime divisors of -60", () => {
      // Setup
      const input = -60;
      const expected = [2, 2, 3, 5];
      // Exercise
  		const result = beginner.primeFactors(input);
      // Verify
      expect(result).to.deep.equal(expected);
    });
  });


  // test 3       -------------------------------------------------------------------
  describe("Fibonacci Series", () => {
  	it("Element number 0", () => {
  		var result = beginner.fibonacci(0);
      	expect(result).to.equal(0);
    });
    it("Element number 1", () => {
  		var result = beginner.fibonacci(1);
      	expect(result).to.equal(1);
    });
    it("Element number 2", () => {
  		var result = beginner.fibonacci(2);
      	expect(result).to.equal(1);
    });
    it("Element number 3", () => {
  		var result = beginner.fibonacci(3);
      	expect(result).to.equal(2);
    });
    it("Element number 7", () => {
  		var result = beginner.fibonacci(7);
      	expect(result).to.equal(13);
    });
    it("Element number 20", () => {
  		var result = beginner.fibonacci(20);
      	expect(result).to.equal(6765);
    });
    it("Element number 50.0", () => {
  		var result = beginner.fibonacci(50.0);
      	expect(result).to.equal(12586269025);
    });
    it("Element number 10.5", () => {
  		var result = beginner.fibonacci(10.5);
      	expect(result).to.equal(null);
    });
    it("Element number -3", () => {
  		var result = beginner.fibonacci(-3);
      	expect(result).to.equal(null);
    });
  });


  // test 4       -------------------------------------------------------------------
  describe("The Greates Common Divisor", () => {
  	it("GCD(a, b) = GCD(b, a)", () => {
  		for (var i = 0; i < 20; i++) {
  			var number1 = Math.floor(Math.random() * 1000);
  			var number2 = Math.floor(Math.random() * 1000);
  			var direct = beginner.greatestCommonDivisor(number1, number2);
			var revers = beginner.greatestCommonDivisor(number2, number1);
      		expect(direct).to.equal(revers);
  		}
    });
    it("GCD(a, a) = a", () => {
    	for (var i = 0; i < 20; i++) {
    		var number = Math.floor(Math.random() * 1000);
	  		var result = beginner.greatestCommonDivisor(number, number);
	      	expect(result).to.equal(number);
      	}
    });
    it("GCD(a, 0) = a", () => {
    	for (var i = 0; i < 20; i++) {
    		var number = Math.floor(Math.random() * 1000);
	  		var result = beginner.greatestCommonDivisor(number, 0);
	      	expect(result).to.equal(number);
      	}
    });
    it("GCD(a, 1) = 1", () => {
    	for (var i = 0; i < 20; i++) {
    		var number = Math.floor(Math.random() * 1000);
	  		var result = beginner.greatestCommonDivisor(number, 1);
	      	expect(result).to.equal(1);
      	}
    });
    it("GCD(n, n+1) = 1", () => {
    	for (var i = 0; i < 20; i++) {
    		var number = Math.floor(Math.random() * 1000);
	  		var result = beginner.greatestCommonDivisor(number, number + 1);
	      	expect(result).to.equal(1);
      	}
    });
    it("GCD(not integer, not integer) = null", () => {
    	for (var i = 0; i < 20; i++) {
    		var number1 = Math.random() * 1000;
    		var number2 = Math.random() * 1000;
	  		var result = beginner.greatestCommonDivisor(number1, number2);
	      	expect(result).to.equal(null);
      	}
    });
    it("GCD(not integer, integer) = null", () => {
    	for (var i = 0; i < 20; i++) {
    		var number1 = Math.random() * 1000;
    		var number2 = Math.floor(Math.random() * 1000);
	  		var result = beginner.greatestCommonDivisor(number1, number2);
	      	expect(result).to.equal(null);
      	}
    });
    it("GCD(12, 30) = 6", () => {
  		var result = beginner.greatestCommonDivisor(12, 30);
	    expect(result).to.equal(6);
    });
    it("GCD(-84, 184) = 4", () => {
  		var result = beginner.greatestCommonDivisor(-84, 184);
	    expect(result).to.equal(4);
    });
    it("GCD(4553, 8164) = 157", () => {
  		var result = beginner.greatestCommonDivisor(4553, 8164);
	    expect(result).to.equal(157);
    });
    it("GCD(-1000, -20) = 20", () => {
  		var result = beginner.greatestCommonDivisor(-1000, -20);
	    expect(result).to.equal(20);
    });
    it("GCD(223, 331) = 1", () => {
  		var result = beginner.greatestCommonDivisor(223, 331);
	    expect(result).to.equal(1);
    });
  });


  // test 5       -------------------------------------------------------------------
  describe("Removing Duplicates", () => {
  	it("[] => []", () => {
  		var result = beginner.removeDuplicate([]);
	    expect(result).to.deep.equal([]);
    });
  	it("[1, 1, 1, 1] => [1]", () => {
  		var result = beginner.removeDuplicate([1, 1, 1, 1]);
	    expect(result).to.deep.equal([1]);
    });
    it("[1, 1, 1, 1, 2, 2, 2, 2] => [1, 2]", () => {
  		var result = beginner.removeDuplicate([1, 1, 1, 1, 2, 2, 2, 2]);
	    expect(result).to.deep.equal([1, 2]);
    });
    it("20 randomized tests", () => {
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
  describe("Merge Sorted Arrays", () => {
    it("A + B => B + A", () => {
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
    it("A + [] => A", () => {
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
    it("[] + [] => []", () => {
      var result = beginner.mergeSortedArrays([], []);
      expect(result).to.deep.equal([]);
    });
    it("[1, 2] + [3, 4] => [1, 2, 3, 4]", () => {
      var result = beginner.mergeSortedArrays([1, 2], [3, 4]);
      expect(result).to.deep.equal([1, 2, 3, 4]);
    });
    it("[1, 3, 5] + [2, 4] => [1, 2, 3, 4, 5]", () => {
      var result = beginner.mergeSortedArrays([1, 3, 5], [2, 4]);
      expect(result).to.deep.equal([1, 2, 3, 4, 5]);
    });
    it("[1, 2, 4, 5] + [3] => [1, 2, 3, 4, 5]", () => {
      var result = beginner.mergeSortedArrays([1, 2, 4, 5], [3]);
      expect(result).to.deep.equal([1, 2, 3, 4, 5]);
    });
    it("[1, 2, 3, 4, 5] + [1, 2, 3, 4, 5] => [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]", () => {
      var result = beginner.mergeSortedArrays([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]);
      expect(result).to.deep.equal([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);
    });
    it("[-3] + [-11, -2, 13.4, 13.5] => [-11, -3, -2, 13.4, 13.5]", () => {
      var result = beginner.mergeSortedArrays([-3], [-11, -2, 13.4, 13.5]);
      expect(result).to.deep.equal([-11, -3, -2, 13.4, 13.5]);
    });
  });


  // test 7       -------------------------------------------------------------------
  describe("String Reverse Algorithm", () => {
    it("'' => ''", () => {
      var result = beginner.stringReverse("");
      expect(result).to.deep.equal("");
    });
    it("'a' => 'a'", () => {
      var result = beginner.stringReverse("a");
      expect(result).to.deep.equal("a");
    });
    it("'ab' => 'ba'", () => {
      var result = beginner.stringReverse("ab");
      expect(result).to.deep.equal("ba");
    });
    it("'1234,56789' => '98765,4321'", () => {
      var result = beginner.stringReverse("1234,56789");
      expect(result).to.deep.equal("98765,4321");
    });
    it(" 12345 (integer) => 54321 (String) ", () => {
      var result = beginner.stringReverse(12345);
      expect(result).to.deep.equal("54321");
    });
  });


  // test 8       -------------------------------------------------------------------
  describe("Words Counter", () => {
    it(" numbers  => 0 ", () => {
      var result = beginner.wordsCounter(2);
      expect(result).to.deep.equal(0);
    });
    it(" array  => 0 ", () => {
      var result = beginner.wordsCounter([1, 2, 3]);
      expect(result).to.deep.equal(0);
    });
    it(" object  => 0 ", () => {
      var result = beginner.wordsCounter({"a": "value of a", "b": "value of b"});
      expect(result).to.deep.equal(0);
    });
    it(" ''  => 0 ", () => {
      var result = beginner.wordsCounter("");
      expect(result).to.deep.equal(0);
    });
    it(" ' , '  => 0 ", () => {
      var result = beginner.wordsCounter(" , ");
      expect(result).to.deep.equal(0);
    });
    it(" 'Hello'  => 1 ", () => {
      var result = beginner.wordsCounter("Hello");
      expect(result).to.deep.equal(1);
    });
    it(" '   Hello'  => 1 ", () => {
      var result = beginner.wordsCounter("   Hello");
      expect(result).to.deep.equal(1);
    });
    it(" 'Hello   '  => 1 ", () => {
      var result = beginner.wordsCounter("Hello   ");
      expect(result).to.deep.equal(1);
    });
    it(" '   Hello   '  => 1 ", () => {
      var result = beginner.wordsCounter("   Hello   ");
      expect(result).to.deep.equal(1);
    });
    it(" ' !   Hello   '  => 1 ", () => {
      var result = beginner.wordsCounter(" !   Hello   ");
      expect(result).to.deep.equal(1);
    });
    it(" '   Hello   !'  => 1 ", () => {
      var result = beginner.wordsCounter("   Hello   !");
      expect(result).to.deep.equal(1);
    });
    it(" ' !  Hello  ! '  => 1 ", () => {
      var result = beginner.wordsCounter(" !  Hello  ! ");
      expect(result).to.deep.equal(1);
    });
    it(" 'Hello, world!'  => 2 ", () => {
      var result = beginner.wordsCounter("Hello, world!");
      expect(result).to.deep.equal(2);
    });
    it(" 'Hello,world'  => 2 ", () => {
      var result = beginner.wordsCounter("Hello,world");
      expect(result).to.deep.equal(2);
    });
    it(" 'Hello world...'  => 2 ", () => {
      var result = beginner.wordsCounter("Hello world...");
      expect(result).to.deep.equal(2);
    });
    it(" 'Hello this big and wanderful world!'  => 6 ", () => {
      var result = beginner.wordsCounter("  Hello   this big,and wanderful    world !");
      expect(result).to.deep.equal(6);
    });
    it(" '  Hello   this big,and wanderful    world !'  => 6 ", () => {
      var result = beginner.wordsCounter("  Hello   this big,and wanderful    world !");
      expect(result).to.deep.equal(6);
    });
    it(" 'Цей символ з'явився в Юнікоді: \u2602'  => 6 ", () => {
      var result = beginner.wordsCounter("Цей символ з'явився в Юнікоді: \u2602");
      expect(result).to.deep.equal(6);
    });
  });


  // test 9       -------------------------------------------------------------------
  describe("Tags Collector", () => {
    it(" numbers  => [] ", () => {
      var result = beginner.tagsCollector(2);
      expect(result).to.deep.equal([]);
    });
    it(" array  => [] ", () => {
      var result = beginner.tagsCollector([1, 2, 3]);
      expect(result).to.deep.equal([]);
    });
    it(" object  => [] ", () => {
      var result = beginner.tagsCollector({"a": "value of a", "b": "value of b"});
      expect(result).to.deep.equal([]);
    });
    it(" ''  => [] ", () => {
      var result = beginner.tagsCollector("");
      expect(result).to.deep.equal([]);
    });
    it(" '  ,  '  => [] ", () => {
      var result = beginner.tagsCollector("");
      expect(result).to.deep.equal([]);
    });
    it(" 'Hello'  => ['Hello'] ", () => {
      var result = beginner.tagsCollector("Hello");
      expect(result).to.deep.equal(["Hello"]);
    });
    it(" '   Hello'  => ['Hello'] ", () => {
      var result = beginner.tagsCollector("   Hello");
      expect(result).to.deep.equal(['Hello']);
    });
    it(" 'Hello   '  => ['Hello'] ", () => {
      var result = beginner.tagsCollector("Hello   ");
      expect(result).to.deep.equal(['Hello']);
    });
    it(" '   Hello   '  => ['Hello'] ", () => {
      var result = beginner.tagsCollector("   Hello   ");
      expect(result).to.deep.equal(['Hello']);
    });
    it(" ' !   Hello   '  => ['Hello'] ", () => {
      var result = beginner.tagsCollector(" !   Hello   ");
      expect(result).to.deep.equal(['Hello']);
    });
    it(" '   Hello   !'  => ['Hello'] ", () => {
      var result = beginner.tagsCollector("   Hello   !");
      expect(result).to.deep.equal(['Hello']);
    });
    it(" ' !  Hello  ! '  => ['Hello'] ", () => {
      var result = beginner.tagsCollector(" !  Hello  ! ");
      expect(result).to.deep.equal(['Hello']);
    });
    it(" 'Hello, world!'  => ['Hello', 'world'] ", () => {
      var result = beginner.tagsCollector("Hello, world!");
      expect(result).to.deep.equal(['Hello', 'world']);
    });
    it(" 'Hello,world'  => ['Hello', 'world'] ", () => {
      var result = beginner.tagsCollector("Hello,world");
      expect(result).to.deep.equal(['Hello', 'world']);
    });
    it(" 'Hello world...'  => ['Hello', 'world'] ", () => {
      var result = beginner.tagsCollector("Hello world...");
      expect(result).to.deep.equal(['Hello', 'world']);
    });
    it(" 'Hello this big and wanderful world!'  => ['Hello', 'this', 'big', 'and', 'wanderful', 'world'] ", () => {
      var result = beginner.tagsCollector("  Hello   this big,and wanderful    world !");
      expect(result).to.deep.equal(['Hello', 'this', 'big', 'and', 'wanderful', 'world']);
    });
    it(" '  Hello   this big,and wanderful    world !'  => ['Hello', 'this', 'big', 'and', 'wanderful', 'world'] ", () => {
      var result = beginner.tagsCollector("  Hello   this big,and wanderful    world !");
      expect(result).to.deep.equal(['Hello', 'this', 'big', 'and', 'wanderful', 'world']);
    });
    it(" 'Hello, hello, Hello, Hello, hello, hello, hello'  => ['Hello', 'hello'] ", () => {
      var result = beginner.tagsCollector("Hello, hello, Hello, Hello, hello, hello, hello");
      expect(result).to.deep.equal(['Hello', 'hello']);
    });
  });


  // test 10       -------------------------------------------------------------------
  describe("The First Non Repeating Char", () => {
    it(" ''  => null ", () => {
      var result = beginner.firstNonRepeatChar("");
      expect(result).to.deep.equal(null);
    });
    it(" 'aaa'  => null ", () => {
      var result = beginner.firstNonRepeatChar("aaa");
      expect(result).to.deep.equal(null);
    });
    it(" 'aabb'  => null ", () => {
      var result = beginner.firstNonRepeatChar("aabb");
      expect(result).to.deep.equal(null);
    });
    it(" 'a'  => a ", () => {
      var result = beginner.firstNonRepeatChar("a");
      expect(result).to.deep.equal("a");
    });
    it(" 'ab'  => a ", () => {
      var result = beginner.firstNonRepeatChar("ab");
      expect(result).to.deep.equal("a");
    });
    it(" 'aabbcddee'  => c ", () => {
      var result = beginner.firstNonRepeatChar("aabbcddee");
      expect(result).to.deep.equal("c");
    });
    it(" 'abcdedcba'  => e ", () => {
      var result = beginner.firstNonRepeatChar("abcdedcba");
      expect(result).to.deep.equal("e");
    });
    it(" 'the quick brown fox jumps then quickly blow air'  => f ", () => {
      var result = beginner.firstNonRepeatChar("the quick brown fox jumps then quickly blow air");
      expect(result).to.deep.equal("f");
    });
    it(" 123321 (number)  =>  null", () => {
      var result = beginner.firstNonRepeatChar(123321);
      expect(result).to.deep.equal(null);
    });
    it(" 12321 (number)  => 3 ", () => {
      var result = beginner.firstNonRepeatChar(12321);
      expect(result).to.deep.equal("3");
    });
  });

});
