function circleOfNumbers(n, firstNumber) {
    let differenceEntre2 = n/2;
    if (firstNumber<differenceEntre2){
        return firstNumber+differenceEntre2;
    }else{
        return firstNumber-differenceEntre2;
    }
}
console.log(circleOfNumbers(10,7));