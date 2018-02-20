/*
Problem#21: levelWidth
-------------------------
Create a function to return an array containing the width of each level.
*/

/*
Solution
--------
I wasn't too fond of the instructor's solution, so I checked the Q&A section 
of the Udemy course and found this solution. I find it simple and intuitive.

Let's say we're working with the tree below:

			  G
			/ | \
		   C  C  C
		  /| / \ |\
		 M M M M M M

There is a results array to record the width of each level, and a nodes array 
containing the root (or 'G') as its first element. This is important to get the while
loop started.

In the first iteration...
	- the length of the nodes array is 1 because it has ['G']
	- a temporary array called children is created
	- the forEach method on the nodes array is called
		- for every node in the nodes array, push its children
		  into the children array
			- 'G' has the children ['C,C,C'], push those in
	- the nodes array is assigned to the children array
	- the nodes array now contains ['C','C','C']

The nodes array is not empty, start the second iteration

In the second iteration...
	- the length of the nodes array is 3 because it has ['C,C,C']
	- a temporary array called children is created
	- the forEach method on the nodes array is called
		- for every node in the nodes array, push its children
		  into the children array
			- each 'C' node has children ['M','M']
	- the nodes array is assigned to the children array
	- the nodes array now contains ['M','M','M','M','M','M']

The nodes array is not empty, start the third iteration

In the third iteration...
	- the length of the nodes array is 6 because it has ['M','M','M','M','M','M']
	- a temporary array called children is created
	- the forEach method on the nodes array is called
		- for every node in the nodes array, push its children
		  into the children array
			- each 'M' node has NO children
	- the nodes array is assigned to the children array
	- the nodes array now contains [[],[],[],[],[],[]]

The nodes array is empty. Return the results array.
*/

// Test this function by copying lines 1-93 from problem#20.
// Then run this function with 'head' as its parameter.
function levelWidth(root) {
    const result = [];
    let nodes = [root];
    while(nodes.length) {
	    result.push(nodes.length);
	    const children = [];
	    nodes.forEach(
	    	node => children.push(...node.children)
	    );
	    nodes = children;
    }
    return result;
}
