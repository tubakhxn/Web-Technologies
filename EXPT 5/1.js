function findLargestInteger(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

let firstNumber = parseInt(prompt("Enter the first integer:"));
let secondNumber = parseInt(prompt("Enter the second integer:"));

let result = findLargestInteger(firstNumber, secondNumber);

console.log("The largest integer is: " + result);
