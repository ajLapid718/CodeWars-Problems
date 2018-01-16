/* Write function bmi that calculates body mass index (bmi = weight / height ^ 2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese" */

function bmi(weight, height) {
  var bodyMassIndex = (weight) / (height * height)
  
  switch(true) {
    case (bodyMassIndex <= 18.5):
      return "Underweight";
    case (bodyMassIndex <= 25.0):
      return "Normal";
    case (bodyMassIndex <= 30.0):
      return "Overweight";
    case (bodyMassIndex > 30.0):
      return "Obese";
  }
}
