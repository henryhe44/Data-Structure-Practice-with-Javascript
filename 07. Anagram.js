/*
Problem#7: Anagram
------------------
Create a function that will take in two strings and determine if they are anagrams.

Example:
--------

const A = 'William Shakespeare'
const B = 'I\'ll make a wise phrase'
const output = anagram(A,B);

output should be TRUE
*/

/*
Solution#1
----------
An important step in this problem is the sanitization of input strings for easy processing.
Only alphabetical characters matter, so we'll use the replace() method for all strings.
The function shouldn't differentiate between lowercase or uppercase characters, so we'll convert
all uppercase characters to lowercase.

Next, it's necessary to build a character map like the one in problem#4. Each string input
should have their own character map, and it'll help determine whether they are anagrams or not.
*/

// Let's use a helper function to reduce redundancy...
function buildCharMap(str){
	const charMap = {};
	// Regex is used as the first parameter of the replace method.
	// ^ is negation, \w is word character...roughly translates to 'non-word characters' like ! ' ; .
	const strCleaned = str.replace(/[^\w]/g, '').toLowerCase();
	for(let char of strCleaned){
 		charMap[char] = charMap[char]+1 || 1;
	}
 	return charMap
}

function anagram(A,B){
	const charMapA = buildCharMap(A);
	const charMapB = buildCharMap(B);
	console.log(charMapA);
	console.log(charMapB);
	// If the number of keys (or characters) don't match for both maps, they're not anagrams.
	if(Object.keys(charMapA).length !== Object.keys(charMapB).length)
		return false;

	// If the frequency of characters are different, they're not anagrams.
	for(let char in charMapA){
		if(charMapA[char] !== charMapB[char]){
			return false;
		}
	}
	return true;
}

/*
Solution#2
----------
Like many, I failed to realize that if two strings are anagrams of each other, then they
should be the same string when sorted. Javascript arrays have a sort() method that can make life easy...

The javascript implementation of the sort() method depends on whatever browser it's using,
and in Chrome's V8 engine, it uses a quicksort (worse case of O(n^2)).
*/
function stringCleaning(str){
	return str.replace(/[^\w]/g, '')
			  .toLowerCase()
			  .split('')
			  .sort()
			  .join('');
}

function anagram(A,B){
	return ( stringCleaning(A) === stringCleaning(B));
}