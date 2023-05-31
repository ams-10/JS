//the break statement is used to break the loop
let fruits = [ "banana", "cherry", "apple", "mango", "grapes", "watermelon"];
for (let x of fruits){
     if(x === "mango"){break;}
     else{
          console.log(x);
     }
}
console.log("\n--------------------------------\n");

//when the control of the code encounters mango it breaks and exits out of the loop

//the continue statement is used to skip a single step in the loop
let myArray = [ "banana", "cherry", "apple", "mango", "grapes", "watermelon"];
for (let x of myArray){
     if(x === "mango" || x === "cherry"){continue;}
     else{console.log(x);}
}