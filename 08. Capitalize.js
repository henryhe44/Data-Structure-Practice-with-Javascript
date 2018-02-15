/*
Problem#8: Capitalize
------------------
Create a function that will capitalize the first letter of each word.

Example:
--------
 Input: 'alas, poor yorick! i knew him, horatio, a fellow of infinite jest, of most excellent fancy'
Output: 'Alas, Poor Yorick! I Knew Him, Horatio, A Fellow Of Infinite Jest, Of Most Excellent Fancy'
*/

/*
Solution#1
----------
My solution does something that academics are notorious for...making assumptions. 
In this case, I'm assuming here's a space character after every word and punctuation.
It's a perfectly reasonable assumption! I swear! What sort of person types without following such a basic principle?

Ok ok, I get that people can "type~leik!this,xD!", but it makes for an interesting solution.

If that assumption is true, then after every space, there is a first letter of a word...
*/
function capitalize(str){
	// The first letter should always be uppercase.
	let result = str.charAt(0).toUpperCase();
	for(let i = 1; i < str.length; i++){
		if(str.charAt(i - 1) === ' '){
			result += str.charAt(i).toUpperCase();
		}
		else result += str.charAt(i);
	}
	return result;
}

/*
Solution#2
----------
This solution is far more straightforward and uses the split() method with the space character being the delimiter.
An array of 'words' is created and each 'word' from the input string needs to be processed. The first character must
be capitalized, and the remaining characters must be copied onto the created 'word'.
*/
function capitalize(str){
	let words = [];
	for(let word of str.split(' ')){
		// Slice() copies all characters starting from the first index to the last.
		words.push( word[0].toUpperCase() + word.slice(1) );
	}
	return words.join(' ');
}