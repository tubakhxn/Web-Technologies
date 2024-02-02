function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

function printPrimesInInterval(start, end) {
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

console.log("Prime numbers between 1 and 50:");
printPrimesInInterval(1, 50);
