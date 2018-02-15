/*
Problem#4: Max Chars
--------------------
Create a function to return the most frequent character of a string input.

Examples
--------
 Input: 'ello World!'
Output: 'l'

 Input: 'How quickly can you find out what is so unusual about this paragraph? 
  		 It looks so ordinary that you would think that nothing is wrong with it at all, 
  		 and, in fact, nothing is. But it is unusual. Why? If you study it and think about it, 
  		 you may find out, but I am not going to assist you in any way. 
		 You must do it without coaching. No doubt, if you work at it for long, it will dawn on you. 
		 Who knows? Go to work and try your skill. Par is about half an hour.''
Output: ' ' (Space Character)
Answer: There is no 'e' found anywhere in that paragraph. That is, you were wondering.
*/

/*
Solution#1
----------
Objects in Javascript are basically collection of properties (or key-value pairs). For this problem,
we'll create a new object with keys containing all different characters of the string input. 
Their values will be the frequency that the character occurs.
*/
function maxChar(str){

 	const charMap = {};
 	let max = 0;
 	let maxChar = '';

 	for(let char of str){
 		// We need the OR operator below, because new characters have the value of undefined.
 		// An undefined value plus anything is undefined, so new characters must be initialized with a value of 1.
 		charMap[char] = charMap[char]+1 || 1;
 	}

 	// for-in loops work for objects. Why not for-of loops? I have no idea. 'of' has an 'o' and 'in' doesn't.
 	for(let char in charMap){
 		if (charMap[char] > max){
 			max = charMap[char];
 			maxChar = char;
 		}
 	}
 	return maxChar;
}

/*
Hypothetical Solution
---------------------
Keeping track of characters and their frequencies can be done with an array, but it's going to be more work.
The best way to stay organized would be to have an array (let's call this charTrack) that would push in 
mini-two-sized arrays (let's call this charFreq) for every new character.
The first index of the charFreq would be the the character, while the second index would be its frequency.

Here's an example and an abstract illustration of the organization...

Input: "Hello World"

[ ['H', 1] , ['e', 1] , ['l', 3] , ['o', 1] , ['e', d] ]

Generating charTrack with its charFreq arrays has a runtime of O(n^2) due to array lookups. 
Generating charMap from solution#1 should have a runtime of O(n) since we've used a map (JS Objects are technically maps).

Iterating through the completed charTrack array should be similar to the second for loop of solution#1.
*/