# Given: an array containing hashes of names
#
# Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.
#
# Example:
#
# list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
# # returns 'Bart, Lisa & Maggie'
#
# list([ {name: 'Bart'}, {name: 'Lisa'} ])
# # returns 'Bart & Lisa'
#
# list([ {name: 'Bart'} ])
# # returns 'Bart'
#
# list([])
# # returns ''
# Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.

def list(names)
  return "" if names.empty?

  people = []

  names.each do |hsh|
    people << hsh[:name]
  end

  case people.count
  when 1
    return people.first
  when 2
    return "#{people.first} & #{people.last}"
  else
    return "#{people[0..people.count-2].join(", ")} & #{people.last}"
  end
end
