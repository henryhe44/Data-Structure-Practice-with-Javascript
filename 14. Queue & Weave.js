/*
Problem#14A: Queue
------------------
Implement a Queue.
*/

/*
Explanation:
------------
We're finally implementing a data structure!...Well, Queues are already in
javascript because of their super-powerful arrays. You can mimic a queue
through the use of its shift() and push() methods. In this case, only 
unshift() and pop() will be used to implement the queue.

I also learned that ES6 has a new syntax for implementing classes...
Though, it's mostly syntatic sugar because classes have been implemented
prior to ES6 in the form of functions.

ES6 is weird, and liberating.

Anyway, Queues follow a FIFO(first in, first out) order. This means that
elements added in first, are the first to be removed.
*/
class Queue{
	constructor(){
		this.data = [];
	}
	add(e){
		this.data.unshift(e);
	}
	remove(){
		return this.data.pop();
	}
	peek(){
		return this.data[this.data.length-1];
	}
}

/*
Problem#14B: Weave Queue
------------------------
Create a function that takes in 2 queues, and generates a new queue with
the elements from the input queues "woven in".

Example
-------
 Input: Q1 = [3,2,1], Q2 = [8,7,6,5,4]
Output: Q3 = [8, 7, 6, 3, 5, 2, 4, 1]
*/

/*
Solution
--------
This problem is fairly straightforward. While there are still elements 
in Q1 and Q2, we need to remove their elements and add it into Q3.
*/
function weave(Q1, Q2){
	const Q3 = new Queue();
	while(Q1.peek() || Q2.peek()){
		if(Q1.peek()) Q3.add(Q1.remove());	
		if(Q2.peek()) Q3.add(Q2.remove());	
	}
	return Q3;
}

/*
Test Code
---------
*/
const Q1 = new Queue();
const Q2 = new Queue();

for(let i = 1; i <= 3; i++){
	Q1.add(i);
}

for(let i = 4; i <= 8; i++){
	Q2.add(i);
}

const Q3 = weave(Q1,Q2);
console.log(Q3);