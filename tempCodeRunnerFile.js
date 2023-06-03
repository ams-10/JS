h = "javascript";
// {
// {
//      let x = 20
//      console.log(x);
//      var y = 30;
// }
// let result1 = x + 20;
// let result2 = x + 30;
// console.log(result2);
// console.log(result1);
// }

//variables declared in a function will have local scope and can only be accessed from within the function
function hello() {
     let g = "world";
     console.log("hello "+h);
     console.log("hello "+y);
}
hello();