# ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
#
# Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
#
# Please note that using "encode" in Python is considered cheating.

def rot_cipher_helper(word)
	encrypted = []
	alphabet = ("a".."z").to_a
	capital_alphabet = ("A".."Z").to_a

	word.chars.each do |letter|
		ciphered_idx = alphabet.index(letter) + 13 if alphabet.include?(letter)
		ciphered_capital_idx = capital_alphabet.index(letter) + 13 if capital_alphabet.include?(letter)

		if alphabet.include?(letter)
			encrypted << alphabet[ciphered_idx % 26]
		elsif capital_alphabet.include?(letter)
			encrypted << capital_alphabet[ciphered_capital_idx % 26]
		else
			encrypted << letter
		end
	end

	encrypted.join("")
end

def rot13(message)
	message.split.map { |word| rot_cipher_helper(word) }.join(" ")
end
