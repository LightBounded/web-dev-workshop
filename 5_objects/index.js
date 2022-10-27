// an object represent a thing with properties

// a person has properties: a first name, last name, age, favorite programming language, etc...
const person = {
  firstName: "Caleb",
  lastName: "Rivera",
  age: 18,
};

console.log(person);

// you can add new properties to an object, which can be functions
person.sayFirstName = function () {
  console.log(this.firstName);
};

person.sayFirstName();
