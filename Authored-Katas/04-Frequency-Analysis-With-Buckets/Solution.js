function bucketize(arr) {
  let obj = {};
  let buckets = [null];

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    obj[num] = obj[num] + 1 || 1;
    buckets[i+1] = null;
  }

  for (let key in obj) {
    let val = obj[key];
    key = parseInt(key);

    if (buckets[val] === null) {
      buckets[val] = [key];
    }
    else {
      buckets[val].push(key);
    }
  }

  return buckets;
}
