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


//iteratitng over all objects of a map
var txt=""
fruits.forEach(function one(value,key){
     txt += key + " = " + value + "\n";
});

console.log(txt);