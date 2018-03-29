/*

You're a teacher preparing a test for your students.
Each question is worth some number of points.
Some of the questions are new to the students, while others are questions they have already seen and practiced.
Your scoring system doubles the value of new questions.
Your job is to determine the maximum possible score.

Write a function doubleValue that accepts 1) an object of questions (as keys) and points (values) and 2) an array of new questions.
The function should return the test's maximum possible score as an integer, where questions that are new are worth double points.

You can assume that all questions are unique.

Questions are case sensitive.

Example: maxPossibleScore({"a": 1, "b": 2, "c": 3}, ["a", "c"]); // 1 * 2 + 2 + 3 * 2 = 10

*/

function maxPossibleScore(obj, array) {
  let score = 0;
  let arr = array.map(element => element.toString());
  
  for (let key in obj) {
    let val = obj[key];

    if (arr.includes(key)) {
      score = score + (val * 2);
    } else {
      score = score + val;
    }
  }

  return score;
}

// A solution I wrote to become more familiar with JSON.parse() and error handling;

function maxPossibleScore(obj, arr) {
  let score = 0;

  for (let key in obj) {
    let val = obj[key];
    let trueKey;

    try {
      trueKey = JSON.parse(key);
    }
    catch(err) {
      trueKey = key;
    }

    if (arr.includes(trueKey)) {
      score = score + (val * 2);
    } else {
      score = score + val;
    }
  }

  return score;
}
