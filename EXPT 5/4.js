function findLongestWord(str) {
    var words = str.split(' ');

    var longestWord = '';
    var maxLength = 0;

    for (var i = 0; i < words.length; i++) {
        var currentWord = words[i].replace(/[^a-zA-Z]/g, '');

        if (currentWord.length > maxLength) {
            longestWord = currentWord;
            maxLength = currentWord.length;
        }
    }

    return longestWord;
}

var inputString = "This is a sample sentence with some long words.";
var result = findLongestWord(inputString);
console.log("Longest word:", result);
