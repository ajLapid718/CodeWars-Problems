/*

Typically, reversing an array is a pretty straightforward task even for novice programmers.
But not when a crowd of angry zombies scratching your door, looking for a fresh brains.
In this case even skilled ninja-geek probably prefer to quickly push his code on github to have enough time to find a chainsaw.
So there's two obstacles:

1. Your code needs to be as short as possible, in fact not longer than 28 characters
2. Because you are scared and stressed you have forgotten how to use the standard reverse() method

#Input: an array containing data of any types. Ex: [1,2,3,'a','b','c',[]]
#Output: [[],'c','b','a',3,2,1]

*/

weirdReverse=a=>a.sort(e=>1)

/*

let arr = [1,2,3,4,7,6];
X: Array.prototype.sort(callback) can be used to sort an array in ascending order ===> arr.sort((a,b) => a - b);
  If a is less than b, then a negative number is returned;
    This causes the built-in (under-the-hood) comparator function to place "element a" in a lower index than "element b"; // (1 - 2) === -1;
  If a is greater than b, then a positive number is returned;
    This causes the built-in (under-the-hood) comparator function to place "element a" in a higher index than "element b"; // (7 - 6) === 1;

Y: Array.prototype.sort can be used to sort an array in descending order ===> arr.sort((a,b) => b - a);
If b - a (6 - 7) returns a negative number (aka b is less than a) then "element b" is placed in a higher index than "element a"; // (6 - 7) === -1;
If b - a (2 - 1) returns a positive number (aka b is greater than a) then "element b" is placed in a lower index than "element a"; // (2 - 1) === 1

The important takeaways summarized:
In both example X and example Y, if a is equal to b, then a 0 is returned and nothing changes in terms of order or sorting;
In both example X and example Y, if a negative number is returned, then based on the callback criteria, the numbers are in order;
In both example X and example Y, if a positive number is returned, then based on the callback criteria, the numbers are NOT in order;

Using this information, the fact that a positive return value signifies that the numbers are NOT in order...
...we can leverage that and then run the solution code which looks like:

let weirdReverse = arr => arr.sort(function() {
  return 1;
});

The built-in (under-the-hood) comparator (not seen) will always return a positive number (line 40), and because this means that the numbers are NOT in order...
...swaps will then be made on each comparison since the entire array is considered out of order which will effectively emulate the functionality and outcome...
...of Array.prototype.reverse();

One thing to note: the callback function does not require any parameters, so the proper syntax for the solution should be:

weirdReverse = a => a.sort(_ => 1); OR weirdReverse = a => a.sort(() => 1);

Another thing to note: because JS switches between sorting methods behind-the-scenes based on space and time complexity performance concerns relative...
...to the amount of elements in the array being sorted, this improvised/contrived solution is very limited and very circumstantial in nature;

*/
