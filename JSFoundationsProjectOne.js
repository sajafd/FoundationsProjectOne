/**
 * Receives an array of numbers
 * Filters out odd numbers
 * Returns an array of the even numbers
 *
 * Example usage:
 *
 *     filterEvens([1, 2, 3, 4, 5])
 *     returns [2, 4]
 *
 */

function evenVsOdd(number){
	if (num % 2 === 0) {
		return true // if number is even will return true
	} else {
		return false // if number is odd will return false
	}
};

function filterEvens(numbers) {
	for (let counter = 0 ; counter < numbers.length ; counter++){
		if (evenTest(numbers[counter]) === false) {
		} else {numbers.splice(counter,1)};
	}
	return numbers;
};

/**
 * Receives an array of numbers
 * Filters out even numbers
 * Returns an array of the odd numbers
 *
 * Example usage:
 *
 *     filterOdds([1, 2, 3, 4, 5])
 *     returns [1, 3, 5]
 *
 */
function filterOdds(numbers) {
	for (let counter = 0 ; counter < numbers.length ; counter++){
		if (evenTest(numbers[counter]) === true) {
		} else {numbers.splice(counter,1)};
	}
	return numbers;
}

/**
 * Receives an array of numbers
 * Returns the sum of the odd numbers in that array
 *
 * Example usage:
 *
 *     sumOdds([1, 2, 3, 4, 5])
 *     returns 9
 *
 */
function sumOdds(numbers) {
	let odds = filterOdds(numbers);
	odds.reduce(function(a, b) {  // lines 60 and 61 including the .reduce function are from StackOverflow; I am not sure how they work
		return a + b ;
	}, 0)
}

/**
 * Receives an array of names
 * Makes the array into an array of pairs
 * Order of names and pairs doesn't matter
 * if the length of the array is odd, the last element is in an array on its own
 * Returns the array of pairs
 *
 * Example usage:
 * 
 *     pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish', 'Hussein'])
 *     returns [['Mishmish', 'Fawas'], ['Asis', 'Hussein'], ['Hamsa']]
 * 
 *     pairs(['Aziz', 'Hamza', 'Fawaz', 'Mishmish'])
 *     returns [['Mishmish', 'Fawaz'], ['Aziz', 'Hamza']]
 * 
 */
function makePairs(names) {
	pairs = []
	for (let counter = 0 ; counter <= numbers.length ; counter+2){
		if (counter === 0){
		pairs[counter] = [names[counter] , names [counter+1]]
	}; else if (counter < numbers.length && counter !=== numbers.length-1) {
		pairs[counter-1] = [names[counter] , names [counter+1]]
	}; else if (counter === numbers.length-1){
		pairs[counter-1] = [names[counter-1]]
	};
	};
	};

/**************************************************
The following code runs the functions defined above
***************************************************/
let numbers = [153,67,9,34,7,67,342,7,34,8656,2,124,5,43];
let instructors = ["Hamza", "Mshary", "Aziz", "Hussein", "Fawaz"];

// uncomment the following lines to run and test your code.
// filterEvens
evens = filterEvens(numbers);
console.log(evens);

// sumOdds
sum = sumOdds(numbers);
console.log(sum);

// makePairs
let pairs = makePairs(instructors);
console.log(pairs);