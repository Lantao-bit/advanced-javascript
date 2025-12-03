// truthy and falsy values
// Falsy: 0; NaN; ""; false; Null; undefined; 
// when used in condition with logicl operator  
// 
// every anything else is truthy:

//usages
let annualIncome = parseFloat(prompt("Enter your annual income"));
if (annualIncome){
    let taxRate = 0.01;
    console.log(annualIncome * taxRate);
} else {
    console.log("please enter a number greater than 0")
}

// 
let name;
while(true) {
    name  = prompt("Please enter your name");
    if (name) {

    }
}