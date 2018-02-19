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
			this.left.constains(data);
		}
		return null;
	}
}