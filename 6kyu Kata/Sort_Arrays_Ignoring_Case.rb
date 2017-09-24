# Simple sort, but this time sort regardless of upper / lower case.
#
# So the input of
#
# [ "Hello", "there", "I'm", "fine"]
# is translated to
#
# ["fine", "Hello", "I'm", "there" ]

def sortme(names)
  names.sort_by { |word| word.downcase }
end
