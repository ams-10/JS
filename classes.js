// the js class is used to create an object and create its properties and access them 
//this accessing of the properties is called methods

class Dog{
     constructor(name, breed){  // constructor is invoked whenever an object is created or class is initialized
     this.name = name;          // if constructor is not defined js will initiate a default constructor   
     this.breed = breed;
     }
     display(){
          return console.log(this.name , ":" ,this.breed);
     }
}

const dog1 = new Dog("zog", "German Sheperd"); //creating and initializing dog1 as object and passing its properties as parameters 
const dog2 = new Dog("rocky", "Dalmatian");  //creating and initializing dog2 as object and passing its properties as parameters

dog1.display(); //now when we create the object then dog1 is a class and its properties(qualities) will be displayed
dog2.display(); // similarly for dog2

//here dogs are a class and its objects are different types of dogs and the breed color size etc are the attributes of class

//for arguments sake lets create another dog with different attributes

const dog3 = new Dog("brutus", "Bull dog"); //now dog 3 is an object or an entity

dog3.display(); 

class Cat extends Dog{
     constructor(name, breed ,age){
          super(name,breed);       //by using the super method we can access the parents constructors properties and methods
          this.age = age
     }
     set breed(x){
          this._breed = x;
     }
     set age(x){
          this._age = x;
     }
     set name(x){
          this._name = x;
     }
     show(){
          return console.log(this.name, this.breed, this.age);
     }
}

const cat1 = new Cat("snow", "persian", 25);

cat1.show();

//using getter setter we can get the property of any object individually using its instace

cat1.breed("regular");
cat1.show();