
// Display with process.stdout.write

let percent = 0
let showwing = ""

console.log("Initialing Package")
let timeprocess = setInterval(function(){
    process.stdout.write("\b".repeat(showwing.length));

    if (percent >= 100){
        clearInterval(timeprocess);
        console.log("100% Completed");
        console.log("Package is fully installed");
        return;
    }

    showwing = "Loading " + percent + "%";
    process.stdout.write(showwing);
    percent++;
}, 20)

// Input via user keyboard

const readline = require('readline')
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r1.question("", function(answer){
    console.log(answer + " has been input")
})

// Input via commandline
console.log(process.argv);

console.log("Node: " + process.argv[0])
console.log("File: " + process.argv[1])
console.log("Params1: " + process.argv[2])
console.log("Params2: " + process.argv[3])

/*node [filename][Params:1]...[Params:n]*/