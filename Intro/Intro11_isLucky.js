function isLucky(n) {
    let userData = n.toString();
    let array = [];
    let sumLeft = 0;
    let sumRight = 0;
    
    for (let i = 0; i < userData.length; i++) {
        array.push(userData.substring(i, i + 1));
    }
    
    for (let i = 0; i < array.length / 2; i++) {
        parseInt(array[i], 10);
        sumLeft += +array[i];
    }
    
    for (let i = array.length / 2; i < array.length; i++) {
        parseInt(array[i], 10);
        sumRight += +array[i];
    }
    
    console.log(sumLeft);
    console.log(sumRight);
    
    if (sumLeft == sumRight) {
        return true;
    } else {
        return false;
    }
}


console.log(isLucky(124789));