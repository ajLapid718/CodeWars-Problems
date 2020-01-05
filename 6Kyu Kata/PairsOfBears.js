/*

Description:
In order to prove it's success and gain funding, the wilderness zoo needs to prove to environmentalists that it has x number of mating pairs of bears.

You must check within string (s) to find all of the mating pairs, and return a string containing only them. Line them up for inspection.

Rules: Bears are either 'B' (male) or '8' (female), Bears must be together in male/female pairs 'B8' or '8B', Mating pairs must involve two distinct bears each ('B8B' may look fun, but does not count as two pairs).

Return an array containing a string of only the mating pairs available. e.g:

'EvHB8KN8ik8BiyxfeyKBmiCMj' ---> 'B88B' (empty string if there are no pairs)

and true if the number is more than or equal to x, false if not:

(6, 'EvHB8KN8ik8BiyxfeyKBmiCMj') ---> ['B88B', false];

x will always be a positive integer, and s will never be empty

*/

// "B8", one pair of bears consisting of a male and a female, respectively;
// "8B", one pair of bears consisting of a female and a male, respectively;
// "B8B", one pair of bears consisting of a male and a female...
// ...once a pair is established, the members of that pair cannot be members of another pairing;

// A simple example to work through for the edge case would be "B8B" or "8B8";
// If we encounter a "B" or an "8", we should check if the next character is an "8" or a "B", respectively;
// If this is the case, then after incrementing the counter we are keeping track of, we should move the pointer keeping track of the current index to skip the following iteration (increment idx by 1);

function bears(x, s) {
  let pairsOfBears = "";
  let amountOfPairs = 0;
  let verdict;
  
  for (let i = 0; i < s.length - 1; i++) {
    let currCharacter = s[i];
    let foloCharacter = s[i+1];
    
    if (currCharacter === "B" && foloCharacter === "8") {
      pairsOfBears = pairsOfBears + "B8";
      amountOfPairs++;
      i++;
    }
    else if (currCharacter === "8" && foloCharacter === "B") {
      pairsOfBears = pairsOfBears + "8B";
      amountOfPairs++;
      i++;
    }
  }
  
  verdict = amountOfPairs >= x ? true : false;
  
  return [pairsOfBears, verdict];
}