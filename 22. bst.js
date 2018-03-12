class Node{
	constructor(data){
		this.data = data;
		this.right = null;
		this.left = null;
	}

	insert(data){
		if(data < this.data && this.left){
			this.left.insert(data);
		} else if(data < this.data){
			this.left = new Node(data);
		} else if(data > this.data && this.right){
			this.right.insert(data);
		} else if(data > this.data){
			this.right = new Node(data);
		}
	}

	contains(data){
		if(this.data === data) return this;

		if(this.data < data && this.right){
			this.right.contains(data);
		} else if(this.data > data && this.left){
			this.left.contains(data);
		}
		return null;
	}
}

// Test code below:
const BST = new Node(5);
BST.insert(3);
BST.insert(7);
BST.insert(2);
BST.insert(4);
BST.insert(6);
BST.insert(8);

console.log(BST.contains(5));
console.log(BST.contains(8));
console.log(BST.contains(2));
console.log(BST.contains(9));