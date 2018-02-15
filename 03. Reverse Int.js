/*
Problem#3: Reverse Int
----------------------
Create a function to reverse an integer input.

Example
-------
 Input: 123
Output: 321
*/

/*
Solution#1
----------
A while loop is appropriate in this case, as we don't know how many digits the integer input will be, nor does it matter.
So long as integer 'n' is positive, the function should take off the digit in the first place using modulo then and
add it into the first place of 'reversed'. Before that happens, 'reversed' needs to have its digits shift over one place,
which can be accomplished by multiplying it by 10. By the end of the while loop, 'reversed' should contain the reverse order
of the integer input and will be returned.
*/
function reverseInt(n){
 	let reversed = 0;
 	while(n > 0){
 		reversed = (reversed * 10) + (n % 10);
 		n = Math.floor(n / 10);
 	}
 	return reversed;
}

/*
Solution#1 (FIXED)
------------------
Don't forget that the integer may be negative...
*/
function reverseInt(n){
 	let sign = Math.sign(n);
 	let reversed = 0;

 	n *= sign; // this forces n to be positive.
 	while(n > 0){
 		reversed = (reversed * 10) + (n % 10);
 		n = Math.floor(n / 10);
 	}
 	return reversed * sign;
}

/*
Solution#2
----------
Why bother with my unintuitive attempt when you can convert your integer input into a string and reverse it?
Apparently, there's also sign() function in the Math object of Javascript that keeps the sign of numbers.
*/
function reverseInt(n){
 	let reverse = parseInt(
 		n.toString()
 		.split('')
 		.reverse()
 		.join('')
 	)
 	reverse *= Math.sign(n);
 	return reverse;
}