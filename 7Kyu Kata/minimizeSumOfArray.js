/*

We are given an array of even size.

Our task is to find the minimum sum which is obtained from summing each Two integers product .
Input :: Output Examples ::

minSum({5,4,2,3}) // return 22

Explanation ::
5*2 +3*4 = 22

minSum({12,6,10,26,3,24}) // return 342

Explanation ::
26*3 + 24*6 + 12*10 = 342

minSum({9,2,8,7,5,4,0,6}) // return 74

Explanation ::
9*0 + 8*2 +7*4 +6*5 = 74

*/

function minSum(arr) {
  var sortedNums = arr.sort((a,b) => a - b);
  var midPoint = Math.floor(sortedNums.length/2);
  var sum = 0;

  for (var i = 0; i < midPoint; i++) {
    var frontNum = sortedNums[i]
    var backNum = sortedNums[(sortedNums.length-1)-i]

    sum += (frontNum * backNum);
  }

  return sum;
}
