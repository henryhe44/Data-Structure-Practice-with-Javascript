/*
Problem#6: chunkArray
---------------------
Create a function that will take in an array and a size. 
The array should be broken into subarrays with its size being equal to the size input.

Example:
--------

const arr = [1, 2, 3, 4, 5, 6, 6, 7, 8];
const size = 3;

const output = chunkArray(arr, size);

output
> (3) [Array(3), Array(3), Array(3)]
	> 0:(3) [1, 2, 3]
	> 1:(3) [4, 5, 6]
	> 2:(3) [6, 7, 8]
*/

/*
Solution#1
----------
For once, my attempt is shorter and more straightforward than the solutions from the course instructor!
Anyway, the solution will a while loop that will continue until the input array is empty. 
Every iteration will push a 'chunk' into an initialized array, and this chunk will be generated using the splice() method.
splice() keeps the solution straightforward, since it remove elements starting on index 0 and stops before index 'size'.
*/
function chunkArray(arr,size){
	const arrChunked = [];
	while(arr.length > 0){
		arrChunked.push( arr.splice(0,size) );
	}
	return arrChunked;
}

/*
Solution#2
----------
This solution isn't as straightforward, but uses a for-of loop to iterate through all elements of the input array.
Every iteration will create a 'chunk' variable to keep track of the subarray that the loop is currently filling.
chunk.length is equal to size, the 'chunk' needs to be pushed onto an array and a new 'chunk' must be started.
Otherwise, it will keep filling the 'chunk' to the input size.

A handy feature that I didn't know was you could push arrays with elements inside. Neat!
*/
function chunkArray(arr,size){
	const arrChunked = [];
	for(let element of arr){
		const chunk = arrChunked[arrChunked.length-1];
		// In the first iteration, chunk doesn't exist. The '!chunk' condition accounts for that.
		if(!chunk || chunk.length === size){
			arrChunked .push([element]);
		}
		else chunk.push(element);
	}
	return arrChunked;
}

/*
Solution#3
----------
There's another solution from the instructor using the slice() method. It's similar to solution#1 with some key differences.
The most important difference being that you must keep track of the range where the subarray or 'chunks' is being generated.
*/
function chunkArray(arr,size){
	const arrChunked = [];
	let index = 0;
	while(index < arr.length){
		let chunk = arr.slice(index, index+size);
		index += size;
	}
	return arrChunked;
}