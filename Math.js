//javascript math object allows you to perform mathematical operations on numbers
//example

console.log(Math.PI);

// Math.E        // returns Euler's number
// Math.PI       // returns PI
// Math.SQRT2    // returns the square root of 2
// Math.SQRT1_2  // returns the square root of 1/2
// Math.LN2      // returns the natural logarithm of 2
// Math.LN10     // returns the natural logarithm of 10
// Math.LOG2E    // returns base 2 logarithm of E
// Math.LOG10E   // returns base 10 logarithm of E

//Math.round() returns the number to its nearest integer 
console.log(Math.round(1.4));

//Math.ceil also returns the number rounded "upto" to its nearest integer
console.log(Math.ceil(1.4));

//Math.floor returns the number rounded down to its nearest integer
console.log(Math.floor(1.4));

//Math.trunc return the integer part
console.log(Math.trunc(1.4));

//Math.sign returns if the number is negative positive or null
console.log(Math.sign(-2),Math.sign(2),Math.sign(0)); //here 1 represents positive -1 represents negative and 0 represents null

//Math.pow returns the power of the first argument to the second argument
console.log(Math.pow(5,2));

//Math.sqrt returns the square root of the number
console.log(Math.sqrt(64));

//Math.sin and Math.cos is used to return the respective sine and cosine values
console.log(Math.sin(90), Math.cos(90));

//Math.random generates a random number between 0 and 1
console.log(Math.random());

//Math.floor and Math.random can be used to generate random integers
console.log(Math.floor(Math.random() *10));

