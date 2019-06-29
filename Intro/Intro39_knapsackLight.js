function knapsackLight(value1, weight1, value2, weight2, maxW) {
    //Addition des 2 weight inférieur ou egale à maxW
    if (weight1 + weight2 <= maxW) {
        return value1 + value2;
    }

    //Si les 2 weight sont supérieurs à maxW
    if (weight1 > maxW && weight2 > maxW) {
        return 0;
    }

    //Sinon
    if (value1 >= value2 && weight1 <= maxW) {
        return value1;
    } else if (value1 >= value2 && weight1 > maxW) {
        return value2;
    } else if (value2 > value1 && weight2 <= maxW) {
        return value2;
    } else {
        return value1;
    }
}
console.log(knapsackLight(10, 2, 11, 3, 5));