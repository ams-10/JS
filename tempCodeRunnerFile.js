// //iterating an array using functions
// const fruits = ["apple", "banana", "grapes"];
// console.log(fruits);

// let txt = "";

// function iterate(value, index, array){
//      txt += value + "\n";
// }

// fruits.forEach(iterate);
// console.log(txt)

// //when a call back function uses only the value parameter the array and index parameter can be omitted
// //the forEach calls a function for each element in the array 
// function iterate2(value){
//      txt  += value + "\n";
// }
// console.log(txt);
// fruits.forEach(iterate2);
// console.log(txt);

//the map function is used to create a new array by performing a function on the existing array it can be used with holes in the array & it does not change the original array
//for example lets create an array and make changes to it 

// const nums = [5, 6, 8, 9, 10];
// const nums2 = nums.map(mul2x);
// function mul2x(value){
//      return value*2;
// }
// console.log(nums2)

//the filter method is used to recreate an array with array elements that pass a test
// const Arr = [54,10,4,2,7,89,6,3,25,45,4,15,14,25,7,19,18];
// const Arr2 = Arr.filter(grtrThen18);
// function grtrThen18(value){ //for a call back function array and index parameter can be omitted
//      return value >=18;
// }
// console.log(Arr2);

//the entries method is used to create objects out of arrays
const fruits = ["apple", "cherry", "banana", "orange"];
const f = fruits.entries();
console.log(f)