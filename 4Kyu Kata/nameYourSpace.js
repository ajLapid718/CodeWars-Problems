/*

Description:
Finish the namespace function so that it sets or gets the value at the path specified.
The first argument should be the root object that the path belongs to.
The 2nd argument is the path itself and the 3rd optional argument is the value to set at the path.

If a value is provided then the path will be set to that value.
Any objects not present within the path will be created automatically in order for the path to be successfully set.


stuff = {}
namespace(stuff, 'moreStuff.name', 'the stuff')
# results in {moreStuff: {name: 'the stuff'}}

If no value is provided the the function will return the value at the path given.
If the path is not valid/present then undefined will be returned.

namespace(stuff, 'moreStuff.name') # returns 'the stuff'
namespace(stuff, 'otherStuff.id') # returns undefined

*/

// gather and separate all the paths;
// iterate through the array of paths;
// think in terms of a linked list;
// if a path exists, we know we have a "next value";
// if a path doesn't exist, initialize and set an empty obj;
// continue to traverse the series of paths by re-assigning the rootObj;
// once we arrive at the last path, determine if the the optional value argument was passed in;
// we now have to do one of two things: 
// if there is a value, set the key to have that value;
// if there is no value to set, that means we are performing a retrieval...where we just get the information at the key;
// this could result in either the output of a stored value, or an undefined;
function namespace(rootObj, path, value){
  let paths = path.split('.');

  for (let i = 0; i < paths.length; i++) {
    let key = paths[i];

    if (i === paths.length - 1) {
      if (value !== undefined) {
        rootObj[key] = value;
      }
      else {
        return rootObj[key];
      }
    }
    else {
      rootObj[key] = rootObj[key] || {};
      rootObj = rootObj[key];
    }
  }
}
