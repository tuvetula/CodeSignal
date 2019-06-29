function differentSquares(matrix) {
    let newArray = [];
    let lastArray = [];
    let compteur=0;
    //Nombre de lignes de matrix
    loop1: for (let i = 0; i < matrix.length - 1; i++) {

        //Nombre de colonnes de matrix
        loop2:for (let j = 0; j < matrix[i].length - 1; j++) {
            newArray = [];
            newArray.push(matrix[i][j], matrix[i][j + 1], matrix[i + 1][j], matrix[i + 1][j + 1]);
            newArray=newArray.join("");

            loop3: for (let k = 0; k < lastArray.length; k++) {
                if (lastArray[k] == newArray) {
                    continue loop2;
                } else {
                    continue loop3;
                }
            }
            lastArray.push(newArray);
        }
    }
    console.log(lastArray);
    return lastArray.length;
}
console.log(differentSquares([[1, 2, 1],
[2, 2, 2],
[2, 2, 2],
[1, 2, 3],
[2, 2, 1]]));