exports.isPrime = function (number) {
	if (number < 2) {
		return false;
	}

	if (!Number.isInteger(number)) {
		return false;
	}

	if (number == 2) {
		return true;
	}

  	var divisor = 3;

  	while (divisor < Math.sqrt(number)) {
    	if (number % divisor == 0) {
     		return false; 
    	} else {
    		divisor += 2;
    	}
  	}
  	return true;
}

exports.primeFactors = function (number) {

	if (number == 0) {
		return [-1];
	}

	var factors = []; 
    var divisor = 2;

	if (Number.isInteger(number)) {
		if (number < 0) {
			number *= -1;
		}
		while (number>1) {
    		if (number % divisor == 0) {
	       		factors.push(divisor); 
	       		number = number/ divisor;
    		} else { 
      			divisor++;
    		}     
  		}
	}
	return factors;
}

exports.fibonacci = function (number) {

	if (!Number.isInteger(number) || number < 0) {
		return null;
	}

	if (number == 0) {
		return 0;
	}

	if (number <= 2) {
		return 1;
	}

	var lastElements = [0, 1];
	var result = 0;

  	for (var i = 0; i < number - 1; i++) {
   		result = lastElements[0] + lastElements[1];
   		lastElements[0] = lastElements[1];
   		lastElements[1] = result;
  	}

 	return result;
}

exports.greatestCommonDivisor = function (a, b) {

	if (!Number.isInteger(a) || !Number.isInteger(b)) {
		return null;
	}

	if (a < 0) {
		a *= -1;
	}
	if (b < 0) {
		b *= -1;
	}

	// Euclidean algorithm
	if (b == 0) {
    	return a;
   	} else {
    	return exports.greatestCommonDivisor(b, a%b);
   	}
}

exports.removeDuplicate = function (array) {
	var exists = {};
	var result = [];
	var element = null;

	for (var i = 0; i < array.length; i++) {
		element = array[i];
		if (!exists[element]) {
	  		result.push(element);
	  		exists[element] = true;
		}
	}
	return result;
}













