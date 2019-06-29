function absoluteValuesSumMinimization(a) {
    let resultOk = 0;
    let result = +Infinity;

    //parcours valeur par valeur
    for (let i = 0; i < a.length; i++) {
        let sum = 0;
        let sumXtra = 0;

        //Addition valeur i avec toutes les autres valeurs
        for (let j = 0; j < a.length; j++) {
            if (a[j] > a[i]) {
                sum += (a[j] - a[i]);
            } else {
                sum += (a[i] - a[j]);
            }
        }

        //Re parcours valeur avec sum, calcul ecart
        for (let k = 0; k < a.length; k++) {
            if (sum > a[k]) {
                sumXtra = sumXtra + sum - a[k];
            } else {
                sumXtra += a[k] - sum;
            }
        }

        //Verification absoluteValuesSumMinimization
        console.log("sumXtra = " + sumXtra);
        if (sumXtra < result) {
            result = sumXtra;
            resultOk = a[i];
        }
    }
    return resultOk;
}
console.log(absoluteValuesSumMinimization([2, 4, 7]));