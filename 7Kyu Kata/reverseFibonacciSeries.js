/*

Write a function to generate 'n' number of fibonacci series (0,1,1,2,3...) in reverse order.

The output should be a string of fibonacci series in the reverse order upto the given number.

eg.

reverseFibo(3)  // => '110'
reverseFibo(10) // => '3421138532110'

*/

function reverseFibo(n) {
  let fibs = [0,1];

  for (let i = 0; i < n; i++) {
    let prev = fibs[fibs.length - 2];
    let curr = fibs[fibs.length - 1];
    fibs.push(prev + curr);
  }
  
  let targetNums = fibs.slice(0, n);
  let reversedTargetNums = targetNums.reverse().join('');

  return reversedTargetNums;
}
