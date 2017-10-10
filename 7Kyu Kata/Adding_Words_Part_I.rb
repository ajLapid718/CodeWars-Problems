# This is the first part of this kata series. Second part is here and third part is here

# Add two English words together!

# Implement a class Arith (struct struct Arith{value : &'static str,} in Rust) such that

#   //JavaScript

#   var k = new Arith("three");
#   k.add("seven"); //this should return "ten"
#   //c++

#   Arith* k = new Arith("three");
#   k->add("seven"); //this should return string "ten"

#   //Rust
#   let c = Arith{value: "three"};
#   c.add("seven") // this should return &str "ten"

# Input - Will be between zero and ten and will always be in lower case
# Output - Word representation of the result of the addition. Should be in lower case

# My solution (I really wanted to invoke #zip for the first time)
class Arith
  NUMBERS = (0..20).to_a
  NUMBERS_IN_WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"]
  DICTIONARY = Hash[NUMBERS.zip(NUMBERS_IN_WORDS)]

  def initialize(num_word)
    @num_word = num_word
  end

  def add(num_as_a_word)
    result = DICTIONARY.key(@num_word) + DICTIONARY.key(num_as_a_word)
    DICTIONARY[result]
  end
end

# Another solution provided by a Codewars user which capitalizes on the indices to handle the arithmetic

class Arith
  NUMS = ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty"]

  def initialize(first)
    @first = first
  end

  def add(second)
    NUMS[NUMS.index(@first) + NUMS.index(second)]
  end
end
