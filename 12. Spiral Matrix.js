/*
Problem#12: Spiral Matrix
-------------------------
Create a function to create a matrix of size n by n and fill it with numbers of 
increasing order, with the center being the largest.

Example:
--------
 Input: 4
Output:  1   2   3  4
	    12  13  14  5
	    11  16  15  6
	    10   9   8  7
*/

/*
Solution
--------
I'm not quite sure if there is another (better) solution, but here goes.

It's really helpful to think of the algorithm as a 4 stage cycle, that will
repeat until it gets to the center.

The most important part of the algorithm is to keep track of four things:
starting column, end column, starting row, and end row.
-----------------------------------------------------------------------------
Stage 1:
The algorithm begins on the starting row, moving right and filling each space.
It stops upon reaching the last column. Before it moves onto the next stage, 
it must be incremented for the next cycle. 

 BEFORE: 							AFTER:
 Start Row = 0						Start Row = 1
 MOVE RIGHT							STOP	
 []  []  []  []						 1   2   3   4
 []  []  []  []						[]  []  []  []
 []  []  []  []						[]  []  []  []
 []  []  []  []						[]  []  []  []
-----------------------------------------------------------------------------
Stage 2:
The algorithm begins on the last column, moving down and filling each space.
It stops upon reaching the last row. Before it moves onto the next stage, 
it must be decremented for the next cycle. 

 BEFORE: 							AFTER:
 End Col = 3						End Col = 2
 MOVE DOWN 							STOP
  1   2   3   4					 	 1   2   3   4
 []  []  []  []						[]  []  []   5
 []  []  []  []						[]  []  []   6
 []  []  []  []						[]  []  []   7
-----------------------------------------------------------------------------
Stage 3:
The algorithm begins on the last row, moving left and filling each space.
It stops upon reaching the starting column. Before it moves onto the next stage, 
it must be decremented for the next cycle. 

 BEFORE: 							AFTER:
 End Row = 3						End Row = 2
 MOVE LEFT 							STOP
  1   2   3   4					 	 1   2   3   4
 []  []  []   5						[]  []  []   5
 []  []  []   6						[]  []  []   6
 []  []  []   7						10   9   8   7
-----------------------------------------------------------------------------
Stage 4:
The algorithm begins on the starting col, moving up and filling each space.
It stops upon reaching the starting row. Before it moves onto the next stage, 
it must be incremented for the next cycle. 

 BEFORE: 							AFTER:
 Start Col = 0						Start Col = 1
 MOVE UP							STOP
  1   2   3   4					 	 1   2   3   4
 12  []  []   5						[]  []  []   5
 11  []  []   6						[]  []  []   6
 10  9  8   7						10   9   8   7
-----------------------------------------------------------------------------
Repeat all 4 stages until the center is reached. As long as the starting row
remain "above" the end row, and starting column remain to the "left" of the 
end column, the loop should continue.
*/
function spiralMatrix(n){
	const matrix = [];
	for(let i = 0; i<n; i++){
		matrix.push([]);
	}

	let number = 1;
	let startRow = 0;
	let endCol = n-1;
	let endRow = n-1;
	let startCol = 0;

	while(startRow <= endRow && startCol <= endCol){

		//startRow: Fill numbers to right until reaching endCol
		for(let i=startCol; i <= endCol; i++){
			matrix[startRow][i] = number;
			number++;
		}
		startRow++;

		//endCol: Fill numbers below until reaching endRow
		for(let i=startRow; i <= endRow; i++){
			matrix[i][endCol] = number;
			number++;
		}
		endCol--;

		//endRow: Fill numbers to left until reaching startCol
		for(let i=endCol; i >= startCol; i--){
			matrix[endRow][i] = number;
			number++;
		}
		endRow--;

		//startCol: Fill numbers above until reaching startRow
		for(let i=endRow; i >= startRow; i--){
			matrix[i][startCol] = number;
			number++;
		}
		startCol++;
	}
	return matrix;
}