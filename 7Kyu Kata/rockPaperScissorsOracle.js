/*

You are the rock paper scissors oracle.

Famed throughout the land, you have the incredible ability to predict which hand gestures your opponent will choose out of rock, paper and scissors.

Unfortunately you're no longer a youngster, and have trouble moving your hands between rounds.
For this reason, you can only pick a single gesture for each opponent.
If it's possible for you to win, you will, but you're also happy to tie.

Given an array of gestures — for example ["paper", "scissors", "scissors"] — return the winning gesture/s in the order in which they appear in the title, separated by a forward slash.
For example, if rock and scissors could both be used to win you would return:

"rock/scissors"

If it's not possible for you to win then return:

"tie"

See https://en.wikipedia.org/wiki/Rock%E2%80%93paper%E2%80%93scissors if you're not familiar with rock paper scissors.

Second attempt at my first Kata...

*/

// My initial solution;
function oracle(gestures) {
  let result = [];

  result.push(simulateRound(gestures, "rock", "scissors"));
  result.push(simulateRound(gestures, "paper", "rock"));
  result.push(simulateRound(gestures, "scissors", "paper"));

  return result.filter(element => element).join("/") || "tie";
}

function simulateRound(gestures, myGesture, losingGesture) {
  let wins = 0;
  let ties = 0;
  let losses = 0;

  for (let i = 0; i < gestures.length; i++) {
    let currentGesture = gestures[i];
    if (currentGesture === losingGesture) {
      wins++;
    }
    else if (currentGesture === myGesture) {
      ties++;
    }
    else {
      losses++;
    }
  }

  return wins > losses ? myGesture : false;
}

// An alternative solution, which solves the problem in one pass;
// Core Approach: If we determine that there are more "scissors than "papers" in the array, then we know that using a "rock" gesture will yield more wins than losses;
// The same principle applies to the other gestures;
function oracle(gestures) {
  let result = [];

  let obj = {
    "rock": 0,
    "paper": 0,
    "scissors": 0
  }

  for (let i = 0; i < gestures.length; i++) {
    let gesture = gestures[i];
    obj[gesture]++;
  }

  if (obj.scissors > obj.paper) result.push("rock");
  if (obj.rock > obj.scissors) result.push("paper");
  if (obj.paper > obj.rock) result.push("scissors");

  return result.join("/") || "tie";
}
