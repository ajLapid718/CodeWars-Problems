# Implement the function longest(array,n) where you will be given an array of strings and then return the nth longest string in that array.
# e.g. arr = ['Hello','World','Codewars','Katas'] n = 3; should return 'World' because 'Codewars' length = 8 , 'Hello' length = 5, so that is the 2nd longest word and then 'World' (although also word length of 5, 'World' is after 'Hello' in the array). When words have the same lengths, treat them in the order in which they exist in the array.
# Array will never be empty and n > 0 always.

def longest(array,n)
  hsh = Hash.new(0)
  array.each { |word| hsh[word] += word.length }
  hsh.sort { |a,b| (a.last <=> b.last) == 0 ? (array.index(a) <=> array.index(b)) : (b.last <=> a.last) }[n-1].first
end

# Another solution provided by Codewars users

def longest(arr,n)
  arr.sort_by { |word| [-word.length, arr.index(word)] }[n-1]
end

# Another solution provided by Codewars users; it shows that we only need to sort by the length

def longest(arr,n)
  arr.sort_by { |word| -word.length }[n-1]
end
