/*
Problem#21: WidthSearch
-------------------------
Create a function to create an array containing the width of each level.
*/

function treeWidth(root){
	const arr = [root,'s'];
	const counters = [0];
	let widthArray = [];

	while(arr.length > 1){
		const node = arr.shift();
		if(node.data === 's'){
			counters.push[0]
		}
		else{
			arr.push(...node.children);
			widthArray[widthArray.length-1]++;
		}
	}
	return widthArray;
}