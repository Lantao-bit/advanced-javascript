// how to define a string
let rhyme = "She sells seashells at the seashore";
let workds = 'Teh quck brown for jumps over the lazy dog';

console.log("I donn't know anything");
console.log('She said, "I know what you did last Thursday"');

// escape sequences 
// represent special characters that cannot type on the keyboard
// \n = Enter  
// \t = tab 
console.log("Dear sir, \nYour bill of $10000 is due");

// \ the next charcter is part of the string 
console.log("")

// Backtick `` strings, under the esc key
// 1. Tt span multiple lines in the program
// 2. It support special character
// 3. It support JavaScript Experssions:
//  - ${varible, expression, function returns a value}
let letter = `Hello      
    world`
console.log(letter);



let amountDue = 1000;
letter = `Dear Sir
  Your bill of $${amountDue} is due. Please pay by the end of this month or 
  you will be fined 10% of the amount which is $${amountDue * 0.1}.
  ${
     amountDue > 500 ? "You may call to dispute" : ""
  }
  You are eligible for a repayment plan for monthly payment of ${

  }
    `
console.log(letter)

Y

    You are eligible for a repayment plan for monthly payment of ${calculateRepaymentPlan(amountDue)}
    Our motto: "We will serve you blah blah"
