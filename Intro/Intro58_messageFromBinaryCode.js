function messageFromBinaryCode(code) {
    let array = [];
    //Division du code tous les 8 caractères dans un tableau 
    for (let i = 0; i < code.length; i += 8) {
        array.push(code.substr(i, 8));
    }

    //Conversion binaire en nombres
    for (let i = 0; i < array.length; i++) {
        let result = 0;
        let multi = 1;
        for (let j = 7; j >= 0; j--) {
            array[i][j] = parseInt(array[i][j]);
            if (array[i][j] == 0) {
                result += 0;
            } else {
                result += array[i][j] * multi;
            }
            multi *= 2;
        }
        array[i] = result;
    }
    //Conversion en caractères selon table ascii
    for (let i = 0; i < array.length; i++) {
        array[i] = String.fromCharCode(array[i]);
    }
    //Assemblage et retour du résultat
    return array.join("");
}

console.log(messageFromBinaryCode("010010000110010101101100011011000110111100100001"));