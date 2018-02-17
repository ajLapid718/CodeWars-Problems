/*

Description:

Substitution - Cryptography #1
Cryptography is a very interesting and important subject in computer science. Cryptography is used in our daily lives when using a computer so it benificial to learn more about it. In this kata series you will learn about some encrypting and decrypting methods and how you can possibly apply them.

Task
Your task is to create a text to int substitution object which has the methods Encrypt and Decrypt. The two functions Encrypt and Decrypt will take a string of characters you must then convert those characters into their ascii value and add 58, then you must put them into a string and return that.

*/

const Substitution = () => {
  return {
    Encrypt: (word) => {
      return word.split('').map(letter => letter.charCodeAt() + 58).join('');
    },
    Decrypt: (word) => {
      return word.match(/\d{1,3}/g).map(num => parseInt(num) - 58).map(n => String.fromCharCode(n)).join('');
    }
  };
};
