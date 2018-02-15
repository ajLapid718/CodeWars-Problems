/*

You've been going to the gym for some time now and recently you started taking care of your nutrition as well.
You want to gain some weight but who wants to bother counting calories every day.
It said somewhere that protein is the foundation of building muscle, so let's try to calculate the total amount of calories and proteins we take in.

Task:

Given an array of meals where each element is a string in the form
'300g turkey, 300g potatoes, 100g cucumber'

Find out how many proteins and calories you consumed.
You like to keep things simple so all values will be expressed in grams.
In case you didn't know every gram of protein and carbohydrate has 4 calories, while 1 gram of fat provides 9 calories.

An object food (in Ruby $food) is preloaded for you that contains the information about the given food per 100 grams:

var food = {
  chicken: [20, 5, 10], // per 100g chicken has 20g of protein, 5 grams of carbohydrates and 10 grams of fat.
  eggs: [10, 5, 15], // protein: 10g , carbs: 5g , fats: 15g
  salmon: [27, 0, 10],
  beans: [8, 25, 0],
  bananas: [1, 23, 0],
  ...
  ...
}

Round your results to 2 decimal places and return a string in the form "Total proteins: n grams, Total calories: n".
Delete all trailing zeros on every float and remove trailing point if the result is an integer.

*/

function bulk(arr) {
  if (arr.length === 0) {
    return 'Total proteins: 0 grams, Total calories: 0';
  }

  var stringOfValuesAndFood = arr.toString();
  var gramAmounts = stringOfValuesAndFood.match(/\d+/g);
  var foodNames = stringOfValuesAndFood.match(/[a-z][a-z]+/g);
  var i = 0;
  var allFood = {};

  for (var dish of foodNames) {
    allFood[dish] = allFood[dish] + parseInt(gramAmounts[i]) || parseInt(gramAmounts[i]);
    i++;
  }

  var totalProtein = 0;
  var totalCalories = 0;

  for (var meal in food) {
    if (foodNames.includes(meal) == true) {
      var nutritionFacts = food[meal];
      var proteinCalAmountPer100Grams = nutritionFacts[0] * 4;
      var carbCalAmountPer100Grams = nutritionFacts[1] * 4;
      var fatCalAmountPer100Grams = nutritionFacts[2] * 9;
      var amountOfGrams = parseInt(allFood[meal]);
      var targetRatio = amountOfGrams / 100;

      totalProtein += (targetRatio * (proteinCalAmountPer100Grams/4));
      totalCalories += (targetRatio * proteinCalAmountPer100Grams);
      totalCalories += (targetRatio * carbCalAmountPer100Grams);
      totalCalories += (targetRatio * fatCalAmountPer100Grams);
    }
  }

  return `Total proteins: ${totalProtein} grams, Total calories: ${totalCalories}`;
}
