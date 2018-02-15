/*
Problem#5: Fizzbuzz
--------------------
Create a function to print all numbers from 1 to n. 
If the number is a multiple of 3, print 'fizz'.
If the number is a multiple of 5, print 'buzz'.
If the number is a multiple of 3 AND 5, print 'fizzbuzz'.
Otherwise, just print out the current number.

Examples
--------
 Input: 15
Output: 1
		2
		fizz
		4
		buzz
		fizz
		7
		8
		fizz
		10
		11
		fizz
		13
		14
		fizzbuzz
*/

/*
THE ONLY SOLUTION
-----------------
The advice from the lecturer is not to go crazy and overcomplicate things. Keep it simple and straightforward (KISS Principle).
A for loop containing a bunch of conditions should do the trick.
*/

function fizzbuzz(n){
	for(let i = 1; i<=n; i++){
		if(i % 15 === 0) console.log('fizzbuzz');
		else if(i % 3 === 0) console.log('fizz');
		else if(i % 5 === 0) console.log('buzz');
		else console.log(i);
	}
}