// logical operators: && ||
// 1. variable substitution
// 2. ()
// 3. function calls
// 4. arth 
//    **
//    / * %
//   + -
// 5. comparision operators
// 6. logical oeprators 
//   one loolean value on the left hand side or right hand side


// short circuit 
function foobar() {
    console.log("foobar")
    return false;
}

true && foobar();      // -> foobar() will be called
false && foobar();


// when you use && on a chain of truthy values, the resut is the last truthy value
console.log(1 && 2 && 3 && 4);    // 

// short circuit using or ||

// when you use || on a chain of values, the resut is the first truthy value
console.log(1 && 2 && 3 && 4);    // 
