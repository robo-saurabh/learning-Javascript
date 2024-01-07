// const tinderUser = new Object()   singleton object
const tinderUser = {}  //  non singalton object

tinderUser.id = "12345abc"
tinderUser.name = "Sunny"
tinderUser.isLoggedIn= false

// console.log(tinderUser);

const regularUser = {
    email: "somerandom@gmail.com",
    fullname: {
        userfullname:{
            firstname: "saurabh",
            lastname: "kumar"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = {5:"a", 6:"b"}
// const obj4 = {obj1, obj2}
// const obj4 = Object.assign({},obj1,obj2,obj3)
const obj4= {...obj1, ...obj2, ...obj3}
// console.log(obj4);

const users = [
    {
        id: 1,
        email:"s@gmail.com"
    },
    {
        id: 2,
        email:"a@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));



//  De-structuring 

const course = {
    courcename: "Js in hindi",
    price: "Rs-999",
    courceInstructor: "Hitesh"
}
// course.courceInstructor
const {courceInstructor: instructor} = course
// console.log(courceInstructor);
console.log(instructor);

//  API in JSON


// {
//     "class": "4",
//     "subject": "3",
//     "teacher": "2"
// }