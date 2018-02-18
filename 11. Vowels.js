/*
Problem#11: Vowels
------------------
Create a function to return the number of vowels in a string input.

Example:
--------
 Input: "Hello World!"
Output: 3
*/

/*
Solution#1
----------
The instructor really liked to build on top of the previous problems, 
so I've gotten into that mindset and decided on creating a map containing
all the vowels. The function first sanitizes the string by removing non-word
characters and setting all alphabets to lowercase. Next it iterates the clean
string to count the number of a's, e's, i's, o's, and u's. Finally, it 
iterates the vowel list to sum up the number of vowels and returns it.

I later realized how needlessly complicated this is. It still works!
*/
function vowels(str){
	const vowelList = {
		a:0,
		e:0,
		i:0,
		o:0,
		u:0
	}
	const cleanStr = str.replace(/[^\w]/g, '').toLowerCase();
	for(let i=0; i<cleanStr.length; i++){
		const char = cleanStr[i];
		if(vowelList[char] !== undefined){
			++vowelList[char];
		}
	}
	let sum = 0;
	for(let char in vowelList){
		sum += vowelList[char];
	}
	return sum;
}

/*
Solution#2
----------
In my defense, this solution isn't exactly intuitive and I didn't know
there was a fancy includes() method that would tell me if a substring/character
was in a string. 

In this solution, a string containing 'aeiou' is created and used to check
every character of the input string. If the character is a vowel, the sum
will be incremented and returned at the end of the loop.

The instructor did say that an array containing each vowel would be more intuitive.
Each character could be compared against each array elements for a match.
*/
function vowels(str){
	let sum = 0;
	const check = 'aeiou';

	for(let char of str.toLowerCase()){
		if(check.includes(char)) sum++;
	}
	return sum;
}

/*
Solution#3
----------
Using the match() method can condense the solution into two lines...
*/
function vowels(str){
	const matches = str.match(/[aeiou]/gi);
	return matches ? matches.length : 0;
}