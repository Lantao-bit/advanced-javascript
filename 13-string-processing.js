
const prompt = require("prompt-sync")();
//slice a string
// you an access a string's individual characer by its index
let password = "rotiprata and iced milo";
console.log(password[4]);

//slice a string to get a sub-string: 
// - from one index to second index, 
// - excluding the char of the second index  
// - note that the original string will not change
console.log(password.slice(4,8));    // excludes the last char

//slice a string with only one parameter
// it will slice form that index to the end
console.log (password.slice(3))     //  ta

// ISO date format YYYY-MM-DD
// date: 2026-12-03 
// Write a program:
// - ask the user to enter the date in the YYYY-MM-DD 
// - display the year, the month and the day on different lines
// for example: 2024-11-03 
// Year: 2025
// Month: 12
// Day: 03

let inputDate = prompt("Enter a date (YYYY-MM-DD):") ;
let yyyy = inputDate.slice(0,4);
let mm = inputDate.slice(5,7);
let dd = inputDate.slice(8,10);
console.log("Year:", yyyy);
console.log("Month:", mm)
console.log("Day:", dd);


