// an array is a collection of items of any type

let items = [22, 69, [undefined], {}, null, "Don't do this"]; // Valid array
let nums = [10, 2, 5, 22, 15, 3];
let fruits = ["Bananas", "Oranges", "Apples", "Mangos"];

// arrays have methods: forEach(), map(), filter(), reverse(), sort()

// forEach() loops through each number in the array and logs them
nums.forEach((num) => {
  console.log(num);
});

// map() returns a new array populated with the results of calling a function for each element
let numsPlusTwo = nums.map((num) => {
  return num + 2;
});
console.log(numsPlusTwo);

console.log(fruits.sort()); // logs fruits in reverse
console.log(fruits.reverse()); // logs fruits in alphabetical order

// filter() returns a new array containing the contents of the original that pass a specific condition
// return an array with only the even numbers from the original array
let evenNums = nums.filter((num) => {
  return num % 2 == 0;
});
console.log(evenNums);

// arrays and objects can be "destructured"
const [fruit1, fruit2] = fruits;
console.log(fruit1, fruit2);
