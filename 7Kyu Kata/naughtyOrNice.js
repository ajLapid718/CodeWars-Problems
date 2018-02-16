/*

Santa is coming to town and he needs your help finding out who's been naughty or nice. You will be given an entire year of JSON data following this format:

{
    January: {
        '1': 'Naughty','2': 'Naughty', ..., '31': 'Nice'
    },
    February: {
        '1': 'Nice','2': 'Naughty', ..., '28': 'Nice'
    },
    ...
    December: {
        '1': 'Nice','2': 'Nice', ..., '31': 'Naughty'
    }
}

Your function should return "Naughty!" or "Nice!" depending on the total number of occurrences in a given year (whichever one is greater).

If both are equal, return "Nice!"

*/

function naughtyOrNice(data) {
  var year = data;
  var naughtyAmount = 0;
  var niceAmount = 0;

  for (var month in year) {
    var dates = year[month];
    for (var date in dates) {
      var behavior = dates[date];
      behavior === "Naughty" ? naughtyAmount += 1 : niceAmount += 1;
    }
  }

  return niceAmount >= naughtyAmount ? "Nice!" : "Naughty!";
}
