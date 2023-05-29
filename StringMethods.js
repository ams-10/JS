function pf (str) {
     return console.log(str);
};
//javascript string methods 

// the length method
var  myString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(myString);
let lengthOfString = myString.length;
console.log("the length of the string is : "+lengthOfString); 

//Extracting string parts

//The slice method 
let mystring = "AbdullahMohammedShareef"; //end is not included syntax :: stringName.slice(start, end)
console.log(mystring.slice(2,15)); // negative numbers are also included 
console.log(mystring.slice(8));
console.log(mystring.slice(-7));

//the subsstring method 
//in this method we cant use negative indicing syntax: stringName.substring(start, end)
var myString = "Hello World";
console.log(myString.substring(6, -1));

//the substr method 
//in this method the second parameter returns the length till where you want to slice
console.log(myString.substr(2, 10));

//replace method 
//the replace method swaps the content of the string with the passed parameter syntax : stringName.replace("Hello", "Javascript")
//this method is case sensitive and by default it will only replace the first match in the first sequence
console.log(myString.replace("Hello", "Javascript"));

//tuUpperCase method
//this method converts the given string into all the letters into upper case format
console.log(myString.toUpperCase())

//toLowerCase method
//this method returns the given string to all the letters into lower case format
pf(myString.toLowerCase());

//concat method is used to join two strings
text ="Java".concat(" ","World");
pf(text);

text1 = "java";
text2 = "programming";
text3 = "language";
res = text1.concat(" ",text2," ",text3);
pf(res)

//the trim method is used to remove all the spaces from the both ends of the string
myString = "       Hello World    "; // trimStart method can be used to remove the whitespace from beginning of the string while the trimEnd for the opposite
pf(myString.trim());

//The padStart() method pads a string from the start.
// It pads a string with another string (multiple times) until it reaches a given length.
var text = "5";
var padded = text.padStart(4,"5");// the first parameter includes the no.of times while the second one defines the content by which the padding is to be done
pf(padded)

//the split() function returns array with the inputed no. or characters
pf(padded.split(""))

