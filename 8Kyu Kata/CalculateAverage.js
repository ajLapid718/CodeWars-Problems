// Write function avg which calculates average of numbers in given list.

function find_average(array) {
  var sum = array.reduce(function(a,b) {return a+b})
  return (sum/array.length);
}
