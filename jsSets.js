//js sets are objects which contain a collection of unique values
//each value can only occur once in a set and it cannot contain any duplicates
//set is initialized by passing an array to the Set() constructor 

/*
there are five methods to create delete and modify sets 
they are:
add() "adds a value to the set"
delete() "deletes the value from the set"
has() "returns true if the set contains the specified value"
forEach() "iterates over the values in the set"
size() "returns the number of elements in the set"
*/
const set = new Set(["apple", "banana", "cherry", "mango", "grapes"]);
txt = "";
set.forEach(function(value) {
     txt+=value+"\n";
});
console.log(txt);

console.log(set.values())