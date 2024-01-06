//  Arrays

// const myArr = [ 1,2,3,4,5,6];
// const mySubject = [ "math", "english", "science",];
// console.log(mySubject);
// const myArr2 = new Array(1,2,3,4);

//  Array Methods

// myArr.push(9)
// console.log(myArr);
// myArr.pop();

// myArr.unshift(2)
// myArr.shift()
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(6));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);


// ##########  slice, splice  ###########

// console.log("A", myArr);
// const myn1 = myArr.slice(1,3)
// console.log(myn1);
// console.log("B", myArr);

// const myn2 = myArr.splice(1,3)
// console.log("C", myArr);
// console.log(myn2);

const mySubject = [ "math", "english", "science",];
const myClass = [ "class1", "class2", "class3" ]
mySubject.push(myClass)
// const mySchool = mySubject.concat(myClass)
// console.log(mySchool);

const mySchool = [...mySubject, ...myClass]
// console.log(mySchool);

const first_array = [1,2,3,[11,22,33,],4,[44,55,[5,6,7]]]
const all_array = first_array.flat(Infinity)
console.log(all_array);

console.log(Array.isArray("saurabh"));
console.log(Array.from("saurabh"));
 console.log(Array.from({name:"saurabh"})); //Output is empty Array

 let score1 = 100
 let score2 = 200
 let score3 = 300
 console.log(Array.of(score1,score2,score3));