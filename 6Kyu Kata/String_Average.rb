# You are given a string of numbers between 0-9. Find the average of these numbers and return it as a floored whole number (ie: no decimal places) written out as a string. Eg:
#
# "zero nine five two" -> "four"
#
# If the string is empty or includes a number greater than 9, return "n/a"

def average_string(s)
  hsh_of_number_names = {
    "zero" => 0,
    "one" => 1,
    "two" => 2,
    "three" => 3,
    "four" => 4,
    "five" => 5,
    "six" => 6,
    "seven" => 7,
    "eight" => 8,
    "nine" => 9
  }

  return "n/a" if s.empty?
  return "n/a" unless s.split.all? { |word| hsh_of_number_names.has_key?(word) }

  arr = []
  s.split.each do |word|
    arr << hsh_of_number_names[word]
  end

  average = (arr.reduce(:+)) / (arr.length)
  hsh_of_number_names.select { |k,v| v == average.floor }.keys.join
end
