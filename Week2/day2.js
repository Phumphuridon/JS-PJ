// Function rest Parameter

// is the function which not limit the parameter

function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number
    }
    return result
}

console.log(sum(1,3,5)) // output: 8
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // output: 55

function is_prime(num){
    for(let i = 2; i <= num**0.5; i++){
        if(num%i == 0){
            return false
        }
    }
    return true
}

let primes = []
for(let i = 2; i <= 100; i++){
    if (is_prime(i)){
        primes.push(i)
    }
}

console.log(primes)

// Prime from 1 - 100 & Output
// 2,  3,  5,  7, 11, 13, 17, 19,
// 23, 29, 31, 37, 41, 43, 47, 53,
// 59, 61, 67, 71, 73, 79, 83, 89,
// 97