//Javascript booleans are a data type which represent true or false and 1 or 0 and on or off
//we can use the boolean function to find out if an expression is true or false 
//example

let p = 5;
let q = 9
let r = Boolean(p>q);
console.log(r);
let s = Boolean(p<q);
console.log(s);

//comparison operators are used to compare and conditions to a statement or expression


//in js everything with a value is true every thing without a value is false
let x = 0; y=1;
Boolean(x); Boolean(y);

//the different types of operators 
//"==" : equals to operator 
// ">" : greater than operator 
// "<" : less than operator
//"<=" : less than or equal to operator
//">=" : greater than or equal to operator
//"===" : equal to with type
//"!=" : not equal to
//"!==" : not equal to with type
//"&&" : and operator logical
//"||" : or operator logical 
//"!" : not operator logical
// " ? " : ternary operator assigns a value to a variable if the condition is true or false
//example of ternary operators
var age=15;
age = 20;
let voteable = (age<18) ? "tooYoung":"Applicable";  
console.log(voteable);

//The Optional Chaining Operator (?.)
//The ?. operator returns undefined if an object is undefined or null (instead of throwing an error).
const car = {type:"Fiat", model:"500", color:"white"};
console.log(car?.name);
