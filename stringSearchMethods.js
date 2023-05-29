function show(str){
     console.log(str);
}
var myText = "Hello World this is programming with JavaScript";

//the indexOf mehtod returns the first occurence of any string
show(myText.indexOf("World"));

//the lastIndexOf method returns the last ocurence of the given string
show(myText.lastIndexOf("Hello"));

//the string method returns the position of the string or expression in the string
show(myText.search("with"));

// the match method returns an array of the occurences of the expression and its meta data
show(myText.match("th/"))

