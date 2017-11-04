Link: https://www.codewars.com/kata/high-stakes-binary-blackjack

# Description

Binary blackjack is a game that adopts some, but not all, of the rules and objectives from the standard blackjack card game. This is a high-stakes game by nature. Therefore, some of the rules are a bit extreme, making it slightly more difficult for participants at the table to cheat or calculate the risk. It comes down to whether they are lucky or unlucky.

There will be two decks the dealer will deal from. One deck (X) contains cards with values from 1 up to and including 11. The other deck (Y) contains cards with values from 1 up to and including 100.

A player may be dealt either two cards or three cards from the dealer, no more and no less. If a player receives two cards, then the first card will come from X and the second card will come from Y. If a player receives three cards, then the first card will come from X, the second card will come from X, and the third card will come from Y. In other words, the last card of a player's hand will always originate from Y.

One twist involves the values of the cards. The cards are written in an integer's binary representation, so it is the responsibility of the player to convert the integer to its base-ten representation. Please test out your code at this point to ensure everything is going according to plan.

From there, another twist unfolds. The player has to figure out if his or her hand results in: Classic Blackjack!, Remixed Blackjack!, Super Blackjack!, Bust!, 21! or Unlucky!

- A hand that achieves the outcome of Classic Blackjack! means that the first two cards of the hand have added up to the value of 21 the way it is calculated in traditional blackjack, with a 10 and an 11. This can only happen in a two-card hand. Again, this can only occur in a two-card hand.

- A hand that achieves the outcome of Remixed Blackjack! means that the first two cards of the hand have added up to the value of 21 in a way that differs from the classical way.

- A hand that achieves the outcome of Super Blackjack! means that the first two cards result in either a classical or remixed blackjack and the sum of the three cards is an even value.

- A hand that achieves the outcome of Bust! means that the attempt (hit) at a Super Blackjack was unsuccessful. The player had some form of a blackjack but unfortunately failed to create a Super Blackjack.

- A hand that achieves the outcome of 21! means that the first two cards did not result in any form of a blackjack but the sum of the cards together results in the value of 21.

- A hand that achieves the outcome of Unlucky! is either under or over the value of 21 with no sign of a blackjack at all.

Examples:

```
A: blackjack_outcome(1010, 1011) => "Classic Blackjack!"
B: blackjack_outcome(1111, 110) => "Remixed Blackjack!"
C: blackjack_outcome(1010, 1011, 1001101) => "Super Blackjack!"
D: blackjack_outcome(1010, 1011, 1000000) => "Bust!"
E: blackjack_outcome(111, 111, 111) => "21!"
F: blackjack_outcome(1010, 111, 111) => "Unlucky!"
G: blackjack_outcome(101, 101, 11) => "Unlucky!"
H: blackjack_outcome(1010, 111) => "Unlucky!"

A: 1010 and 1011 => 10 + 11 == 21
B: 1111 and 110 is equivalent to 15 + 6 == 21
C: 1010, 1011, and 1001101 is equivalent to 10 + 11 + 77 == 98
D: 1010, 1011, and 1000000 is equivalent to 10 + 11 + 64 == 85
E: 111, 111, and 111 is equivalent to 7 + 7 + 7 == 21
F: 1010, 111, and 111 is equivalent to 10 + 7 + 7 == 24
G: 101, 101, and 11 is equivalent to 5 + 5 + 3 == 13
H: 1010 and 111 is equivalent to 10 + 7 == 17
```

# Sample Tests

![Sample Tests](/Misc/02-Example-Tests.PNG)

- [ ] Supports multiple programming languages
- [x] Contains more than one-hundred test cases
- [x] Provides example test cases for the user
- [x] Randomizes test cases per user submission
- [x] Uses `Test.assert_equals(actual_value, expected_value)` instead of `Test.expect()`
- [x] Uses `Test.describe()`
