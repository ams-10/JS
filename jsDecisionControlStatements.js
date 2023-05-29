//if condition is used to execute a block of code if a condition is true
let hour = 15
hour =20
if(hour < 18){
     console.log("hello");
}
//else condition is used to execute a block of code when if condition is false
else{
     console.log("bye");
}

//else if condition is used to specify any no. of conditions when the first condition is false
let a=20 ; 
let b=15; 
let c=19;
if(a>b&&a>c){
     grtr(a);
}
else if(b>a&&b>c){
     grtr(b);
}
else{
     grtr(c);
}

function grtr(str){
     console.log("The greater number is : "+str);
}