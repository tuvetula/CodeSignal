function longestDigitsPrefix(inputString) {
    let result = "";
    for (let i = 0; i < inputString.length; i++) {
        if (isNaN(inputString[i]) || inputString[i]==" ") {
            return result;
        } else {
            result += inputString[i];
        }
    }
    return result;
}
console.log(longestDigitsPrefix(" 123aa1"));