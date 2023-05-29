//Date can be called using the date class and stored in a variable
var d = new Date();
console.log(d);
//date objects are static

//date objects are created using new date() structure 

//new Date("string") creates a new date with s string 
d = new Date("October 30, 2023 GMT ");
console.log(d);

//javascript counts months from 0 to 11
d = new Date(2023,8,31,12,20,60,0);
console.log(d);

// 6 numbers specify year month day hour minute and second
//5 numbers specify year moonth day hour and minute 
// 4 numbers specify year month day and hour 
// 3 numbers specify year month and day
// 2 numbers specify year and month
d = new Date(2023,12);

