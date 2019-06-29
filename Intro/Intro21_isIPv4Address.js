function isIPv4Address(inputString) {
    let tableauIP = inputString.split(".");
    for (value of tableauIP){
        if (value>255 || value =="" || isNaN(value)){
            return false;
        }
    }
    return tableauIP.length==4;
}
console.log(isIPv4Address("1"));