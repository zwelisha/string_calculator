//numbers regex
let numbersRegex = /-?\d+/g;
//Helper function to sum up a list
function sumNumbers(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}
/**
 * Get delimiter numbers, the result will be null if there is not any 
 * delimiter number
 */
function getDelimNumbers(stringInput) {
    if (stringInput.indexOf("\\") == -1) {
        return null;
    }
    let splitByNewLine = stringInput.split("\n");
    let delimeterNumbers = splitByNewLine[0].match(numbersRegex);
    return delimeterNumbers;
}

function validateInput(stringInput) {
    let lastChar = stringInput[stringInput.length - 1];
    let lastCharCode = lastChar.charCodeAt(0);
    if (!(lastCharCode >= 48 && lastCharCode <= 57)) {
        throw "ERROR: invalid input";
    }
    if (stringInput.indexOf("//") != -1 && stringInput.indexOf("//") != 0) {
        throw "ERROR: invalid input";
    }
    //build a string for negative numbers
    let negatives = "";
    let negValues = stringInput.match(/-\d+/g);
    if (negValues != null) {
        for (let i = 0; i < negValues.length; i++) {
            let number = negValues[i];
            if (i != negValues.length - 1) {
                negatives += number + ", ";
            } else {
                negatives += number;
            }
        }
        throw `ERROR: negatives not allowed ${negatives}`;
    }

}

function add(stringInput) {
    if (stringInput.length == 0) {
        return 0;
    }
    validateInput(stringInput);
    let finalNumbers = [];
    let delimiterNumbers = getDelimNumbers(stringInput);
    console.log(delimiterNumbers);
    if (delimiterNumbers == null) {
        numbers = stringInput.match(numbersRegex).map(Number);
        let total = sumNumbers(numbers);
        return total;
    } else {
        let numbers = stringInput.match(numbersRegex);
        for (let i = 0; i < numbers.length; i++) {
            let n = numbers[i];
            for (let pos = 0; pos < delimiterNumbers.length; pos++) {
                let currentDelimNumber = delimiterNumbers[pos];
                console.log(currentDelimNumber);
                if (n != currentDelimNumber) {
                    let nSplit = n.split(currentDelimNumber);
                    for (let j = 0; j < nSplit.length; j++) {
                        let finalNum = Number(nSplit[j]);
                        finalNumbers.push(finalNum);
                    }
                }
            }
        }
    }
    let total = sumNumbers(finalNumbers)
    return total;
}


console.log(add("//4\n142"));