// we use document.getElementById() to grab an element from the DOM

let num1Input = document.getElementById("num-1");
let num2Input = document.getElementById("num-1");
let addBtn = document.getElementById("add-btn");
let sumSpan = document.getElementById("sum");

// we attach a listener to the click event, so that it runs a function whenever it is clicked on
addBtn.addEventListener("click", () => {
  // the value of an input is a string, so we need to parse it as a floating point number
  let sum = parseFloat(num1Input.value) + parseFloat(num2Input.value);

  // we can change the text displayed by an element by modifying the value of its innerText property
  sumSpan.innerText = sum;
});
