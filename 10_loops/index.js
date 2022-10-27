// loops are the pretty much the same in the JavaScript as they are in other programming langauges

// we have for-loops, while-loops, and do-while-loops
// there are 3 different kinds of for-loops

// traditional for-loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let nums = [2, 4, 6, 8, 10];

// for-of-loop: allows us to loop through an iterable object (arrays, strings, maps, sets, etc...)
for (let num of nums) {
  console.log(num); // logs each number
}

// for-in-loop: allows us to loop through the properties of an object
for (let idx in nums) {
  console.log(idx); // logs the index of each number in the array (indices are properties in an array)
}

const person = {
  firstName: "Caleb",
  lastName: "Rivera",
  age: 18,
};

// we can loop through the properties of an object with a for-in-loop
for (let prop in person) {
  console.log(prop);
}
