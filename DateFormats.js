//The ISO format is the international used date format
//date and time are separated by a capital letter T and Z
// we can also use the long format 
//example

var d = new Date("Mar 2023 19");
console.log(d);
//now we can get many methods like month year and day from any date format 

console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getDay());
console.log(d.getTime());
console.log(d.getHours());



