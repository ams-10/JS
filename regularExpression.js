// a regular expression in js is a sequence of characters that form a search patttern
//example /ams/i ams is a sequence of character and i is a modifier   
//in js modifiers are used with search methods and replace methods
let txt = "Abdullah MS";
let n = txt.search("MS");
console.log(n);

//using regular expressions  with a modifier
let text = "hello world";
let m = txt.search(/world/i);

//using replace method with modifier
let p = text.replace(/world/i, "javascript");
console.log(p);     

//i performs case sensitive matching
//g performs global matching (finds all matches present in the string)
//m perform multi line matching
//d finds digit 
// finds white space

//the test method is used to find out if an expression contains a specifice value and returns boolean value
let q = /e/.test("the quick brown fox jumps over the lazy dog");
console.log(q);


