//modules allow you to break up your code into components and allow you to import classes mehtod functions and variables etc
//this makes it easier to maintain a code base
//modules are imported using the import keyword
//let us export our class file and create a new class of cats with the same attributes and a new attribute age
//here we will also discuss the inheritance 

import { Dog } from ".classes.js" //here we have imported theDog class 

const dog4 = Dog("hero", "regular");
dog4.display();