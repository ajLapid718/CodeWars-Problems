# You have invented a time-machine which has taken you back to ancient Rome. Caeser is impressed with your programming skills and has appointed you to be the new information security officer.
#
# Caeser has ordered you to write a Caeser cipher to prevent Asterix and Obelix from reading his emails.
#
# A Caeser cipher shifts the letters in a message by the value dictated by the encryption key. Since Caeser's emails are very important, he wants all encryptions to have upper-case output, for example:
#
# If key = 3 "hello" -> KHOOR If key = 7 "hello" -> OLSSV
#
# Input will consist of the message to be encrypted and the encryption key.

def caeser(message, key)
  return message.upcase if key == 0

  encrypted = ""
  alphabet = ("a".."z").to_a

  message.split("").each do |element|
    element.chars.each do |letter|
      if alphabet.include?(letter.downcase)
        ciphered_idx = alphabet.index(letter.downcase) + key
        encrypted << alphabet[ciphered_idx % 26]
      else
        encrypted << letter
      end
    end
  end
  encrypted.upcase
end
