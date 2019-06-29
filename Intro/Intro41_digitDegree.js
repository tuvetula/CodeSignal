function digitDegree(n) {
    let chaine = n.toString(10);
    
    function calcul(numberString, count) {
        let compteur = 0;
        if (numberString.length>1){
            compteur += 1;
        }
        let sum = 0;
        for (let i = 0; i < numberString.length; i++) {
            sum += +numberString[i];
        }
        let sumTransform = sum.toString(10);
        compteur += count;
        if (sumTransform.length > 1) {
            return calcul(sumTransform, compteur);
        } else {
            return compteur;
        }
    }
    
    return calcul(chaine,0);
}

console.log(digitDegree(5));
console.log(digitDegree(100));
console.log(digitDegree(919264));