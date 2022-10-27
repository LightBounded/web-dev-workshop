// strings are arrays

const str = "Hello. My name is Caleb";
console.log(str.length); // The length property returns the length of a string (number of characters)

// strings have several methods: toUpperCase(), toLowerCase(), trim(), split(), includes()

str.toUpperCase(); // "HELLO. MY NAME IS CALEB"
str.toLowerCase(); // "hello. my name is caleb"

const otherStr = "     Hello. My name is Caleb     ";
otherStr.trim(); // "Hello. My name is Caleb"

// string methods can be chained
console.log(otherStr.trim().toLowerCase().toUpperCase().split(". ")); //["HELLO", "MY NAME IS CALEB"]
