//numbers regex
var numbersRegex = /-?\d+/g;
//Helper function to sum up a list
function sumNumbers(numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }
    return total;
}
/**
 * Get delimiter numbers, the result will be null if there is not any 
 * delimiter number
 */
function getDelimNumbers(stringInput) {
    var splitByNewLine = stringInput.split("\n");
    var delimeterNumbers = splitByNewLine[0].match(numbersRegex);
    return delimeterNumbers;
}

function add(stringInput) {
    var finalNumbers = [];
    var delimiterNumbers = getDelimNumbers(stringInput);
    if (delimiterNumbers == null) {
        finalNumbers = stringInput.match(numbersRegex).map(Number);
    } else {
        var numbers = stringInput.match(numbersRegex);
        for (var i = 0; i < numbers.length; i++) {
            var n = numbers[i];
            for (var pos = 0; pos < delimiterNumbers.length; pos++) {
                var currentDelimNumber = delimiterNumbers[pos];
                if (n != currentDelimNumber) {
                    var nSplit = n.split(currentDelimNumber);
                    for (var j = 0; j < nSplit.length; j++) {
                        var finalNum = Number(nSplit[j]);
                        finalNumbers.push(finalNum);
                    }
                }
            }
        }
    }
    var total = sumNumbers(finalNumbers)
    return total;
}


console.log(add("//[***][%%%]\n1***2%%%3"));