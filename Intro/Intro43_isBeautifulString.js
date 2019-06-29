function isBeautifulString(inputString) {
    let arrayAlphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let arrayInputString = inputString.split("").sort();

    for (let i = 0; i < arrayAlphabet.length; i++) {
        let compteur=0;
        for (let j = 0 ; j <arrayInputString.length ; j++){
            if (arrayInputString[j] == arrayAlphabet[i]){
                compteur+=1;
            }
        }
        arrayAlphabet.splice(i,1,compteur);
    }

    for (let i = 1 ; i < arrayAlphabet.length ; i++){
        if (arrayAlphabet[i]>arrayAlphabet[i-1]){
            return false;
        }
    }
    return true;
}
console.log(isBeautifulString("bbc"));