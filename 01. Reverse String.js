/*
Problem#1: Reverse String
-------------------------
Create a function to reverse a string input.

Example
-------
 Input: "A quick brown fox jumps over a lazy dog."
Output: ".god yzal a revo spmuj xof nworb kciuq A"
*/

/*
Solution#1
----------
This solution converts the string into a character array, because arrays have tonnes of helper functions.
Apparently, reverse() is just what we need in this case. the join() function converts the character array back into a string.
*/
 function reverse(str){
 	return str.split('').reverse().join('');
 }

/*
Solution#2
----------
This is the standard for loop solution. 
Index 'i' is set to the index of the last character of the string and will decrement for every loop.
Within each loop, the character at index 'i' will be added to string 'reversed'. By the end of the for loop,
string 'reversed' should be the reverse of the string input and be returned.
*/
function reverse(str){
	let reversed = '';
	for(i = str.length - 1; i >= 0; i--){
		reversed += str.charAt(i);
	}
	return reversed;
}

/*
Solution#2A
-----------
This is a variant of solution#2, using a for-of loop instead.
*/
function reverse(str){
	let reversed = '';
	for(let char of str){
		reversed += str.charAt(i);
	}
	return reversed;
}