/*

Introduction
Digital Cypher assigns to each letter of the alphabet unique number.
For example:

 a  b  c  d  e  f  g  h  i  j  k  l  m
 1  2  3  4  5  6  7  8  9 10 11 12 13
 n  o  p  q  r  s  t  u  v  w  x  y  z
14 15 16 17 18 19 20 21 22 23 24 25 26

Instead of letters in encrypted word we write the corresponding number, eg. The word scout:

 s  c  o  u  t
19  3 15 21 20

Then we add to each obtained digit consecutive digits from the key.
For example.

In case of key equal to 1939:

   s  c  o  u  t
  19  3 15 21 20
 + 1  9  3  9  1
 ---------------
  20 12 18 30 21

   m  a  s  t  e  r  p  i  e  c  e
  13  1 19 20  5 18 16  9  5  3  5
+  1  9  3  9  1  9  3  9  1  9  3
  --------------------------------
  14 10 22 29  6 27 19 18  6  12 8

Task
Write a function that accepts message string and an array of integers code.
As the result, it should return a key that was used to encrypt the message.
The key has to be shortest of all possible keys that can be used to code the message (i.e. when possible keys are 12 , 1212, 121212, your solution should return 12).

Input / Output
The message is a string containing only lowercase letters.
The code is an array of positive integers.
The key output is a positive integer.

Example
findTheKey("scout", [ 20, 12, 18, 30, 21]);  => 1939
findTheKey("masterpiece", [ 14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8]);  =>  1939
findTheKey("nomoretears", [15, 17, 14, 17, 19, 7, 21, 7, 2, 20, 20]);  => 12

*/

// The initial objective is to derive the entire key/full pattern that was used to encrypt the message;
// We can achieve this by reversing the process and calculations performed in the example;
// If we take each character code value of each letter in the message and subtract it by 96, we can map a to z from 1 to 26;
// Then, we can take the input array of integers (aka, the encrypted code) and subtract it by those values we produced in order to arrive at the entire key used to reach that point;
// From there, we need to determine the point at which the pattern repeats;
// If the code used was: 332332, we would need to return 332;
// To get to that specific simplified and reduced output, we need to iterate through the code and break out when code[0] === code[3];
// Therefore, we need to be able to constantly compare and backtrack through the digits to verify at which points an entire repetition occurs as opposed to just a duplicate digit;

function findTheKey(message, code) {
  let converted = message.split('').map(letter => letter.charCodeAt() - 96);
  let key = code.map((num, idx) => num - converted[idx]);

  let keyLen = 1;

  for (let i = 0; i < key.length; i++) {
    while (key[i] !== key[i % keyLen]) {
      keyLen++;
    }
  }

  key = key.slice(0, keyLen).join('');
  return Number(key);
}
