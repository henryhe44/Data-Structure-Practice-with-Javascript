/*
Problem#2: Palindrome
---------------------
Create a function to check if a string input is a palindrome or not.

Example
-------
 Input: 'racecar'
Output: TRUE

 Input: 'Is this a palindrome?'
Output: FALSE
*/

/*
Solution#1
----------
This solution utilizes a for-loop that iterates from the beginning to the midpoint of a string.
Within every loop, the function will compare the character at index 'i' to the character at the i'th
place away from the end of the string. If they are not the same, the function will return false.
If the loop gets to the midpoint and fails to trigger the if-condition, then the function returns true.
*/
 function palindrome(str){
 	let len = Math.floor(str.length/2);
 	for(i = 0; i < len; i++){
 		if(str.charAt(i) !== str.charAt(str.length - 1 - i)){
 			return false;
 		}
 	}
 	return true;
 }

/*
Solution#2
----------
You know, if a string is equal to the reverse of itself, then it is a palindrome...
*/
 function palindrome(str){
 	const reversed = str.split('').reverse().join('');
 	return str === reversed;
 }

/*
Solution#3
----------
This solution is just being fancy with arrow functions. 
It checks whether the character at index 'i' matches the character at the i'th place away from the end.
*/
 function palindrome(str){
 	return str.split('').every((char,i)) => {
 		return char === str.charAt(str-i-1);
 	}
 }