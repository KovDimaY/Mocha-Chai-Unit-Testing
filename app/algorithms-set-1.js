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














