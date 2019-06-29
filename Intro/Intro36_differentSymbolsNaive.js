function differentSymbolsNaive(s) {
    let array = s.split("");
    array.sort();
    let arrayOk = array.reduce(function(newArray, valCourante){
        if (newArray.indexOf(valCourante)===-1){
            newArray.push(valCourante);
        }
        return newArray;
    },[]);
    return arrayOk.length;
}
console.log(differentSymbolsNaive("cabca"));