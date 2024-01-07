//  singleton
// Object.create   by using constructor method

//  object literals

const mySym = 
Symbol("key1")
const JsUser = {
    name: "saurabh",
    "full name": "saurabh kumar",
    [mySym]: "mykey1",
    age: 25,
    location: "delhi",
    email: "saurabh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser ["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "saurabh@google.com"
// Object.freeze(JsUser)
JsUser.email = "saurabh@chatgpt.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log(("Hello JS User"));
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());