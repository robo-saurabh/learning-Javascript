// ============================================================
// stack (primitive), heap(Non-primitive)

// let myName= "saurabh"
// let anotherName = myName
// anotherName =  "Robo"
// console.log(myName);
// console.log(anotherName);

let userOne = {
    email:"user@google.com",
    upi:"user@ybl"
}
let userTwo = userOne
userTwo.email = "saurabh@google.com"
console.log(userOne.email);
console.log(userTwo.email);