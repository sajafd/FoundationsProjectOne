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
	if (number % 2 === 0) {
		return true // if number is even will return true
	} else {
		return false // if number is odd will return false
	}
};

// testing if evenVsOdd function works
// console.log (evenVsOdd(2));
// console.log (evenVsOdd(3));

function filterEvens(numbers) {
	let evenList =[]
	for (let counter = 0 ; counter < numbers.length ; counter++){
		if (evenVsOdd(numbers[counter]) === false) {
		} else {evenList.push(numbers[counter])};
	}
	return evenList;
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
	let oddList =[]
	for (let counter = 0 ; counter < numbers.length ; counter++){
		if (evenVsOdd(numbers[counter]) === true) {
		} else {oddList.push(numbers[counter])};
	}
	return oddList;
};

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
	var sumOfOdds = 0
	// console.log (odds)
	for (let counter = 0 ; counter < odds.length ; counter++){
		// console.log('counter value is: ' + counter);
		// console.log('sum of odds initial value is: ' + sumOfOdds);
		sumOfOdds += odds[counter];
		// console.log('sum of odds final value is: ' + sumOfOdds);
	} return sumOfOdds
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
	let pairList = [];
	if (evenVsOdd(names.length) === true) {
		// console.log ('runnin evens')
		// console.log(pairList);
		for (var counter = 0 ; counter < names.length ; counter+=2){
			// console.log('counter value is: ' + counter);
			if (counter === 0){
				// console.log('counter value is 0, so...');
				pairList[counter]=[names[counter], names[counter+1]]
				// console.log(pairList);
			} else {
				// console.log('counter value is not zero, so...')
				pairList[counter-1]=[names[counter], names[counter+1]]
				// console.log(pairList);
			}
		};
	} else {
		// console.log('running odds')
		// console.log(pairList);
		let lastElement = names.pop()
		// console.log('popped last element. length of list is now: ' + names.length);
		for (var counter = 0 ; counter < names.length ; counter+=2){
			// console.log('counter value is: ' + counter);
			if (counter === 0){
				// console.log('counter value is 0, so...');
				pairList[counter]=[names[counter], names[counter+1]]
				// console.log(pairList);
			} else {
				// console.log('counter value is not zero, so...')
				pairList[counter-1]=[names[counter], names[counter+1]]
				// console.log(pairList);
			}
		pairList.push(lastElement)
	};
};
return pairList;
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