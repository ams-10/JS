//loops are used to execute a single or multiple statements any number of times.
//loops increase the time complexity it takes to execute a program

//for loops are used to execute a single or multiple statements any number of times
//a for loop has three expressions
//1.an expression during the start 
//2.an expression for the condition
//3.an expression for the end

for (let i = 1; i <=5 ; i++) {
     console.log("Hello World");
}

//the for in loop is used to loop through properties of an array object
const fruits = ["apple", "banana", "cherry", "strawberry"];
for(x in fruits){
     console.log(fruits[x]);
}

//the for of loop is used to loop through the values of an iterable object
//example
const cars = ["volvo", "ford", "pontiac"];
txt = ""
for(var x of cars){
     txt+=x+"\n";
}
console.log(txt);

//whileloop is used to loop through a statement as long as a condition is true
//example
var x=0
while(x<10){
     console.log("the next number is " +x+ "\n");
     x++;
}

//the do while loop is used to check for the condition at the end of the execution of the codeblock hence its an exit controlled statement
var i=0;
do{
     console.log(i);
     i++;
}while(x<10);