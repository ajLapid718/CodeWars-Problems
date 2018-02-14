// Write function sumR which returns the sum of values in a given list.
// Try not to cheat; provide a recursive solution.

function sumR(x) {
  return x.length === 0 ? 0 : x[0] + sumR(x.slice(1));
}
