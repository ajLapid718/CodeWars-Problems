/*

You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at beginning or end). The length of the strings, before and after the colon, are random.

Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.

Examples
["abc:123", "cde:456"]  -->  ["abc:456", "cde:123"]
["a:12345", "777:xyz"]  -->  ["a:xyz", "777:12345"]

*/

function tailSwap(arr) {  
    let idx = arr[0].indexOf(":");
    let jdx = arr[1].indexOf(":");
    
    return [arr[0].slice(0, idx) + ":" + arr[1].slice(jdx + 1), arr[1].slice(0, jdx) + ":" + arr[0].slice(idx + 1)];
  }