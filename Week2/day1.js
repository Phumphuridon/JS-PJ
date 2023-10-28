// Create a function
function myFunc(user_name){
    console.log("Hello " + user_name);
}
// Call a function with parameter
myFunc("Client_1");


// Void function
function myFunc2(){
    console.log("This Function has been called.");
}
// Call a function without parameter (aka. void function)
myFunc2()

// Application of function
function factorial(num){
    result = 1;
    for(let i = 1; i <= num; i++){
        result *= i;
    }
    return result;
}
console.log("0! = ", factorial(0)); // output: 1
console.log("3! = ", factorial(3)); // output: 6
console.log("5! = ", factorial(5)); // output: 120