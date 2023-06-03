//variable scope is the phenomenon of accessing the variable from distinct code blocks.

//block scope : variables declared with let in a block cannot be accessed from outside the block and vice versa for variable declared with var
{
     let x = 20
     console.log(x);
     var y = 30;
}
let result1 = x + 20;
let result2 = x + 30;
console.log(result2);
console.log(result1);

//variables declared in a function will have local scope