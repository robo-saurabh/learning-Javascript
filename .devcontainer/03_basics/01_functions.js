function sayMyName() {
    console.log("S");
    console.log("A");
    console.log("U");
    console.log("R");
    console.log("A");
    console.log("B");
    console.log("H");
}
// sayMyName()

// function addTwoNumbers(number1,number2){  // (number1,number2) is a parameters
// //     console.log(number1+number2);
// }
 // addTwoNumbers(3,4)   // (3,4) is argunment


 function addTwoNumbers(number1,number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
 }

 const result = addTwoNumbers(4,5)

//  console.log("Result:", result);

function loginUserMessage(username = "robo"){
    if(username === undefined){
        console.log("please enter a username");
        return

    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("saurabh"));
// console.log(loginUserMessage()); // if you not passed the value it gives undefined

//    ... rest operator / sperate oprator

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 600));

const user = {
    username: "saurabh",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)

handleObject({
    username: "robo",
    price: 399
})

const myNewArray = [200,300,40,500,600]
function returnSecondValue(getArray){
    return getArray [1]
}
//  console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200,300,400,500,600]));
