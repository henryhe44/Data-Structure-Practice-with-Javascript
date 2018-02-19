/*
Problem#17: Midpoint of LinkedList
----------------------------------
Create a function to find the midpoint of a linkedlist WITHOUT the use of a counter variable.
*/

/*
Solution
--------
Prepare to be amazed!...by the power of two pointers.

Have a slow pointer that moves once, and have a fast pointer that moves twice.
By the time the fast pointer gets to the end, the slow pointer ought to be in the middle.

Note: Use code from problem#16 to implement a linkedlist.
*/

function midpoint(list){
	// If the list is empty, return
	if(!list.head) return;
	let slow = list.getHead();
	let fast = list.getHead();

	while(fast.next && fast.next.next){
		slow = slow.next;
		fast = fast.next.next;
	}
	return slow;
}

// Test this function using lines 1 - 197 from problem#16, then run midpoint(list).