// booleans are either true or false
// boolean operators: == === > < >= <=

// what is the difference between == and ===?

console.log("2" == 2); // true, despite being two different data types
console.log("2" === 2); // false, since they are two different data types

// == checks if two values are equal, ignores type equality
// === check if two values are equal and if two types are the same

// everything with a "value" is true

// the double bang operator (!!) converts any value to a truthy or falsy value
console.log(!!5); // true
console.log(!!0); // false
console.log(!!""); // false
console.log(!!"Hello, World!"); // true
console.log(!!undefined); // false
console.log(!!null); // false

let nums = [];

if (nums.length) {
  console.log("I have numbers inside of me!"); // Will not log anything since the length of nums is 0, which is falsy
}

// conditional statements are the same in JavaScript as they are in any other programming langauge, so we will not cover them
