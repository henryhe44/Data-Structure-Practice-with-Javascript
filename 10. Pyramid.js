/*
Problem#10: Pyramid
-------------------
Create a function to print a "pyramid" with the height equal to the input.

Example:
--------
 Input: 3
Output:   *
		 ***
		*****
*/

/*
Solution#1
----------
This solution follows the same structure of the solution for Problem#09.
There's a 'line' variable that will be reset by printed by the outer loop,
after it goes through an inner loop that determines how it will appear.

In this case, I drew a bunch of examples and looked for some patterns to be expressed in math.

Let O's represent white spaces, and let X represent the characters we need to print.

n =			 2				  3					   4
			OXO				OOXOO				OOOXOOO
			XXX 			OXXXO				OOXXXOO
							XXXXX				OXXXXXO
												XXXXXXX

Each 'line' or row of the pyramid has a length of n*2-1 (zero-based numbering does not apply here).
The midpoint of each line is n-1 (zero-based numbering applies here).
Notice how the bound of the X increases as the pyramid descends.
This is represented by the following inequality: midpoint - row =< X =< midpoint + row

Let's validate these findings with an input of 4.
The midpoint is (4 - 1) = 3
The line length is (4 * 2 - 1) = 7

	  0 1 2 3 4 5 6		
	1 O O O X O O O 	3 =< X =< 3
	2 O O X X X O O 	2 =< X =< 4
	3 O X X X X X O 	1 =< X =< 5
	4 X X X X X X X 	0 =< X =< 6

Thinking this through is the hardest part. Writing the program isn't.
*/
function pyramid(n){
	const lineLength = n*2-1;
	const midpoint = n-1;

	for(let i=0; i<n; i++){
		let line = '';
		for(let j = 0; j<lineLength; j++){
			if(j >= midpoint - i && j <= midpoint + i){
				line += 'x';
			}
			else line += 'o';
		}
		console.log(line);
	}
}

/*
Solution#2 (Recursive)
----------------------
Looking at the first solution, the inner loop can be kept while
the outer loop can be replaced by the recursion that will take place.

It's important to keep track of the i-th row so that function knows
where the X's and O's go, so we'll need to tack on an extra parameter 
for the function.

Keep in mind that the function needs to start with an 'i' equal to 0
to generate a proper pyramid. It can be set to any other number to
generate an incomplete pyramid, so long as it's less than 'n'.

Also, like the previous problem, the order of the recursive call and
print can be switched to generate an upside-down pyramid.
*/
function pyramid(n,i){
	// If the i-th row is greater than or equal to n, it's done.
	if(i >= n) return;
	const midpoint = n-1;
	const lineLength = 2*n-1;
	let line = '';
	for(let k=0; k<lineLength; k++){
		if(k >= midpoint - i && k <= midpoint + i){
			line += 'x';
		}
		else line += 'o';
	}
	console.log(line);
	pyramid(n,++i);
}