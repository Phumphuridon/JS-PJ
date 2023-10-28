// Statements

function sum(a, b){
    return a + b;
} // Create a function where it return sum of a and b
let x = 3, y = 4;
console.log(`${x} + ${y} = ${sum(x, y)}`); // ex. of string format
console.log("1 + 2 = " + sum(1, 2));

// Block

let a = 1;
console.log("Top Level");
console.log("a = " + a);

// New Block
{
    let b = 2;
    console.log("Inside New Block");
    console.log("a = " + a)
    console.log("b = " + b)
}
// from here b is unaccessible