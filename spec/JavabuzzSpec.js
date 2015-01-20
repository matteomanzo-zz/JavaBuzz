describe('Javabuzz', function() {

	var javabuzz;

	beforeEach(function() {
		javabuzz = new Javabuzz();
	});

	describe('knows when a number is', function() {

		it('divisible by 3', function() {

			expect(javabuzz.isDivisibleByThree(3)).toBe(true);

		});

		it ('divisible by 5', function() {

			expect(javabuzz.isDivisibleByFive(5)).toBe(true);

		});

	});

	describe('knows when a number is NOT', function(){

		it('divisible by 3', function() {

			expect(javabuzz.isDivisibleByThree(1)).toBe(false);
		});

		it('divisible by 5', function() {

			expect(javabuzz.isDivisibleByFive(4)).toBe(false);
		});


	});

	describe('knows that have to say', function() {

			it('fizz when is divisible by three', function() {

				expect(javabuzz.says(6)).toEqual('Fizz!');

			});

			it('buzz when is divisible by five', function(){

				expect(javabuzz.says(25)).toEqual('Buzz!');

			});

			it('fizzbuzz when is divisible by fifteen', function() {

				expect(javabuzz.says(45)).toEqual('FizzBuzz!');

			});

	});
});
