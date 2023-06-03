//js allows to write shorter functions
const person = ()=>{return "hello world";}
const multiple = (a, b)=>{return a*b;};

console.log(person());
console.log(multiple(1, 2));

//arrow functions with parameters 
const id = (val) => {
     return "John " + val;
}
console.log(id("Doe"));