# Create a function isAlt() that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.

# isAlt("amazon")
# // true
# isAlt("apple")
# // false
# isAlt("banana")
# // true

# Arguments consist of only lowercase letters.

def is_alt(s)
  staging_area = []
  staging_area << s[0]

  consonants = "bcdfghjklmnpqrstvwxyz"
  vowels = "aeiou"

  s.chars[1..-1].each do |letter|
    if consonants.include?(letter)
      staging_area << letter unless consonants.include?(staging_area.last)
    end
    if vowels.include?(letter)
      staging_area << letter unless vowels.include?(staging_area.last)
    end
  end

  staging_area.join == s
end
