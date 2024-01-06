const name = "saurabh"
const repoCount = 2

// console.log(name + repoCount + "value");

// console.log(`hello my name is ${name} and my repo count is ${repoCount}`);
const gameName = new String('Roboxyz')
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('b'));
const newString = gameName.substring(0,4)
console.log(newString);
const anotherString = gameName.slice(7,-4)
console.log(anotherString);
const newStringOne = "    saurabh  "
console.log(newStringOne);
console.log(newStringOne.trim());
const url = "https://saurabh.com/saurabh%20raj"
console.log(url.replace('%20', '-'));
console.log(url.includes('saurabh'));
console.log(url.includes('sundar'));
console.log(gameName.split('-'));