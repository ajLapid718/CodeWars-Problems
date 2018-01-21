function convertMyDollars(usd, currency) {
  var vowels = ["A", "E", "I", "O", "U"];
  var rateOnDisplay = CONVERSION_RATES[currency];

  if (vowels.includes(currency[0])) {
    var properRate = rateOnDisplay;
  } else {
    var properRate = 0;
    var reversedDigits = rateOnDisplay.toString().split("").reverse();

    for (var i = 0; i < reversedDigits.length; i++) {
      properRate += (parseInt(reversedDigits[i])) * (2 ** i);
    }
  }
  
  var properAmount = usd * properRate;
  return `You now have ${properAmount} of ${currency}.`
}
