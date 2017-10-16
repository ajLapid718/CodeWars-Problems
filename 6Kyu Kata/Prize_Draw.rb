=begin

To participate in a prize draw each one gives his/her firstname.

Each letter of a firstname has a value which is its rank in the English alphabet. A and a have rank 1, B and b rank 2 and so on.

The length of the firstname is added to the sum of these ranks hence a number n. An array of random weights is linked to the firstnames and each n is multiplied by its corresponding weight to get what they call a winning number.

Example: names: COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH weights: [1, 4, 4, 5, 2, 1]

PAUL -> n = length of firstname + 16 + 1 + 21 + 12 = 4 + 50 -> 54 The weight associated with PAUL is 2 so Paul's winning number is 54 * 2 = 108.

Now one can sort the firstnames in decreasing order of the winning numbers. When two people have the same winning number sort them alphabetically by their firstnames.

#Task:

parameters: st a string of firstnames, we an array of weights, n a rank

return: the firstname of the participant whose rank is n (ranks are numbered from 1)

#Example: names: COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH weights: [1, 4, 4, 5, 2, 1] n: 4

The function should return: PauL

#Note: If st is empty return "No participants".

If n is greater than the number of participants then return "Not enough participants".

=end

# My solution

ALPHABET = ("a".."z").to_a

def rank(st, we, n)
  return "No participants" if st.empty?
  first_names = st.split(",")
  return "Not enough participants" if n > first_names.count
  names_to_weight = Hash.new(0)

  first_names.each do |name|
    name.chars.each do |char|
      rank_in_alphabet = ALPHABET.index(char.downcase) + 1
      names_to_weight[name] += rank_in_alphabet
    end
  end

  first_names.each_with_index do |name, idx|
    names_to_weight[name] += name.length
    names_to_weight[name] *= we[idx]
  end

  names_to_weight.sort_by { |k,v| [-v, k] }[n-1].first
end

# Another solution from a Codewars user

def rank(namestring, weight, rank)
  names = namestring.split(/,/)

  return "No participants" if names.empty?
  return "Not enough participants" if rank > names.size

  rank_names(names,weight)[rank-1]
end

def rank_names(names, weight)
  names.sort_by { |n| [-score_name(n) * weight[names.index(n)], n] }
end

def score_name(name)
  name.size + name.upcase.chars.map { |c| c.ord - 64 }.reduce(:+)
end
