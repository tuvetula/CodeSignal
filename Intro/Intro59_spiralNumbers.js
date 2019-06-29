function spiralNumbers(n) {
    let result = [];
    //Initialisation damier
    for (let i = 0; i < n; i++) {
        result.push([]);
        for (let j = 0; j < n; j++) {
            result[i].push(0);
        }
    }

    let firstLine = 0;
    let lastLine = n;
    let firstColumn = 0;
    let lastColumn = n;
    let compteur = 1;

    for (let i = 0; i < n / 2; i++) {
        //Remplissage premiere ligne
        for (let i = firstColumn; i < lastColumn; i++) {
            result[firstLine][i] = compteur;
            compteur++;
        }
        firstLine++;
        //Remplissage derniere colonne
        for (let i = firstLine; i < lastLine; i++) {
            result[i][lastColumn - 1] = compteur;
            compteur++
        }
        lastColumn--;
        //Remplissage dernière ligne
        for (let i = lastColumn - 1; i >= firstColumn; i--) {
            result[lastLine - 1][i] = compteur;
            compteur++;
        }
        lastLine--;
        //Remplissage première colonne
        for (let i = lastLine - 1; i >= firstLine; i--) {
            result[i][firstColumn] = compteur;
            compteur++;
        }
        firstColumn++;
    }
    return result;
}
console.log(spiralNumbers(3));