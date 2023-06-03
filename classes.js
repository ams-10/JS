// the js class is used to create an object and create its properties and access them 
//this accessing of the properties is called methods

export {Dog};

class Dog{
     constructor(name, breed){  // constructor is invoked whenever an object is created or class is initialized
     this.name = name;          // if constructor is not defined js will initiate a default constructor   
     this.breed = breed;
     }
     display(){
          return console.log(this.name , ":" ,this.breed)
     }
}

const dog1 = new Dog("zog", "German Sheperd"); //creating and initializing dog1 as object and passing its properties as parameters 
const dog2 = new Dog("rocky", "Dalmatian");  //creating and initializing dog2 as object and passing its properties as parameters

dog1.display(); //now when we create the object then dog1 is a class and its properties(qualities) will be displayed
dog2.display(); // similarly for dog2

//here dogs are a class and its objects are different types of dogs and the breed color size etc are the attributes of class

//for arguments sake lets create another dog with different attributes

const dog3 = new Dog("brutus", "Bull dog"); //now dog 3 is an object 

dog3.display(); 