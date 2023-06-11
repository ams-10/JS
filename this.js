//this keyword in js is used to refer to the object itself
//this keyword refer to different objects depending upon how its called
//in an object method this refers to the object
//in a function this refers to the global variable
//in a function in strict mode this undefined
//in an event this refers to the element that recieved the event
//methods like call() bind() and apply() can refer this to any object

//example
//when refering in an object like map
const id = {
     firstname : "John",
     lastname : "Doe",
     age : 30 ,
     fullname :function(){ this.name + " " + this.lastname +" and the age is " + this.age ;}
};
console.log(id.fullname());
