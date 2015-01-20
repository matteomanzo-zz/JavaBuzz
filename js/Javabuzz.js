var Javabuzz = function() {};

Javabuzz.prototype.isDivisibleBy = function(number, divisor) {
	return (number % divisor === 0)
};

Javabuzz.prototype.isDivisibleByThree = function(number) {
	return this.isDivisibleBy(number, 3)
};


Javabuzz.prototype.isDivisibleByFive = function(number) {
	return this.isDivisibleBy(number, 5)
};


Javabuzz.prototype.says = function(number) {
	if ((this.isDivisibleByThree(number)) && (this.isDivisibleByFive(number)))
		return 'FizzBuzz!';

	if (this.isDivisibleByThree(number))
		return 'Fizz!';

	if (this.isDivisibleByFive(number))
		return 'Buzz!';
};
