# You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
#
# #Example: longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
#
# n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

def longest_consec(strarr, k)
  return "" if strarr.empty?
  return "" if k < 1
  return "" if k > strarr.length
  arr = []
  next_idx = k

  strarr.each_index do |current_idx|
    arr << strarr[current_idx...next_idx].join("")
    next_idx += 1
  end

  max_length = arr.sort_by { |word| word.length }.last.length
  possibilities = arr.select { |word| word.length == max_length }
  possibilities.sort_by { |word| arr.index(word) }.first
end

# A solution provided by another user whose code invokes the #each_cons method

def longest_consec(strarr, k)
  return "" unless k.between?(1, strarr.length)
  strarr.each_cons(k).map(&:join).max_by(&:length) || ""
end
