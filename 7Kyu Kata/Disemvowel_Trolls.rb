# Trolls are attacking your comment section!
#
# A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
#
# Your task is to write a function that takes a string and return a new string with all vowels removed.
#
# For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

def disemvowel(str)
  vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

  str.chars.delete_if { |letter| vowels.include?(letter) }.join
end

# Alternatively

def disemvowel(str)
  str.delete('aeiouAEIOU')
end
