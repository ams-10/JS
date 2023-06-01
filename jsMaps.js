//maps in js are objects that are used to store key value pairs 
//maps are initialized by different methods 
//you can create maps by passing array object with key value pairs to Map() method separated by comma for each array
//example
const fruits = new Map([
     ["banana", 200],
     ["apple", 500],
     ["cherry", 250]
]);

//we can also map using set method by passing key value pairs as arguments
fruits.set("orange", 150);
fruits.set("mango", 750);

//the size method is used to get the size of the map object
fruits.size;

//the delete method is used to delete an element 
fruits.delete("mango");

//the has method is used to check if an element is present in the collection
fruits.has("mango");

//the get method is used to return a key with its value
let a = fruits.get("mango");
console.log(a);

//iteratitng over all objects of a map
var txt=""
fruits.forEach(function one(value,key){
     txt += key + " = " + value + "\n";
});

//maps are not directly iterable therefore we can use forEach method and entries() method for iterating over all objects of the collection
console.log(txt);


