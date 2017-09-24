# Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.
#
# Examples:
#
# # returns "theStealthWarrior"
# to_camel_case("the-stealth-warrior")
#
# # returns "TheStealthWarrior"
# to_camel_case("The_Stealth_Warrior")

def to_camel_case(str)
  if str.include?("-")
    pieces = str.split("-")
  elsif str.include?("_")
    pieces = str.split("_")
  else
    return str
  end

  pieces[0] + pieces[1..-1].map(&:capitalize).join
end
