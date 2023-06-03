//the try catch error handler in js are used to run problematic statements
// try used to try and run a code block
//catch statement is used to define code block to handle any error
// finally is used to execute closing statements of a program
// throws key word is used to throw an exception (define custom error message)

//try and catch statements come in pairs
let x = 5, y = 0;
try{
     let res = x / y ;
}
catch(myError){
     console.log("division by zero not possible");
}