function isFrozen(obj) {
  let cannotDelete;
  let cannotUpdate;

  let keys = Object.keys(obj);
  let firstKey = keys[0];
  delete obj[firstKey];

  let counter = 0;

  for (let key in obj) {
    counter++;
  }

  if (counter === keys.length) {
    cannotDelete = true;
  } else {
    cannotDelete = false;
  }

  obj[firstKey] = "flag";

  if (obj[firstKey] === "flag") {
    cannotUpdate = false;
  } else {
    cannotUpdate = true;
  }

  return cannotDelete && cannotUpdate;
};

function isSealed(obj) {
  let cannotDelete;
  let canUpdate;

  let keys = Object.keys(obj);
  let firstKey = keys[0];
  delete obj[firstKey];

  let counter = 0;

  for (let key in obj) {
    counter++;
  }

  if (counter === keys.length) {
    cannotDelete = true;
  } else {
    cannotDelete = false;
  }

  obj[firstKey] = "flag";

  if (obj[firstKey] === "flag") {
    canUpdate = true;
  } else {
    canUpdate = false;
  }

  return cannotDelete && canUpdate;
};

function isExtensible(obj) {
  let canCreate;

  let myKey = Buffer.from('This is just to make sure we add another key instead of overwriting one!').toString('base64');
  let keys = Object.keys(obj);

  obj[myKey] = true;

  let counter = 0;

  for (let key in obj) {
    counter++;
  }

  if (counter === keys.length + 1) {
    canCreate = true;
  } else {
    canCreate = false;
  }

  return canCreate;
};
