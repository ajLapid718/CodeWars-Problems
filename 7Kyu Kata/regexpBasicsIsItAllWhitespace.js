/*

Implement String#whitespace?(str) (Ruby), String.prototype.whitespace(str) (JavaScript), String::whitespace(str) (CoffeeScript), or whitespace(str) (Python),
which should return true/True if given object consists exclusively of zero or more whitespace characters,
false/False otherwise.

*/

String.prototype.whitespace = function() {
  if (this.length === 0) {
    return true;
  }

  return /^[\s]+$/g.test(this);
}
