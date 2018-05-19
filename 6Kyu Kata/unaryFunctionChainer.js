/*

Your task is to write a higher order function for chaining together a list of unary functions.
In other words, it should return a function that does a left fold on the given functions.

chained([a,b,c,d])(input)
Should yield the same result as

d(c(b(a(input))))

*/

// Initially;
function chained(functions) {
  function inner(input) {
    for (let i = 0; i < functions.length; i++) {
      let fn = functions[i];
      input = fn(input);
    }
    return input;
  }

  return inner;
}

// Alternatively;
function chained(functions) {
  function inner(input) {
    return functions.reduce((acc, currFn) => currFn(acc), input);
  }

  return inner;
}

/*

Initially, we are passed an array of functions. By the end of it all, we are supposed to pass an input value through every function in order.
Essentially, we are attempting to take the input value and transform, or reduce, it to one value as the afternmath of going through each function.

Assuming I maintain the proper scope and leverage closure, if I set the starting value for the accumulator to be the input, and return the value of the current function with the passed in input,
then I would be following the instructions provided by the prompt.

The overarching idea is similar to this:
const folder = a => b => c => a + b + c;
folder(4)(7)(20); // 31;

To recap, for an array of three functions, the objective is to get the input value (val) to go through the first function (fnOne), and return a value (newVal).
Afterwards, the newVal should go through/be passed into the second function (fnTwo), which returns another newVal.
Lastly, the most recent newVal should go through/be passed into the third function (fnThree), which returns the final result.

This will complete the folding of the unary functions from left to right.

*/
