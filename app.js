// Syntax parsers:  
// Lexical environments: where a piece of code physically leaves
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
// When a function is declared, it also gets added to the variable environment of that execution context

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
// Every execution context has a reference to it's outer environment (variable environment). Means, where the function is lexically located.
// In case of defining outer reference, Javascript cares about the lexical environment, means where the function is located physically.
// If a variable can't be find in the current execution context, javascript will look at the outer reference, where the function/ variable is located physically
// This going down the line is called scope chain

// Scope: Where a variable is available in your code. Where I can access a variable.
// All these things, Lexical environment, variable environment, execution context are in total defining what is called scope
// 'let' allowes block scoping, means, it's lifecycle ends with the block inside which it's defined.

// Asynchronous: More than one at a time
// Asynchronous callback: 
// A browser has multiple engines: Javascript engine, Rendering engine (vor view), HTTP Request (for requests)
// Javascript engine is synchronous. But is has to talk to other engines. That's  being done through asynchronous callback.
// Asynchronous means, what's happening outside the JS engine
// Besides execution stack, there is another structure/ list in JS engine => Event Queue
// If browser, outside of JS engine has an event, it puts that event inside event queue asynchronously
// When the execution stack is empty, JS engine looks at event queue periodically for events (this is called event loop)
// A eventHandler function is bind with that event. JS engine creates execution context for that and executes the function
// An event is being handled by a event handler
