
// Asynchronous Concept
console.log("I'm first");
setTimeout(myFunction, 3);
console.log("I'm second");

function myFunction(){
    console.log("I'm Deeelaaayyyyy");
}

// Concept try except finally => python
// Promise Concept is "Producing" => "a code that tame time" 
// and "Consuming" => "a code that must wait for the result"

let promise = new Promise(function(when_succeed, when_error){
    // "Producing Code" proceed here
    when_succeed();
    when_error();
})
// "Consuming Code"
promise.then(
    function(value) { /* code if successful */ },
    function(error) { /* code if some error */ }
);