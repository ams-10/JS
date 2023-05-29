function print(str){
     console.log(str);
};
/*An array is a special variable which can hold multiple values 
It can hold multiple values under a single name */
const cars = ["volvo", "bmw", "amg"];
print(cars);
cars[3] = "ford";  //You can append values to the array after its initialization
print(cars);

const bikes = Array("ducati", "ninja", "harley"); // creating array using array keyword
print(bikes);

//accessing array elements
let car1 = cars[0]; car2 = cars[1]; car3 = cars[2];
print(car1+" "+car2+" "+car3);
// you can also access array elements directly
print(cars[3]); print(bikes[2]);

// changing array elements 
cars[0] = "Nissan"
cars[2] = "Toyota"
print(cars)

print(typeof(cars))

function add(a,b){
     return print(a+b)
};

function subract(a,b){
     return print(a-b);
};

function product(a,b){
     return print(a*b);
}; 

myArray = [
     add(5,2), subract(2,5), product(9,9)
];

print(myArray);

let num = cars.length;
print(num);

let srt = bikes.sort();
print(srt);
print(bikes);


cars.push("mustang")
print(cars)

cars.pop()
print(cars)

print(Array.isArray(cars));

bikes instanceof Array;

const list = new Array(50);
print(list);

