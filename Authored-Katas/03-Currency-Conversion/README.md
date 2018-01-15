Link: https://www.codewars.com/kata/currency-conversion

# Description

You are currently in the United States of America. The main currency here is known as the United States Dollar (USD). You are planning to travel to another country for vacation, so you make it today's goal to convert your USD (all bills, no cents) into the appropriate currency. This will help you be more prepared for when you arrive in the country you will be vacationing in.

Given an integer (`usd`) representing the amount of dollars you have and a string (`currency`) representing the name of the currency used in another country, it is your task to determine the amount of foreign currency you will receive when you exchange your United States Dollars.

However, there is one minor issue to deal with first. The screens and monitors at the Exchange are messed up. Some conversion rates are correctly presented, but other conversion rates are incorrectly presented. For some countries, they are temporarily displaying the standard conversion rate in the form of a number's binary representation!

You make some observations. If a country's currency begins with a vowel, then the conversion rate is unaffected by the technical difficulties. If a country's currency begins with a consonant, then the conversion rate has been tampered with.

Normally, the display would show 1 USD converting to 111 Japanese Yen. Instead, the display is showing 1 USD converts to 1101111 Japanese Yen. You take it upon yourself to sort this out in order to get an accurate conversion.

```
function(1, "Japanese Yen") => "You now have 111 of Japanese Yen."
function(10, "Japanese Yen") => You now have 1110 of Japanese Yen."
function(100, "Japanese Yen") => "You now have 11100 of Japanese Yen."
```

Using your understanding of converting currencies in conjunction with the preloaded code shown below, properly convert your dollars into the correct amount of foreign currency.

```ruby
# Preloaded Code Below

CONVERSION_RATES = {
  "Armenian Dram" => 478,
  "Bangladeshi Taka" => 1010010,
  "Croatian Kuna" => 110,
  "Czech Koruna" => 10101,
  "Dominican Peso" => 110000,
  "Egyptian Pound" => 18,
  "Guatemalan Quetzal" => 111,
  "Haitian Gourde" => 1000000,
  "Indian Rupee" => 63,
  "Japanese Yen" => 1101111,
  "Kenyan Shilling" => 1100110,
  "Nicaraguan Cordoba" => 11111,
  "Norwegian Krone" => 1000,
  "Philippine Piso" => 110010,
  "Romanian Leu" => 100,
  "Samoan Tala" => 11,
  "South Korean Won" => 10000100011,
  "Thai Baht" => 100000,
  "Uzbekistani Som" => 8333,
  "Venezuelan Bolivar" => 1010,
  "Vietnamese Dong" => 101100000101101
}

```

# Sample Tests

![Sample Tests](/Misc/03-Example-Tests.PNG)

- [ ] Supports multiple programming languages
- [x] Contains more than one-hundred test cases
- [x] Provides example test cases for the user
- [x] Randomizes test cases per user submission
- [x] Uses `Test.assert_equals(actual_value, expected_value)` instead of `Test.expect()`
- [x] Uses `Test.describe()`