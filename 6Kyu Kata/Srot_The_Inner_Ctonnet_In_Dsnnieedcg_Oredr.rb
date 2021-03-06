# #Srot the inner ctnnoet in dsnnieedcg oredr
#
# You have to sort the inner content of every word of a string in descending order.
# The inner content is the content of a word without first and the last char.
#
# Some examples:
#
# "sort the inner content in descending order" -> "srot the inner ctonnet in dsnnieedcg oredr"
# "wait for me" -> "wiat for me"
# "this kata is easy" -> "tihs ktaa is esay"
# The string will never be null and will never be empty.
# It will contain only lowercase-letters and whitespaces.
#
# In C++ the string is always 0-terminated.
#
#
# Have fun coding it and please don't forget to vote and rank this kata! :-)
#
# I have also created other katas. Take a look if you enjoyed this kata!

def sort_the_inner_content(str)
  str.split.map { |word| sort_inner_helper(word) }.join(" ")
end

def sort_inner_helper(word)
  if word.length > 1
    word[0] + word[1..-2].chars.sort { |a, b| b <=> a }.join + word[-1]
  else
    word
  end
end
