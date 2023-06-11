//the try catch error handler in js are used to run problematic statements
// try used to try and run a code block
//catch statement is used to define code block to handle any error
// finally is used to execute closing statements of a program
// throws key word is used to throw an exception (define custom error message)

//try and catch statements come in pairs
var x = 5, y = 0;
try{
     var z = x / y ;
     console.log(l);
}
catch(myError){
     console.log("error");
}
finally{
     console.log("============================================================================\nend of program");
}

//throw keyword is used in association with if statement to throw an exception
var x = 5, y = 2 ;
if (x > y) throw "y cant be less than x"; 

