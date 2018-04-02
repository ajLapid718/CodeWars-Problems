/*

Error Throwing - Error Handling #2
Error Handling is very important in coding.
Most error handling seems to be overlooked or not implemented properly.

Task
In this kata you are provided to evaluate a string, you must check for any html code if any code is found you must return false.
If the input is not a string you must throw a TypeError.
If the string is over 255 characters long or contains 0 characters you must throw a RangeError and last of all if the string entered is null throw a ReferenceError.

Error Messages
ReferenceError

ReferenceError('Message is null!')
TypeError

TypeError(`Message should be of type string but was of type ${typeof msg}!`)
RangeError

RangeError(`Message contains ${msg.length} characters!`)

*/

function validateMessage(msg) {
  if (msg === null) {
    throw ReferenceError(`Message is null!`);
  }

  if (typeof msg !== "string") {
    throw TypeError(`Message should be of type string but was of type ${typeof msg}!`);
  }

  if (msg.length === 0 || msg.length > 255) {
    throw RangeError(`Message contains ${msg.length} characters!`);
  }

  if (msg.includes("<") && msg.includes(">")) {
    return false;
  } else {
    return true;
  }
}
