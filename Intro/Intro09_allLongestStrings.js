function allLongestStrings(inputArray) {
    let nbCarac = 0;
    let result = [];
    let resultOk = [];
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length > nbCarac) {
            nbCarac = inputArray[i].length;
        }
    }
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length == nbCarac) {
            result.push(inputArray[i])
        }
    }
    return result;

}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));