//  primitive data type

//  7 types of premitive data type
//  String, number, booleans, null, undefined, symbol, BigInt

const score = 100 
const scorevalue = 100.5

const isLoggedIn = false 
const outsideTemp = null
let userEmail;  // let userEmail= undefined 
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id=== anotherId);
const bigNumber = 3637889189478546n

// Reference (Non primitive)
// Array, Object, functions

const city = ["Delhi", "Mumbai", "Banglore"];// Array  
let myObj = {
    name: "saurabh",
    age: 22,
}// Object

const myFunction = function() {
    console.log("hello world");
}// Functions

console.log(typeof myFunction);



