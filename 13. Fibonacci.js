/*
Problem#13: Fibonacci
---------------------
Create a function that will generate the n'th fibonacci term

Example:
--------
 Input: 9
Output: 1 1 2 3 5 8 13 21 34
*/

/*
Solution#1 (Recursive)
----------------------
A very quick and dirty solution with O(2^n) function calls.
Probably the first answer that anyone would ever give.

Here's an illustration showcasing why we'll end up with O(2^n):
					
							fib(5)
						   /     \
						  /       \
						 /         \
						/           \
					   /	         \
				 fib(4)               fib(3)
			    /      \             /      \
			   /        \           /        \
		    fib(3)      fib(2)   fib(2)     fib(1)
		    /    \
		   /      \
	    fib(2)   fib(1)
						
With an n = 5, we need 9 recursive calls in total. Work is doubled
as n is incremented...

Side Note: Runtime is really O(1.618^n), according to math nerds.
They also say that 1.618 is the golden ratio. I hope these facts will wow
potential interviewers!
*/
function fib(n){
	if (n < 2) return n;
	return fib(n-1) + fib(n-2);
}

/*
Solution#2 (Iterative)
----------------------
Let's store the results in an array and push in fibonacci
terms until we reach the n'th term. O(n) runtime due to pushing
every term up to n into an array, and O(n) space complexity because
of the use of an array.
*/
function fib(n){
	const result = [0,1];
	for(let i = 2; i <= n; i++){
		const a = result[i-1];
		const b = result[i-2];
		result.push(a+b);
	}
	return result[n];
}

/*
Solution#3 (My Personal Favorite)
---------------------------------
This is my own solution that I like to use, and builds on top of
solution#2. I'm not sure if it can be considered memoization, but
notice how you need only the last two terms to get the current term?

I figured an array of size 3 is the minimal space required, and the
modulo operator is extremely helpful here. Using the modulo operator,
the algorithm can loop back to the beginning of the array when it
reaches the end. Since the third-last term isn't too helpful, it
should be overwritten with the current fibonacci term.
*/
function fib(n){
	const cache = [0,1,1];
	if(n =< 2) return cache[n];
	let i = 3;
	while(i <= n){
		const a = cache[(i-1) % 3];
		const b = cache[(i-2) % 3];
		cache[i % 3] = a + b;
		i++;
	}
	return cache[n % 3];
}

/*
Solution#4 (Memoization)
------------------------
This is the instructor's solution employing the memoization technique.
I'm not too fond of it, but here's the gist of what's going on:

The memoize function takes in a function, storing previous results of the
input function into a cache object. If the argument used in the fib function
is present in the cache function, it will be brought out for quicker computation.

Otherwise, the generated result will be stored into the cache for the next 
recursive call.
*/
function memoize(fn){
	const cache = {};
	return function(...args){
		if(cache[args]){
			return cache[args];
		}
		const result = fn.apply(this.args);
		cache[args] = result;
		return result;
	}
}

function fib(n){
	if(n < 2) return n;
	return fib(n-1) + fib(n-2);
}

fib = memoize(fib);