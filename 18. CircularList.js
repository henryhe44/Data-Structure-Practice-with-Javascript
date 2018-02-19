/*
Problem#18: CircularList
------------------------
Create a function that will check if a linkedlist is circular or not.
*/

/*
Solution
--------
The fast and slow pointer comes in yet again! This time, if the slow
pointer catches up to the faster pointer, the list is definitely circular.

This algorithm is pretty similar to problem#17, so the code is similar.
*/
function circular(list){
	let slow = list.getHead();
	let fast = list.getHead();

	while(fast.next && fast.next.next){
		slow = slow.next;
		fast = fast.next.next;
		if(slow === fast) return true;
	}
	return false;
}

// Test this function by copying lines 1 - 197 from problem#16, 
// then run the code below:
console.log('Is this circular?' + ' ' + ( circular(list) ? 'Yes' : 'No'));
list.getTail().next = list.getHead();
console.log('Is this circular now?' + ' ' + ( circular(list) ? 'Yes' : 'No'));