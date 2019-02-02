/*

Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious.
Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance.
See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0.
You can mutate the Fighter objects.

Example:
function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}

*/

// We have two fighters: fighter1 and fighter2;
// We're also given which of the two fighters will attack first;
// The fight will end when either fighter1 has a health of 0 or fighter2 has a health of 0;
// In the context of a "while" loop, the above will be our stop condition;
// Whoever has health by the end of the fight is the winner, and we should output their name;
// Within the loop, we should simulate each fighter attacking one another;
// If the name of fighter1 is equivalent to the value of firstAttacker, then fighter1 attacks first;
// If that is not the case, then fighter2 is the first to attack;

// My solution;
function declareWinner(fighter1, fighter2, firstAttacker) {
  let primaryAttacker;
  let secondaryAttacker;

  if (fighter1.name === firstAttacker) {
    primaryAttacker = fighter1;
    secondaryAttacker = fighter2;
  }
  else {
    primaryAttacker = fighter2;
    secondaryAttacker = fighter1;
  }

  while (true) {
    secondaryAttacker.health -= primaryAttacker.damagePerAttack;
    if (secondaryAttacker.health <= 0) return primaryAttacker.name;
    primaryAttacker.health -= secondaryAttacker.damagePerAttack;
    if (primaryAttacker.health <= 0) return secondaryAttacker.name;
  }
}

// Solution provided by a fellow Codewars user;
function declareWinner(fighter1, fighter2, firstAttacker) {
  let fac1 = Math.ceil(fighter1.health / fighter2.damagePerAttack);
  let fac2 = Math.ceil(fighter2.health / fighter1.damagePerAttack);

  if (fac1 < fac2) {
    return fighter2.name;
  }
  else if(fac2 < fac1) {
    return fighter1.name;
  }
  else {
    return firstAttacker;
  }
}
