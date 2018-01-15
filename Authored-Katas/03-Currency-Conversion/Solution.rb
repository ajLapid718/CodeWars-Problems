# One Possible Solution
def convert_my_dollars(usd, currency)
  vowels = %w[A E I O U]

  if vowels.include?(currency[0])
    actual_rate = CONVERSION_RATES[currency]
  else
    actual_rate = CONVERSION_RATES[currency].to_s.to_i(2)
  end

  proper_amount = usd * actual_rate
  return "You now have #{proper_amount} of #{currency}."
end

# Another Possible Solution
def convert_my_dollars(usd, currency)
  vowels = %w[A E I O U]
  rate_on_display = CONVERSION_RATES[currency]

  if vowels.include?(currency[0])
    proper_rate = rate_on_display
  else
    proper_rate = 0
    rate_on_display.to_s.reverse.chars.each_with_index do |num, idx|
        proper_rate += (num.to_i) * (2**idx)
    end
  end

  proper_amount = usd * proper_rate
  return "You now have #{proper_amount} of #{currency}."
end
