//  for each loop

// const coding = ["js", "ruby", "java", "python", "cpp"]
// coding.forEach(  function (item) {
//     console.log(item);
// })


// coding.forEach( (item) => {
//     console.log(item);
// })


// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)


// coding.forEach( (item, index, arr)=>{
//     console.log(item, index, arr);
// })


const myCoding = [
    {
       languageName: "javascript",
       languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    // console.log(item.languageName);
})


// const coding = ["js", "ruby", "java", "python", "cpp"]


//  for Each can't return value (never return value )  it gives Undefined 


// const values = coding.forEach( (item) =>{
//     console.log(item);
//     return item
// })
// console.log(values);


//  filter 


const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter( (num) => num > 4)

// const newNums = myNums.filter( (num) =>{
//     return num> 4
// })

// const newNums = []

// myNums.forEach((num) => {
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);


const books = [
    {title: 'Book One', gener: 'Fiction', publish:1981,
edition: 2004},
    {title: 'Book Two', gener: 'Non-Fiction', publish:1992,
edition: 2008},
    {title: 'Book Three', gener: 'History', publish:1999,
edition: 2007},
    {title: 'Book Four', gener: 'Non-Fiction', publish:1989,
edition: 2010},
    {title: 'Book Five', gener: 'Science', publish:2009,
edition: 2014},
    {title: 'Book Six', gener: 'Fiction', publish:1987,
edition: 2010},
    {title: 'Book Seven', gener: 'History', publish:1986,
edition: 1996},
    {title: 'Book Eight', gener: 'Science', publish:2011,
edition: 2016},
    {title: 'Book Nine', gener: 'Non-Fiction', publish:1981,
edition: 1989},
];

let userBooks = books.filter((bk)=>bk.gener === 'History')

userBooks = books.filter( (bk) =>{
    return bk.publish >= 1995 && bk.gener === "History"
})

console.log(userBooks);