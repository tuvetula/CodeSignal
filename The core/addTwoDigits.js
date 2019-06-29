function addTwoDigits(n) {
    let result = 0;
    let numberToString = n.toString().split("").forEach(element => {
        result += Number(element);
    });
    return result;
}
console.log(addTwoDigits(29));
