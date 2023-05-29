function pf(str){
     console.log(str);
}

// const myArray = [0,1,2,3,4,5,6,7,8,9];
// pf(myArray)

// //the length method returns the length of the array
// pf(myArray.length);

// //the pop method removes the element from the last index of the array
// myArray.pop();
// pf(myArray);

// //the push method adds an element to the last index of the array
// myArray.push("new");
// pf(myArray);

// //shift method removes element to beginning of the array and decrements all the indices
// myArray.shift();
// pf(myArray);

// //unshift method adds an element to the beginning of the array and then increments all the indices
// myArray.unshift(0);
// pf(myArray);

// //changing elements at specific indexes by reassigning
// myArray[9] = 9;
// pf(myArray);

// const newArray = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
// pf(newArray);

// //the concat method concats the two arrays
// const finlArray = myArray.concat(newArray);
// pf(finlArray);

// //the flat method is used to remove array within the arrays
// const ex = [[0,1],[1,2],[2,3]];
// pf(ex);
// const newEx = ex.flat();
// pf(newEx);

// //the splice method adds new elements to the array in this method the first parameter is used to denote the position and the second parameter is used to define the no. of elements that need to be removed
// const x = finlArray.splice(1,2,"one","two");
// pf(finlArray);

// //the slice method slices a defined part of an array into a new array
// const y = finlArray.slice(10);
// pf(y);

// //sort method returns the array sorted in alphabetical or numerical order
// pf(newArray);
// const variable = newArray.sort();
// pf(variable);

// const variable2 = myArray.sort();
// pf(variable2);

// //reverse method reverses the array
// const variable3 = myArray.reverse();
// pf(variable3);

//compare method is used to sort the array in numerical order and it removes any errors and exceptions
const variable4 = [10,50,78,63,25,4,7,14,5,3,6];
let variable5 = variable4.sort(function (a,b){return a-b}); //here this is an explicit function
pf(variable5);

variable5 = variable4.sort(function(a,b){return b-a});
pf(variable5) /*The Compare Function
The purpose of the compare function is to define an alternative sort order.

The compare function should return a negative, zero, or positive value, depending on the arguments:

function(a, b){return a - b}
When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

If the result is negative, a is sorted before b.

If the result is positive, b is sorted before a.

If the result is 0, no changes are done with the sort order of the two values.

Example:

The compare function compares all the values in the array, two values at a time (a, b).

When comparing 40 and 100, the sort() method calls the compare function(40, 100).

The function calculates 40 - 100 (a - b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.

You can use this code snippet to experiment with numerically and alphabetically sorting */

//