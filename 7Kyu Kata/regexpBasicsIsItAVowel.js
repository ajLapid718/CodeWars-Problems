/*

Implement String#vowel?
(in Java StringUtils.isVowel(String))
which should return true if given object is a vowel
false otherwise

*/

// My Solution

String.prototype.vowel = function() {
  return !!this.match(/^[aeiouAEIOU]$/);
};

// Another User's Solution

String.prototype.vowel = function() {
  return /^[aeiou]$/i.test(this) // i is a modifier that performs case-insensitve matching
}                                // RegExp.test() syntax;
