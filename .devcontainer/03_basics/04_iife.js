// Immediately Invoked Function Expression (IIFE)
// why use iife  - global scope ke polution se problem hoti hai kai bar to us global scope ke variable ya decleration ke polution ko hatane ke liye hamne iife ka use kiya (2nd - jo fuction immediately execute ho jaye )



(function one(){
    // one is named iife
    console.log(`DB CONNECTED`);
})();

// (() => {
    // simple iife
//     console.log(`DB CONNECTED TWO`);
// })();


((name) => {
    console.log(`DB CONNECTED TWO${name}`);
})(" saurabh");