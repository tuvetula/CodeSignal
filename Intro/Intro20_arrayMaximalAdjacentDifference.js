function arrayMaximalAdjacentDifference(inputArray) {
    let resultat = 0;
    let differenceEntreDeux = 0;
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] < inputArray[i + 1]) {
            differenceEntreDeux = inputArray[i + 1] - inputArray[i];
            if (differenceEntreDeux > resultat) {
                resultat = differenceEntreDeux;
            }
        } else {
            differenceEntreDeux = inputArray[i] - inputArray[i + 1];
            if (differenceEntreDeux > resultat) {
                resultat = differenceEntreDeux;
            }
        }
    }
    return resultat;
}
    console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));