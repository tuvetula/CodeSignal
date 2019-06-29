function palindromeRearranging(inputString) {
    let resultat = true;
    let tableau = inputString.split("");
    console.log(tableau);

    //Supprime les doublons
    loop1: for (let i = 0; i < tableau.length; i++) {
        for (let j = i + 1; j < tableau.length; j++) {


            if (tableau[i] == tableau[j]) {
                tableau.splice(j, 1);
                tableau.splice(i, 1);

                i--;
                console.log(tableau);
                continue loop1;
            }
        }
    }

    //Verification reste du tableau
    if (tableau.length > 1) {
        loop2: for (let i = 0; i < tableau.length - 1; i++) {
            if (tableau[i] == tableau[i + 1]) {
                resultat = true;
            } else {
                return false;
            }
        }
    }
    return resultat;
}
console.log(palindromeRearranging("zyyzzzzz"));