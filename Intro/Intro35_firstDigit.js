function firstDigit(inputString) {
    for (let i = 0 ; i < inputString.length; i++){
        if (isNaN(inputString[i]) == false && inputString[i]!=" "){
            return inputString[i];
        }
    }
}
console.log(firstDigit("var_1__Int"));