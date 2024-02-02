function findOddEvenNumbers() {
    for (var i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            console.log(i + " is even");
        } else {
            console.log(i + " is odd");
        }
    }
}
findOddEvenNumbers();
