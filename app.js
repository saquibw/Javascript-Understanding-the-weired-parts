// Syntax parsers:  
// Lexical environments
// Global execution context

// object: Collection of name/value pairs

// Execution context (Global) creates two things: 1. Global object(window) 2. 'this'

// Creation and Hoisting
// Execution context is created in two phases 1.Creation phase 2.Execution phase
// At creation phase, the parser goes through the code and recognises variables and functions creation place. 
// It sets up memory space for variables and functions. This is called hoisting
// All variables are set to undefined at creation phase

// console.log(a);

// var a = "Hello World!";

// function b () {
//     console.log("Called b !");
//     console.log(c);
//     var c = "abcs";
    
// }
// b();

// undefined
// The initial phase (creation of execution context) sets all variable values to undefined
// It's a special keyword, a special value. It takes memory space. It doesn't mean 'not defined'.
// It means, it's value is not set

//Execution phase

// Single threaded: One operation at a time

// Synchronous: One at a time, in order

// Javascript is synchronous, single threaded

// Function invocation: Running a function

// Execution stack: any time a function is invoked, a new execution context is created and put on top of execution stack. 
// The top most execution context in the stack is the one that is currently running.

// Variable environment: Where the variable lives (memory space). Every execution context has it's own distinct variable environment. 
// For global execution context, it's variable environment is the window object.

function b() {
    var myVar;
    console.log(myVar);
}

function a() {
    var myVar = 2;
    console.log(myVar);
    b();
}

var myVar = 1;
console.log(myVar);
a();

// Scope chain

//Scope: Where a variable is available in your code