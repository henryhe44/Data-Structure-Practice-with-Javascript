/*
Problem#9: Steps
------------------
Create a function to print a "half-pyramid" with the height equal to the input.

Example:
--------
 Input: 3
Output: *
		**
		***
*/

/*
Solution#1
----------
Fairly straightforward solution using two for-loops. The outer for-loop
iterates through all values from i to n and creates a new 'line'. 
The inner for-loop iterates from j to i, adding a new '*' character to line
in each iteration. Once that's complete, the line will be printed and it
continues until i is equal to n.
*/
function steps(n){
	for(let i = 0; i<n; i++){
		let line = '';
		for(let j = 0; j<i; j++){
			line += '*';
		}
		console.log(line);
	}
}

/*
Solution#2 (Recursive)
----------------------
This recursive solution looks like a deconstructed version of solution#1.
It again has a 'line' variable that goes through a while loop to tack on the 
necessary '*' characters. Before it can be printed, the function is called again
with with an input of 'n-1'.

Note: Switch the order of the recursive call and the print method for an upside-down result.
*/
function steps(n){
	// if n is zero, print nothing.
	if (n === 0) return;

	let line = '';
	let i = 0;
	while(i < n){
		line += '*';
		i++;
	}
	steps(n-1);
	console.log(line);
}