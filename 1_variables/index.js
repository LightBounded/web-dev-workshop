// three ways to declare variables: var, let, const

var a; // avoid using if possible, is outdated and could produce unintended behavior
let b;
const c = "I must be initialized and can't be changed.";

c = "Yes, I can."; // Will produce an error in the console
