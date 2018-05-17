/*

Sheldon, Leonard, Penny, Rajesh and Howard are in the queue for a "Double Cola" drink vending machine; there are no other people in the queue.
The first one in the queue (Sheldon) buys a can, drinks it and doubles!
The resulting two Sheldons go to the end of the queue.
Then the next in the queue (Leonard) buys a can, drinks it and gets to the end of the queue as two Leonards, and so on.

For example, Penny drinks the third can of cola and the queue will look like this:

Rajesh, Howard, Sheldon, Sheldon, Leonard, Leonard, Penny, Penny
Write a program that will return the name of the person who will drink the n-th cola.

Note that in the very beginning the queue looks like that:

Sheldon, Leonard, Penny, Rajesh, Howard
##Input

The input data consist of an array which contains at least 1 name, and single integer n.

(1 ≤ n ≤ 1000000000).
##Output / Examples Return the single line — the name of the person who drinks the n-th can of cola.
The cans are numbered starting from 1.
Please note that you should spell the names like this: "Sheldon", "Leonard", "Penny", "Rajesh", "Howard" (without the quotes).
In that order precisely the friends are in the queue initially.

whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1) == "Sheldon"
whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52) == "Penny"
whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230702951) == "Leonard"

*/

function whoIsNext(names, r) {
  let targetNum = r;
  let len = names.length;

  while (targetNum > len) {
    targetNum -= (len-1);
    targetNum = Math.floor(targetNum/2);
  }

  let person = names[targetNum-1];

  return person;
}

/*

One way to look at the problem is to shift() off the first person in the line, hold a reference to that name, and push that name twice at the back of the line.
Then, from there, we would just run through the populated array with a running counter and see which name we land on when we hit the argument r aka the target position.
This approach becomes invalidated due to limitations regarding both time complexity and space complexity.
Shift is costly as it requires each element to slide down by one index position. Moreover, maintaining an array with over a billion elements is a bit much.
Therefore, we have to make some optimizations and think differently.

Through some form of trial, error, and experimentation, a pattern became recognizable. In terms of a purely numerical perspective, the line would essentially "reset" in the
following way. For this explanation, let's assume the array contains five names, like in the example test cases found in the description.


When "r" === 1, the array appeared like so at the end of all necessary operations: ["A", "B", "C", "D", "E"] ===> "A";
When "r" === 5, the array appeared like so at the end of all necessary operations: ["E", "A", "A", "B", "B", "C", "C", "D", "D"] ===> "E";
When "r" === 15, the array appeared like so at the end of all necessary operations: ['E', 'E', 'A', 'A', 'A', 'A', 'B', 'B', 'B', 'B', 'C', 'C', 'C', 'C', 'D', 'D', 'D', 'D', 'E', 'E'] ===> "E";
When "r" === 35, the array appeared like so at the end of all necessary operations: [ 'E', 'E', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'] ===> "E";

Backtracking a bit to when I said the array "resetted" at certain points, I meant that the array would be in the original order except with all of their duplicates.
PseudoExample 1 Of A Reset Point: ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E"];
PseudoExample 2 Of A Reset Point: ["A", "A", "A" "B", "B", "B" "C", "C", "C" "D", "D", "D","E", "E" "E"];
PseudoExample 3 Of A Reset Point: ["A", "A", "A", "A" "B", "B", "B", "B" "C", "C", "C", "C" "D", "D", "D", "D", "E", "E" "E", "E"];

Just to reiterate, the reset points, for an array with five names, followed the pattern of (double + 5), if the number was greater than the length of the array.
1 ---> 5 ---> 15 ---> 35 ---> 75 ---> 155 ---> 315 ---> 635 ---> and so on and so forth.
If we had a counter start at 0 and if we iterated to some integer "r" as we incremented the counter by one on each loop, then the names would be "reset" when the counter was at those points.
That's also assuming we populated the array with the approach centered on shift() and push().

Using that pattern, but flipping it upside-down, we can step through and over each reset point, effectively shedding off the duplicates without allocating extra space or populating an array.
Instead of following the rule of: (double + 5) ----> we can alternatively follow a rule of: (halve - 5) in order to step through each reset point.
However, just like in the example above where "r" === 15, the reset point is what happens after the can of cola has been drank.
Because we want the name of the person who actually drank the can of cola, we need to do (length of array - 1) in order to grab the person before the reset occurs.
In other words, for that part, it's one of those considerations that are typically made in off-by-one errors.

Upon breaking out of that "while loop", we can use the targetNum and then subtract it by 1 in order to reconcile between the zero-index nature of arrays and the one-origin nature of the problem.
This will give us the name of the person we are looking for.

Let's step through another example to show how the pointer slides over accordingly.
Starting Array: ["A", "B", "C", "D", "E"];
TargetPerson: 20;
Output Array: ["B", "B", "B", "B", "B", "C", "C", "C", "C", "D", "D", "D", "D", "E", "E", "E", "E", "A", "A", "A", "A", "A", "A", "A", "A"];
Answer: "B" located at position 20 (aka when the counter hits 20) in the Output Array.
Alternatively, the answer can also be perceived as the "B" in the Starting Array at position 2.

How can we get from 20 to 2?

With the pattern.
20 - 4 ===> 16;
16 / 2 ===> 8;
8 - 4 ===> 4;
4 / 2 ===> 2;

As long as we slide over the pointer accurately, then we grab the target person durectly from the passed in array without populating an array.

Assuming we have an array of five people.
And sort of using the forward-progression-pattern (double + 5) (although that was specifically for finding reset points) combined with the idea of working backwards;
Then...?
By subtracting by four, we effectively...revert back to where we were before we doubled?
Then, by dividing by two, we effectively...undo the double?

Hmmm.
*/
