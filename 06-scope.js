// contact matters
// Variable scopes 
// 1. curly braces {} defines a new scope:
// - if, for, while , function 

const prompt = require("prompt-sync") ();
let income  = parseInt(prompt("Enter a number"));
if (income <= 50000) {
   let taxPayable = 0;
} else {
    let = taxPayble = income * 0.0025;
}
// taxPayable in scope that is not accessable 
console.log("Tax to pay = ", taxPayble);


// global: any function or variable not defined in a {}: let, const
// for example, "income" in the above 
// outside cannot access more inside
// more inside can access outside 
