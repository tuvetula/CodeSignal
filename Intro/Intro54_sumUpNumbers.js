function sumUpNumbers(inputString) {
    let arrayNumbers = [];
    let newNumberArray = [];

    for (let i = 0; i < inputString.length; i++) {

        if (isNaN(parseInt(inputString[i]))) {

            if (newNumberArray.length > 0) {
                arrayNumbers.push(parseInt(newNumberArray.join("")));
                newNumberArray = [];
            }

        } else {
            newNumberArray.push(inputString[i]);
            if (i == inputString.length - 1) {
                arrayNumbers.push(parseInt(newNumberArray.join("")));
            }
        }
    }

    if (arrayNumbers.length > 0) {

        return arrayNumbers.reduce(function (a, b) {
            return a + b;
        })
    } else {
        
        return 0;
    }
}
console.log(sumUpNumbers("123456"));