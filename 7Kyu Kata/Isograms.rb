# An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

# is_isogram("Dermatoglyphics" ) == true
# is_isogram("aba" ) == false
# is_isogram("moOse" ) == false # -- ignore letter case

def is_isogram(string)
  string.downcase.chars.map { |letter| string.downcase.count(letter) }.all? { |amt| amt == 1 }
end

# Alternatively

def is_isogram(string)
  string.downcase.chars == string.downcase.chars
end