const user = {
    username: "saurabh",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);

// function one(){
//     console.log(this);
// }
// one()


// const Two = function(){
//    let username = "saurabh"
//    console.log(this.username); 
// }
// Two()

const Three = () => {
    let username = "saurabh"
    console.log(this);
}
// Three()


// ++++++ Arrow function +++++++++

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,4));

//  ########   implicit return  #######

// const addTwo = (num1,num2) => num1 + num2

// const addTwo = (num1,num2) =>(num1 + num2)

const addTwo = (num1,num2) =>({username: "saurabh"})

console.log(addTwo(3,4));


