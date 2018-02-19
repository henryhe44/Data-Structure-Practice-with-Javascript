/*
Problem#15A: Stack
------------------
Implement a Stack.
*/

/*
Explanation:
------------
Very similar to the Queue implementation, except stacks follow a LIFO
(last in, first out) order. This means that the last element added
will be the first element to be removed.

To implement the stack, the push() and pop() method from the JS array 
will be used.
*/
class Stack{
	constructor(){
		this.data = [];
	}
	push(e){
		this.data.push(e);
	}
	pop(){
		return this.data.pop();
	}
	peek(){
		return this.data[this.data.length-1];
	}
}

/*
Problem#15B: Implement Queue w/ Two Stacks
------------------------------------------
For once, the title is pretty self-explanatory.
*/

/*
Solution
--------
Not a terribly difficult problem, requires a bit of thought.
Please see comments for each method below.
*/
class Queue{

	// As the problem stated, you need two stacks.
	constructor(){
		this.S1 = new Stack();
		this.S2 = new Stack();
	}

	// We'll pretend that the top of Stack S1 will be the last element of our Queue
	add(e){
		this.S1.push(e);
	}

	// transfer is a helper method to reduce redundancy in remove() and peek().
	static transfer(from,to){
		while(from.peek()) to.push( from.pop() );
	}

	/*
	Here's where things get interesting...
	If we assume the top of S1 to be the last element of the Queue, 
	then the very bottom of S1 is the first element of the Queue.
	To reach to the bottom of S1, we'll need to transfer its elements to S2.
	The very top of S2 SHOULD hold the bottom of S1. Pop that and return it!
	Afterwards, everything from S2 should be transfered back to S1.
	*/
	remove(){
		Queue.transfer(this.S1,this.S2);
		const result = this.S2.pop();
		Queue.transfer(this.S2,this.S1);
		return result;
	}

	peek(){
		Queue.transfer(this.S1,this.S2);
		const result = this.S2.peek();
		Queue.transfer(this.S2,this.S1);
		return result;
	}
}

/*
Test Code
---------
*/
const Q1 = new Queue();
for (let i = 1; i <= 10; i++){
	Q1.add(i);
}

console.log(Q1);
console.log(Q1.remove());
console.log(Q1)
console.log(Q1.peek());
console.log(Q1)