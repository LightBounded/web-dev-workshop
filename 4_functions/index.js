let a = 10;
let b = 6;

// we don't need to specify the return type of the function or the type of its parameters
// return the sum of two numbers
function add(a, b) {
  return a + b;
}

let sum = add(a, b);
console.log(sum);

// functions can also be declared with arrow function expressions
const subtract = (a, b) => {
  return a - b;
};

let difference = subtract(a, b);
console.log(difference);

// functions can be passed into other functions
function callFunctionNTimes(fn, n) {
  for (let i = 0; i < n; i++) {
    fn();
  }
}

callFunctionNTimes(() => console.log("Hello, World!"), 5); // logs "Hello, World!" 5 times
