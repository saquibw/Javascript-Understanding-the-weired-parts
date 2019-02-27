// Syntax parsers:  
// Lexical environments
// Execution context

// object: Collection of name/value pairs

// Execution context (Global) creates two things: 1. Global object 2. 'this'

// Creation and Hoisting
// Execution context is created in two phases 1.Creation phase 2.Execution phase
// At creation phase, the parser goes through the code and recognises variables and functions creation place. 
// It sets up memory space for variables and functions. This is called hoisting
// All variables are set to undefined at creation phase
b();
console.log(a);

var a = "Hello World!";

function b () {
    var c = "abcs";
    console.log("Called b !");
    console.log(c);
}

