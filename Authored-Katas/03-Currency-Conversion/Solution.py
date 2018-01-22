def convert_my_dollars(usd, currency):
  vowels = ["A", "E", "I", "O", "U"]

  if currency[0] in vowels:
    actual_rate = CONVERSION_RATES[currency]
  else:
    actual_rate = int(str(CONVERSION_RATES[currency]), 2)

  proper_amount = usd * actual_rate
  return "You now have {} of {}.".format(proper_amount, currency)
