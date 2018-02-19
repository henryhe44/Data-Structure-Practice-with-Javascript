/*
Problem#20: Tree
----------------------
Implement a Tree

Explanation:
------------
A tree begins with a node called the "root". Every node has
a piece a data, and holds 'child(ren)' or references to other nodes.
*/

class Node {
	constructor(e){
		this.data = e;
		this.children = [];
	}

	add(e){
		this.children.push(new Node(e));
	}

	remove(e){
		for(let i = 0; i<this.children.length; i++){
			if(e === this.children[i].data){
				this.children.splice(i,1);
			}
		}
	}
}

class Tree {
	constructor(){
		this.root = null;
	}

	// Breadth-first Traversal
	// This traversal method goes through each node by their "level".
	// Let's look at a military hiearchy and print positions of highest rank to lowest:
	// A General is ranked the highest, so it'll be printed first.
	// Colonel is the second highest rank, and it will be printed second.
	// Major is the third highest rank, and it will be printed third.
	traverseBF (fn){
		let arr = [this.root];
		while(arr.length){
			const node = arr.shift();
			// The most straight-forward solution is to push the children 
			// of each node into the arr variable on line 43.
			for(let child of node.children){
				arr.push(child);
			}
			//Lines 48 to 50 can be condensed to the line of code below:
			//arr.push(...node.children);

			fn(node);
		}
	}

	// The depth-first traversal is a bit tricky to explain
	// The algorithm tries to burrow as deep as possible into the tree
	// before it starts to backtrack.
	// It will visit every parent node, then their children, and their children's children...
	traverseDF (fn){
		let arr = [this.root];
		while(arr.length){
			// The parent/current node is visited first...
			const node = arr.shift();
			// Then the algorithm burrows into its children...
			// So the children are placed into the beginning of the array
			// That way, the algorithm will visit them before the higher-leveled nodes.
			for(let child of node.children){
				arr.unshift(child);
			}
			fn(node);
		}
	}
}

// Test code below. Remember to copy the code above before using the code below.
const head = new Node('GENERAL');
const militaryHiearchy = new Tree();
head.add('COLONEL1');
head.add('COLONEL2');
head.add('COLONEL3');
head.children[0].add('Major1');
head.children[0].add('Major2');
head.children[0].add('Major3');
head.children[1].add('Major1');
head.children[1].add('Major2');
head.children[1].add('Major3');
head.children[2].add('Major1');
head.children[2].add('Major2');
head.children[2].add('Major3');
militaryHiearchy.root = head;
militaryHiearchy.traverseBF((node) => {
	console.log(node.data);
});
militaryHiearchy.traverseDF((node) => {
	console.log(node.data);
});