function bishopAndPawn(bishop, pawn) {
    //Mise en tableau de chaque valeur
    let position = bishop.split("");
    let cible = pawn.split("");
    console.log(position);
    console.log(cible);

    //Définition des 2 tables
    let lettersTable = ["a", "b", "c", "d", "e", "f", "g", "h"];
    let numbersTable = [1, 2, 3, 4, 5, 6, 7, 8];

    //Création tableaux pour recevoir index
    let indexPosition = [];
    let indexCible = [];

    //Calcul index des deux lettres des deux valeurs
    for (let i = 0; i < lettersTable.length; i++) {
        if (lettersTable[i] == position[0]) {
            indexPosition.push(i);
        }
        if (lettersTable[i] == cible[0]) {
            indexCible.push(i);
        }
    }

    //Calcul index des deux chiffres des deux valeurs
    for (let i = 0; i < numbersTable.length; i++) {
        if (numbersTable[i] == position[1]) {
            indexPosition.push(i);
        }
        if (numbersTable[i] == cible[1]) {
            indexCible.push(i);
        }
    }
    console.log(indexPosition);
    console.log(indexCible);

    //Calcul difference des 2 index lettres
    let differenceLetter = indexPosition[0] - indexCible[0];
    console.log(differenceLetter);

    //Condition réponse
    if (indexPosition[1] + differenceLetter == indexCible[1] || indexPosition[1] - differenceLetter == indexCible[1]) {
        return true;
    } else {
        return false;
    }
}
console.log(bishopAndPawn("b4", "d6"));