/*

Let's bring the Ethereum blockchain to Codewars!
If you don't know much about Ethereum or the blockchain, there's many resources on the internet to help get you started.
The Ethereum Whitepaper may be a good place to start to learn about both.

This Kata makes use of the JavaScript Ethereum API web3.js, specifically the 1.0 version with documentation found here.

Let's start with a simple challenge.
We're going to write a function etherBalance which takes a hexidecimal ethereum account address as a string and returns a promise which will resolve with the ether balance inside that account.
The reason we need to return a promise is that we'll have to lookup the account balance asynchronously on the blockchain using web3.
This module is already loaded globally and setup for your use.

Be sure when resolving the balance of the account that you translate from Wei to Ether, which are different unit measurements for ether.

*/

const etherBalance = async address => {
  let bal = await web3.eth.getBalance(address);
  return weiToEther(+bal);
}

const weiToEther = ethQuantity => {
  let conversionFormula = Math.pow(10,18);
  return (ethQuantity/conversionFormula).toString();
}
