# In this kata, you've to count letters in a given string and return the letter count in a hash with 'letter' as key and count as 'value'. The key must be 'symbol' instead of string in Ruby and 'char' instead of string in Crystal.
#
# Example:
#
# letter_count('arithmetics') #=> {:a=>1, :c=>1, :e=>1, :h=>1, :i=>2, :m=>1, :r=>1, :s=>1, :t=>2}

def letter_count(str)
  counter_hsh = Hash.new(0)

  str.chars.map(&:to_sym).each { |letter_as_sym| counter_hsh[letter_as_sym] += 1 }

  counter_hsh
end

# Alternatively

def letter_count(str)
  counter_hsh = Hash.new(0)

  str.chars.each { |letter| counter_hsh[letter.to_sym] += 1 }

  counter_hsh
end
