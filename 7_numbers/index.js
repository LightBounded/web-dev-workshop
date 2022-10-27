// there are no integer, float, double, or long data types in JavaScript
// the number data type encompasses all of these
// numbers are always 64-bit floating points numbers

// floating point arithmetic is not always accurate
console.log(0.2 + 0.1); // 0.30000000000000004

let a = 25.25;
console.log(a.toString()); // converts number to string

let b = 1 / 3;
console.log(b.toFixed(2)); // fixes number to two decimal points as a string

let c = "2.5252";
console.log(parseFloat(c)); // parses string as a float

let d = "2";
console.log(parseInt(d)); // parses string as an integer
