/*
Problem#16: LinkedList
----------------------
Implement a LinkedList.

Explanation:
------------
LinkedLists are a series of nodes that contain data and a reference
to the node next of it.
*/
class Node{
	constructor(e, next = null){
		this.data = e;
		this.next = next;
	}
}

class LinkedList{

	// A head node is pretty useful, but not necessary.
	// I also like to keep a size variable
	constructor(){
		this.head = null;
		this.size = 0;
	}

	// Add an element to beginning of list.
	// Note the new element should be the head.
	prepend(e){
		this.head = new Node(e,this.head);
		this.size++;
	}

	/*
	If the list is empty, use the prepend method to assign 
	the new node to be the head and avoid the extra code.

	Otherwise, keep going until we reach the tail, then
	assign the tail's 'next' to be the new node.
	*/
	append(e){
		if(!this.head){
			this.prepend(e);
		}
		else{
			const last = this.getTail();
			last.next = new Node(e);
			this.size++;
		}
	}

	/*
	If i is out of bounds, just add the node to the end.
	If i is zero, then the node is added to the beginning; prepend() can handle it.
	Otherwise, get the node at the (i-1) place and call it 'nodePrev'.
	Get the next node after 'nodePrev' and call it 'nodeCurr'.
	Create a new node and have its 'next' set to 'nodeCurr'.
	Finally, set the 'next' of 'nodePrev' to the new node.

	Note: The size variable is handy here!
	*/
	insertAt(i,e){
		if(i >= this.size || this.size === 0){
			this.append(e);
		} else if(i === 0){
			this.prepend(e);
		} else {
			const nodePrev = this.getAt(--i);
			const nodeCurr = nodePrev.next;
			const nodeNew = new Node(e, nodeCurr);
			nodePrev.next = nodeNew;
			this.size++;
		}
	}

	/*
	If the list is empty, there's nothing to remove. Return.
	Otherwise, destroy the reference to the current head and you're done.
	*/
	removeFront(){
		if (!this.head) return;
		this.head = this.head.next;
		this.size--;
	}

	/*
	If the list is empty, there's nothing to remove. Return.

	If the last has one node, it is the head and it must be removed.

	Otherwise, we'll need need to keep track of two nodes:
		- the current node that the algorithm is on
		- the previous node of the current node
	If the current node has a next node, reassign the previous node
	to be the current node and the current node to be the next node.
	Repeat until there is no 'next' node.
	Finally, destroy the reference to current node by setting the
	previous node's 'next' to null.
	*/
	removeLast(){
		if(!this.head) return;

		if(!this.head.next){
			this.head = null;
			this.size--;
			return;
		}

		let prev = this.head
		let curr = this.head.next;
		while(curr.next){
			prev = curr;
			curr = curr.next;
		}
		prev.next = null;
		this.size--;
	}

	/* 
	The algorithm for this method is similar to insertAt(i).
	If i is out of bounds, throw a message stating so.
	If i is 0, let removeFront() handle it.

	Otherwise, find the node before the i'th place and call it nodePrev.
	The node two places over will be the 'next' of nodePrev.
	This effectively skips over the current node, destroying a reference to it.
	*/
	removeAt(i){
		if(i >= this.size || this.size === 0){
			throw "index is out of bounds";
		} else if(i === 0){
			this.removeFront();
		} else {
			const nodePrev = this.getAt(--i);
			const nodeNext = nodePrev.next.next;
			nodePrev.next = nodeNext;
			this.size--;
		}
	}

	// If the head's gone, so is the rest of the list.
	clear(){
		this.head = null;
		this.size = 0;
	}

	// Getter methods
	getHead(){return this.head;}

	getTail(){
		if(!this.head) return null;

		let node = this.head;
		while(node.next) node = node.next;
		return node;
	}

	/*
	If i is out of bounds, throw a message stating so.
	Otherwise, create a counter variable to keep track of the current place.
	Keep moving 'next' until the counter is equal to i.
	By then, the algorithm should reach the i'th node.
	*/
	getAt(i){
		if(i >= this.size){
			throw "index exceeds size";
		}
		let counter = 0;
		let node = this.head;
		while(counter < i){
			node = node.next;
			counter++;
		}
		return node;
	}

	/*
	The forEach() method takes in a function and applies it to all nodes of a linkedList.
	*/
	forEach(fn){
		let node = this.head;
		while(node){
			fn(node);
			node = node.next;
		}
	}
}

/*
Test code
*/
const list = new LinkedList();
list.append('a');
list.append('b');
list.append('c');
list.append('d');
list.append('e');
list.getHead();
list.getTail();