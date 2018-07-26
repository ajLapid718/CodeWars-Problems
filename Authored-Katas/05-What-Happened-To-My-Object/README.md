Link: https://www.codewars.com/kata/what-happened-to-my-object

# Description

Given an input called `obj`, the goal is to determine whether the object is or is not frozen, sealed, or extensible.

**INPUT**: An object where the keys are letters from the English alphabet and the values are either letters from the English alphabet and/or integers.
<br>
**OUTPUT**: A boolean indicating whether or not the input object exists in a certain condition.

These are the three functions that need to be defined:

```js
function isFrozen(obj) {
  // return true or false;
};

function isSealed(obj) {
  // return true or false;
};

function isExtensible(obj) {
  // return true or false;
};
```

EXAMPLES:

```js
let exampleObjOne = {a: 33, b: 44, c: 55};
Object.freeze(exampleObjOne);
isFrozen(obj) === true;

let exampleObjTwo = {a: 66, b: 77, c: 88};
Object.seal(exampleObjTwo);
isSealed(exampleObjTwo) === true;

let exampleObjThree = {a: 99, b: 110, c: 121};
Object.preventExtensions(exampleObjThree)
isExtensible(exampleObj) === false;

let exampleObjFour = {a: 132, b: 143, c: 154};
isExtensible(exampleObjFour) === true;
isFrozen(exampleObjFour) === false;
isSealed(exampleObjFour) === false;

```

HINTS:

If an object is frozen, then:
* we cannot create or add a new property to it
* we can read from it
* we cannot update a property on it
* we cannot delete a property on it

If an object is sealed, then:
* we cannot create or add a new property to it
* we can read from it
* we can update a property on it
* we cannot delete a property on it

If an object is extensible, then:
* we can create or add a new property to it
* we can read from it
* we can update a property on it
* we can delete a property on it

For the purposes of this kata, the input object can only exist in one, single condition at a time. For example, if the input object is frozen, it is only frozen. It is not both sealed and frozen at the same time. It is just frozen.

NOTE: The native `Object.isFrozen()`, `Object.isSealed()`, and `Object.isExtensible()` methods are disabled for this exercise, but please feel free to refer to the MDN Web Docs to reach a more thorough and more complete understanding of this kata.

All cases to consider for this kata are included in the Sample Tests Section, so please feel free to click "Run Sample Tests" as many times as necessary.

Happy coding ^.^

By the way, please check out the other katas I've authored as well:
* https://www.codewars.com/kata/most-consecutive-zeros-of-a-binary-number
* https://www.codewars.com/kata/frequency-analysis-with-buckets/

# Sample Tests

![Sample Tests](/Misc/05-Example-Tests.gif)

- [] Supports multiple programming languages
- [x] Contains more than one-hundred test cases
- [x] Provides example test cases for the user
- [x] Randomizes test cases per user submission
- [x] Uses `Test.assertEquals()`
- [x] Uses `Test.describe()`
- [x] Uses `Test.before()`
