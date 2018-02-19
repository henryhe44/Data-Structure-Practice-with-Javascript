/*
Problem#19: fromLast
--------------------
Create a function to return a node n places away from the tail.
*/

/*
Solution
--------
This instructor really is driving home the importance of these pointers...
Because it's used again. Still a very elegant and simple solution.

Since we need the node n places from the tail, we'll use a pointer (called P2) to move
ahead n places. While P2 has a next node to go to, our pointer behind P2 (called P1) 
will move to the next node. P2 will do the same.

By the time the algorithm finishes, P2 should be on the tail, while P1 should be on
the desired node.
*/
function fromLast(list, n){
	let P1 = list.getHead();
	let P2 = list.getHead();
	for(let i = 0; i < n; i++){
		P2 = P2.next;
	}
	while(P2.next){
		P1 = P1.next;
		P2 = P2.next;
	}
	return P1;
}

// Test the function using lines 1 - 197 from Problem#16 and enter the code below:
fromLast(list, 0);
fromLast(list, 1);
fromLast(list, 2);
fromLast(list, 3);
fromLast(list, 4);
fromLast(list, 5); // Error here, which is good!