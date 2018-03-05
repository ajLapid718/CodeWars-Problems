/*

You will be given an array and a single item from that array.
The smallest value in array has the highest kyu - 1st kyu, 2nd smallest - 2nd kyu and so on.
There are 8 kyus and each one has limited spots:

 1st kyu - 1 slot
 2nd kyu - 2 slots
 3rd kyu - 2 slots
 4th kyu - 3 slots
 5th kyu - 3 slots
 6th kyu - 3 slots
 7th kyu - 4 slots
 8th kyu - 4 slots

You should return kyu for the value passed based on the array.
If value isn't low enough to get a kyu then return 0.

Examples:

([66,12,90,15], 15) => 2
([1,7,2,3,4,5], 1) => 1
([1,7,2,3,4,5,9,10], 7) => 4

*/

function getKyu(allHonors, honor) {
  let sortedHonors = allHonors.sort((a,b) => a - b);
  let slotPosition = sortedHonors.indexOf(honor) + 1;
  let target;

  switch (slotPosition) {
    case 1:
      target = 1;
      break;
    case 2:
    case 3:
      target = 2;
      break;
    case 4:
    case 5:
      target = 3;
      break;
    case 6:
    case 7:
    case 8:
      target = 4;
      break;
    case 9:
    case 10:
    case 11:
      target = 5;
      break;
    case 12:
    case 13:
    case 14:
      target = 6;
      break;
    case 15:
    case 16:
    case 17:
    case 18:
      target = 7;
      break;
    case 19:
    case 20:
    case 21:
    case 22:
      target = 8;
      break;
    default:
      target = 0;
      break;
  }

  return target;
}
