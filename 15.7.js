// What does the following code return?
new Set([1, 1, 2, 2, 3, 4]); // { 1, 2, 3, 4 }

// What does the following code return?
[...new Set("referee")].join(""); // ref

// What does the Map m look like after running the following code?
let m = new Map();
m.set([1, 2, 3], true);
// Map(1) {[ 1, 2, 3 ] => true}
m.set([1, 2, 3], false);
// Map(2) {[ 1, 2, 3 ] => false}

// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

// Write a function called vowelCount which accepts a string and returns a map
// where the keys are numbers and the values are the count of the vowels in the string.

function isVowel(char) {
  return "aeiou".includes(char);
}

function vowelCount(str) {
  const myMap = new Map();
  for (let char of str) {
    let charLower = char.toLowerCase();
    if (isVowel(charLower)) {
      if (myMap.has(charLower)) {
        myMap.set(charLower, myMap.get(charLower) + 1);
      } else {
        myMap.set(charLower, 1);
      }
    }
  }
  return myMap;
}
