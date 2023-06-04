/*json is a format for storing and transporting data 
json is used when data is sent from one place to another 
example : from sever to client or web page */

//json stands for javascript object notation
//json is a lightweight interchange format
//json is language independent
//json is self describing and easy to understand

//example for json object

// {
//      employees:[
//           {"firstname":"John", "lastname":"Doe"},
//           {"firstname":"Harry", "lastname":"Potter"},
//           {"firstname":"Nathan", "lastname":"Drake"},
//           {"firstname":"Steve", "lastname":"Jobs"}
//      ]
// }

/*JSON Syntax Rules
Data is in name/value pairs
Data is separated by commas
Curly braces hold objects
Square brackets hold arrays */

//converting a json pack into text

var text={
     employees:[
          {"firstname":"John", "lastname":"Doe"},
          {"firstname":"Harry", "lastname":"Potter"},
          {"firstname":"Nathan", "lastname":"Drake"},
          {"firstname":"Steve", "lastname":"Jobs"}
     ]
}

//then use the js built in function JSON.parse() to convert the string elements into javascript objects
const obj = JSON.parse(text);
//finally use it in our program

console.log(obj.employees[1].firstname)